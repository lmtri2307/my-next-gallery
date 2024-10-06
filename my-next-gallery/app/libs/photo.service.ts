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
  return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6EuNkDpNk-b8P8UhLV8mdf2UOVGDMj2IKdg&s";
};

const createPhoto = async (file: File): Promise<Photo> => {
  const url = await uploadToStorage(file);
  const newPhoto = await prisma.photo.create({
    data: {
      url,
    },
    include: { comments: true },
  });
  return mapper.toPhoto(newPhoto);
};

const addComment = async (photoId: number, text: string): Promise<void> => {
  await prisma.comment.create({
    data: {
      photoId,
      text,
    },
  });
};

export const PhotoService = {
  getAllPhotos,
  createPhoto,
  addComment,
};
