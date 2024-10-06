import React from "react";
import { Menu } from "antd";
import { Header as AntdHeader } from "antd/es/layout/layout";

export default function Header() {
  return (
    <AntdHeader>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        items={[{ key: "1", label: "My Next Gallery" }]}
      />
    </AntdHeader>
  );
}
