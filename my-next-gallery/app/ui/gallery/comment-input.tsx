"use client";
import { message } from "antd";
import Search from "antd/es/input/Search";
import { useRouter } from "next/navigation";

interface CommentInputProps {
  id: number;
}

export default function CommentInput({ id }: CommentInputProps) {
  const router = useRouter();

  const handleAddComment = async (comment: string) => {
    try {
      await fetch(`/api/photos/${id}/comments`, {
        method: "POST",
        body: JSON.stringify({
          comment,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(async (res) => {
        const body = await res.json();
        if (!res.ok) throw new Error(body.error);
        return body;
      });
      message.success("Comment added successfully");
      router.refresh();
    } catch (error) {
      message.error((error as Error).message);
    }
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
