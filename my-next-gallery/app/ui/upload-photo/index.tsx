"use client";

import { Button, UploadFile } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import Dragger from "antd/es/upload/Dragger";
import { useRouter } from "next/navigation";

export default function UploadPhoto() {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const router = useRouter();

  const handleChange = ({ file }: { file: UploadFile }) => {
    setFileList([file]);
  };

  const handleUpload = async () => {
    if (!fileList[0] || !fileList[0].originFileObj) return;
    const formData = new FormData();
    formData.append("image", fileList[0].originFileObj);
    await fetch("/api/photos", {
      method: "POST",
      body: formData,
    });
    setFileList([]);
    router.refresh();
  };

  const handleCancel = () => {
    setFileList([]);
  };

  return (
    <div className="mb-8 p-4 border-2 border-dashed border-gray-300 rounded-md">
      <h2 className="text-xl font-semibold mb-2">Upload Photo</h2>
      <Dragger
        name="image"
        accept="image/*"
        multiple={false}
        listType="picture"
        onChange={handleChange}
        fileList={fileList}
      >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibited from
          uploading company data or other banned files.
        </p>
      </Dragger>
      {fileList.length > 0 && (
        <div className="mt-4 flex space-x-4">
          <Button
            type="primary"
            onClick={handleUpload}
            className="bg-blue-500 hover:bg-blue-600"
          >
            Upload
          </Button>
          <Button
            type="default"
            onClick={handleCancel}
            className="bg-gray-200 hover:bg-gray-300"
          >
            Cancel
          </Button>
        </div>
      )}
    </div>
  );
}
