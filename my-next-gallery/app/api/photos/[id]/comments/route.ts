"use server";

import { PhotoService } from "@/app/libs/photo.service";
import { revalidateTag } from "next/cache";

export const POST = async (
  req: Request,
  { params: { id } }: { params: { id: string } },
) => {
  const photoId = parseInt(id);
  if (isNaN(photoId)) {
    return Response.json({ error: "Invalid photo ID" }, { status: 400 });
  }

  const { comment } = await req.json();
  if (typeof comment !== "string") {
    return Response.json({ error: "Invalid comment" }, { status: 400 });
  }

  await PhotoService.addComment(photoId, comment);
  revalidateTag("photos");
  return Response.json({ success: true });
};
