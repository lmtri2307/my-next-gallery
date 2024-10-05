import React from "react";
import { Menu } from "antd";
import { Header as AntdHeader } from "antd/es/layout/layout";
import MenuItem from "antd/es/menu/MenuItem";

export default function Header() {
  return (
    <AntdHeader>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal">
        <MenuItem key="1">My Next Gallery</MenuItem>
      </Menu>
    </AntdHeader>
  );
}
