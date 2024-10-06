"use client";
import Search from "antd/es/input/Search";

export default function CommentInput() {
  return (
    <Search
      placeholder="input search text"
      allowClear
      enterButton="Add Comment"
      size="large"
      onSearch={(value) => console.log(value)}
      className="mt-4"
    />
  );
}
