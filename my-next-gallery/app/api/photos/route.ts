"use server";

import { revalidateTag } from "next/cache";
import { addPhoto, fetchPhotos } from "../../libs/data";

export const GET = async () => {
  const photos = await fetchPhotos();
  return Response.json({ photos });
};

const uploadToStorage = async (file: File): Promise<string> => {
  return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6EuNkDpNk-b8P8UhLV8mdf2UOVGDMj2IKdg&s";
};

export const POST = async (req: Request) => {
  const form = await req.formData();
  const file = form.get("image");
  if (!file) return Response.error();
  const url = await uploadToStorage(file as File);
  const newPhoto = await addPhoto(url);
  revalidateTag("photos");
  return Response.json({ photo: newPhoto });
};
