"use server";

import { revalidateTag } from "next/cache";
import { PhotoService } from "@/app/libs/photo.service";

export const GET = async () => {
  const photos = await PhotoService.getAllPhotos();
  return Response.json({ photos });
};

export const POST = async (req: Request) => {
  const form = await req.formData();
  const file = form.get("image");
  if (!file) return Response.error();
  const newPhoto = await PhotoService.createPhoto(file as File);
  revalidateTag("photos");
  return Response.json({ photo: newPhoto });
};
