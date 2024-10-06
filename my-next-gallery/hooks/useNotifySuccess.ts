"use client";
import { message } from "antd";
import { useEffect, useState } from "react";

type SuccessMessage = {
  message: string;
};

export const useNotifySuccess = () => {
  const [successMessage, setSuccessMessage] = useState<SuccessMessage | null>(
    null,
  );

  useEffect(() => {
    if (successMessage) {
      message.success(successMessage.message);
    }
  }, [successMessage]);

  return { setSuccessMessage };
};
