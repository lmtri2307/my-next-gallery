"use server";

import { addComment } from "@/app/libs/data";
import { revalidateTag } from "next/cache";

export const POST = async (
  req: Request,
  { params: { id } }: { params: { id: string } },
) => {
  const photoId = parseInt(id);
  const { comment } = await req.json();
  await addComment({ photoId, comment });
  revalidateTag("photos");
  return Response.json({ success: true });
};
