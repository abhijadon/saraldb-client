"use client";

import React from "react";
import { Layout, Typography, Space } from "antd";
import { useTheme } from "@/context/ThemeContext";

const { Footer: AntFooter } = Layout;
const { Text, Link } = Typography;

export function Footer() {
  const { isDarkMode } = useTheme();

  return (
    <AntFooter
      style={{
        textAlign: "center",
        padding: "16px 24px",
        background: isDarkMode ? "#0f172a" : "#f8fafc",
        borderTop: `1px solid ${isDarkMode ? "#334155" : "#e2e8f0"}`,
        color: isDarkMode ? "#94a3b8" : "#64748b",
        transition: "all 0.25s ease",
      }}
    >
      <Space size="large" align="center">
        <Text type="secondary" style={{ fontSize: 13 }}>
          © {new Date().getFullYear()} SaralDB Management System. All rights reserved.
        </Text>
        <Space size="middle" style={{ fontSize: 13 }}>
          <Link href="/docs" type="secondary">
            Documentation
          </Link>
          <Link href="#" type="secondary">
            Support
          </Link>
        </Space>
      </Space>
    </AntFooter>
  );
}

export default Footer;
