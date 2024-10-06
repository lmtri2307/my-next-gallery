"use client";
import { useNotifySuccess } from "@/hooks/useNotifySuccess";
import { message } from "antd";
import Search from "antd/es/input/Search";
import { useRouter } from "next/navigation";
import { startTransition, useState } from "react";

interface CommentInputProps {
  id: number;
}

export default function CommentInput({ id }: CommentInputProps) {
  const router = useRouter();
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setSuccessMessage } = useNotifySuccess();

  const handleAddComment = async (comment: string) => {
    try {
      setIsLoading(true);
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
      startTransition(() => {
        router.refresh();
        setComment("");
        setIsLoading(false);
        setSuccessMessage({ message: "Comment added successfully" });
      });
    } catch (error) {
      message.error((error as Error).message);
      setIsLoading(false);
    }
  };

  return (
    <Search
      value={comment}
      onChange={(e) => setComment(e.target.value)}
      placeholder="input comment"
      enterButton="Add Comment"
      size="large"
      loading={isLoading}
      onSearch={handleAddComment}
      className="mt-4"
    />
  );
}
