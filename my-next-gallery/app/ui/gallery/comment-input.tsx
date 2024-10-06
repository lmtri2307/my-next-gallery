"use client";
import Search from "antd/es/input/Search";
import { useRouter } from "next/navigation";

interface CommentInputProps {
  id: number;
}

export default function CommentInput({ id }: CommentInputProps) {
  const router = useRouter();

  const handleAddComment = async (comment: string) => {
    await fetch(`/api/photos/${id}/comments`, {
      method: "POST",
      body: JSON.stringify({
        comment,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    router.refresh();
  };
  return (
    <Search
      placeholder="input search text"
      allowClear
      enterButton="Add Comment"
      size="large"
      onSearch={handleAddComment}
      className="mt-4"
    />
  );
}
