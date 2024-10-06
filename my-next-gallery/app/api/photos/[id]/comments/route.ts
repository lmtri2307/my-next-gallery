"use server";

import { PhotoService } from "@/app/libs/photo.service";
import { revalidateTag } from "next/cache";

export const POST = async (
  req: Request,
  { params: { id } }: { params: { id: string } },
) => {
  const photoId = parseInt(id);
  const { comment } = await req.json();
  await PhotoService.addComment(photoId, comment);
  revalidateTag("photos");
  return Response.json({ success: true });
};
