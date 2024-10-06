import { PhotoService } from "@/app/libs/photo.service";

export const POST = async (
  req: Request,
  { params: { id } }: { params: { id: string } },
) => {
  const photoId = parseInt(id);
  if (isNaN(photoId)) {
    return Response.json({ error: "Invalid photo ID" }, { status: 400 });
  }

  const { comment } = await req.json();
  if (typeof comment !== "string" || comment.length === 0) {
    return Response.json({ error: "Invalid comment" }, { status: 400 });
  }

  await PhotoService.addComment(photoId, comment);
  return Response.json({ success: true });
};
