import { List } from "antd";
import Item from "antd/es/list/Item";
import React from "react";
import EmptyComments from "../empty-comments";

interface CommentListProps {
  comments: string[];
}

export default function CommentList({ comments }: CommentListProps) {
  return (
    <List size="small" bordered className="h-40 overflow-y-auto">
      {comments.map((comment, index) => (
        <Item key={index} className="text-gray-600">
          {comment}
        </Item>
      ))}
      {comments.length === 0 && <EmptyComments />}
    </List>
  );
}
