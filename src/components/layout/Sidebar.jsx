"use client";

import React from "react";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  DatabaseOutlined,
  TableOutlined,
  CodeOutlined,
  LineChartOutlined,
  SettingOutlined,
  SafetyCertificateOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useTheme, useLayout, useAuth } from "@/context";
import { usePathname, useRouter } from "next/navigation";

const { Sider } = Layout;

export function Sidebar() {
  const { isDarkMode } = useTheme();
  const { sidebarCollapsed, setSidebarCollapsed } = useLayout();
  const { logout } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    {
      key: "/admin",
      icon: <DashboardOutlined />,
      label: "Dashboard",
    },
    {
      key: "/admin/databases",
      icon: <DatabaseOutlined />,
      label: "Databases",
    },
    {
      key: "/admin/tables",
      icon: <TableOutlined />,
      label: "Tables & Schemas",
    },
    {
      key: "/admin/query",
      icon: <CodeOutlined />,
      label: "Query Editor",
    },
    {
      key: "/admin/analytics",
      icon: <LineChartOutlined />,
      label: "Analytics & Logs",
    },
    {
      key: "/admin/security",
      icon: <SafetyCertificateOutlined />,
      label: "Security & Roles",
    },
    {
      key: "/admin/settings",
      icon: <SettingOutlined />,
      label: "Settings",
    },
    {
      type: "divider",
    },
    {
      key: "logout",
      icon: <LogoutOutlined style={{ color: "#ef4444" }} />,
      label: "Logout",
      danger: true,
    },
  ];

  const handleMenuClick = ({ key }) => {
    if (key === "logout") {
      logout();
      router.push("/");
    } else {
      router.push(key);
    }
  };

  return (
    <Sider
      collapsible
      collapsed={sidebarCollapsed}
      onCollapse={setSidebarCollapsed}
      breakpoint="lg"
      collapsedWidth={80}
      trigger={null}
      width={240}
      style={{
        background: isDarkMode ? "#1e293b" : "#ffffff",
        borderRight: `1px solid ${isDarkMode ? "#334155" : "#e2e8f0"}`,
        height: "calc(100vh - 64px)",
        position: "sticky",
        top: 64,
        left: 0,
        overflow: "auto",
        transition: "all 0.25s ease",
      }}
    >
      <Menu
        mode="inline"
        selectedKeys={[pathname || "/"]}
        items={menuItems}
        onClick={handleMenuClick}
        style={{
          borderRight: "none",
          padding: "12px 8px",
          background: "transparent",
        }}
      />
    </Sider>
  );
}

export default Sidebar;
