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

  if (!file)
    return Response.json({ error: "No file uploaded" }, { status: 400 });

  if (!(file instanceof File))
    return Response.json({ error: "Invalid file" }, { status: 400 });

  try {
    const newPhoto = await PhotoService.createPhoto(file as File);
    revalidateTag("photos");
    return Response.json({ photo: newPhoto });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return Response.json(
      { error: "Fail to upload this image" },
      { status: 500 },
    );
  }
};
