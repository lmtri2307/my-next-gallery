import { revalidateTag } from "next/cache";
import prisma from "./prisma";

export type Photo = {
  id: number;
  url: string;
  comments: string[];
};

export type CommentSchema = {
  id: number;
  photoId: number;
  text: string;
};

export type PhotoSchema = {
  id: number;
  url: string;
  comments: CommentSchema[];
};

const mapper = {
  toPhoto: (photo: PhotoSchema): Photo => {
    return {
      id: photo.id,
      url: photo.url,
      comments: photo.comments.map((comment) => comment.text),
    };
  },
};

const getAllPhotos = async (): Promise<Photo[]> => {
  const photos = await prisma.photo.findMany({
    include: { comments: true },
  });
  return photos.map(mapper.toPhoto);
};

const uploadToStorage = async (file: File): Promise<string> => {
  try {
    const formData = new FormData();
    formData.append("image", file);

    const response = await fetch("https://api.imgur.com/3/upload", {
      method: "POST",
      headers: {
        Authorization: `Client-ID ${process.env.IMGUR_CLIENT_ID}`,
      },
      body: formData,
    }).then((res) => res.json());
    if (!response.success) {
      throw new Error(response.data.error);
    }
    const imgurUrl = response.data.link;
    return imgurUrl;
  } catch (error) {
    console.error("Error uploading image to Imgur:", error);
    throw new Error("Failed to upload image");
  }
};

const createPhoto = async (file: File): Promise<Photo> => {
  const url = await uploadToStorage(file);
  const newPhoto = await prisma.photo.create({
    data: {
      url,
    },
    include: { comments: true },
  });
  revalidateTag("photos");
  return mapper.toPhoto(newPhoto);
};

const addComment = async (photoId: number, text: string): Promise<void> => {
  await prisma.comment.create({
    data: {
      photoId,
      text,
    },
  });
  revalidateTag("photos");
};

export const PhotoService = {
  getAllPhotos,
  createPhoto,
  addComment,
};
