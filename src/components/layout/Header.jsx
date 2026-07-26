"use client";

import React from "react";
import { Layout, Button, Space, Switch, Avatar, Dropdown, Typography, Input } from "antd";
import {
  SunOutlined,
  MoonOutlined,
  DatabaseOutlined,
  UserOutlined,
  BellOutlined,
  SearchOutlined,
  LogoutOutlined,
  SettingOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { useTheme, useLayout, useAuth } from "@/context";
import { useRouter } from "next/navigation";
import Image from "next/image";

const { Header: AntHeader } = Layout;
const { Text } = Typography;

export function Header() {
  const { isDarkMode, toggleTheme } = useTheme();
  const { sidebarCollapsed, toggleSidebar, headerTitle } = useLayout();
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  const userMenuItems = [
    {
      key: "profile",
      icon: <UserOutlined />,
      label: "My Profile",
    },
    {
      key: "settings",
      icon: <SettingOutlined />,
      label: "Settings",
      onClick: () => router.push("/admin/settings"),
    },
    {
      type: "divider",
    },
    {
      key: "logout",
      icon: <LogoutOutlined />,
      danger: true,
      label: "Logout",
      onClick: handleLogout,
    },
  ];

  return (
    <AntHeader
      style={{
        padding: "0 24px",
        background: isDarkMode ? "#1e293b" : "#ffffff",
        borderBottom: `1px solid ${isDarkMode ? "#334155" : "#e2e8f0"}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 100,
        height: 64,
        transition: "all 0.25s ease",
      }}
    >
      {/* Left section: Collapse Button & Logo */}
      <Space size="middle" align="center">
        <Button
          type="text"
          icon={sidebarCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={toggleSidebar}
          style={{ fontSize: "16px", width: 38, height: 38 }}
        />

        <Space align="center" size="small" style={{ cursor: "pointer" }} onClick={() => router.push("/admin")}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontSize: 18,
              boxShadow: "0 4px 12px rgba(99, 102, 241, 0.3)",
            }}
          >
            <DatabaseOutlined />
          </div>
          <Text strong style={{ fontSize: 18, letterSpacing: "-0.5px" }}>
            {headerTitle}
          </Text>
        </Space>
      </Space>

      {/* Right section: Theme Toggle, Notifications, User Dropdown */}
      <Space size="medium" align="center">
        <Space align="center" size="small">
          <Switch
            checked={isDarkMode}
            onChange={toggleTheme}
            checkedChildren={<MoonOutlined />}
            unCheckedChildren={<SunOutlined />}
          />
        </Space>

        <Dropdown menu={{ items: userMenuItems }} placement="bottomRight" arrow>
          <Space style={{ cursor: "pointer" }}>
            <Avatar
              style={{ backgroundColor: "#6366f1", cursor: "pointer" }}
              icon={<UserOutlined />}
            />
            <Text strong style={{ display: "none" }} className="md:inline">
              {user?.name || "Abhishek Jadon"}
            </Text>
          </Space>
        </Dropdown>
      </Space>
    </AntHeader>
  );
}

export default Header;
