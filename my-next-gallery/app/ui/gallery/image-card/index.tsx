import { Card } from "antd";
import Title from "antd/es/typography/Title";
import Image from "next/image";
import CommentInput from "./comment-input";
import CommentList from "./comment-list";

interface ImageCardProps {
  id: number;
  url: string;
  comments: string[];
}

export default function ImageCard({ id, url, comments }: ImageCardProps) {
  return (
    <Card className="rounded-t-lg shadow-md rounded-lg overflow-hidden">
      <div className="relative h-64 w-full">
        <Image
          src={url}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={`Image ${id}`}
          style={{ objectFit: "contain" }}
          className="rounded-lg"
        />
      </div>
      <div className="p-4">
        <Title level={4} className="mb-2">
          Comments
        </Title>
      </div>
      <CommentList comments={comments} />
      <CommentInput id={id} />
    </Card>
  );
}
