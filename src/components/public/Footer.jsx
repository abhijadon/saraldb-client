"use client";

import React from "react";
import { Layout as AntLayout, Typography, Row, Col, Space, Button } from "antd";
import { DatabaseOutlined, TwitterOutlined, LinkedinOutlined } from "@ant-design/icons";
import { useTheme } from "@/context";

import NextLink from "next/link";

const { Footer: AntFooter } = AntLayout;
const { Text, Title } = Typography;

export function Footer() {
  const { isDarkMode } = useTheme();

  return (
    <AntFooter
      style={{
        background: isDarkMode ? "#090d16" : "#f1f5f9",
        borderTop: `1px solid ${isDarkMode ? "#1e293b" : "#e2e8f0"}`,
        padding: "60px 48px 32px 48px",
        color: isDarkMode ? "#94a3b8" : "#64748b",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Row gutter={[32, 32]}>
          <Col xs={24} md={9}>
            <Space align="center" size="small" style={{ marginBottom: 16 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  fontSize: 16,
                }}
              >
                <DatabaseOutlined />
              </div>
              <Title level={4} style={{ margin: 0 }}>
                SaralDB
              </Title>
            </Space>
            <p style={{ maxWidth: 320, lineHeight: "1.6", fontSize: 14 }}>
              Next-Generation Ultra-Fast Distributed NoSQL Database with Native JSON, Real-Time Subscriptions, and Built-in Admin Studio.
            </p>
            <Space size="middle" style={{ marginTop: 12 }}>
              <Button type="text" icon={<TwitterOutlined style={{ fontSize: 18 }} />} />
              <Button type="text" icon={<LinkedinOutlined style={{ fontSize: 18 }} />} />
            </Space>
          </Col>

          <Col xs={12} sm={8} md={5}>
            <Text strong style={{ display: "block", marginBottom: 16, color: isDarkMode ? "#f8fafc" : "#0f172a" }}>
              Product
            </Text>
            <Space orientation="vertical" size="small">
              <NextLink href="/pricing" style={{ color: "#94a3b8" }}>Pricing Plans</NextLink>
              <NextLink href="/admin/databases" style={{ color: "#94a3b8" }}>Document Store</NextLink>
              <NextLink href="/admin/query" style={{ color: "#94a3b8" }}>Key-Value Engine</NextLink>
              <NextLink href="/admin/analytics" style={{ color: "#94a3b8" }}>Real-Time Streams</NextLink>
              <NextLink href="/admin" style={{ color: "#94a3b8" }}>SaralDB Admin</NextLink>
            </Space>
          </Col>

          <Col xs={12} sm={8} md={5}>
            <Text strong style={{ display: "block", marginBottom: 16, color: isDarkMode ? "#f8fafc" : "#0f172a" }}>
              Resources
            </Text>
            <Space orientation="vertical" size="small">
              <NextLink href="/docs" style={{ color: "#94a3b8" }}>Documentation</NextLink>
              <NextLink href="/blog" style={{ color: "#94a3b8" }}>Tech Blog</NextLink>
              <NextLink href="/support" style={{ color: "#94a3b8" }}>Support Center</NextLink>
            </Space>
          </Col>

          <Col xs={12} sm={8} md={5}>
            <Text strong style={{ display: "block", marginBottom: 16, color: isDarkMode ? "#f8fafc" : "#0f172a" }}>
              Company
            </Text>
            <Space orientation="vertical" size="small">
              <NextLink href="/contact" style={{ color: "#94a3b8" }}>Contact Us</NextLink>
              <NextLink href="/support" style={{ color: "#94a3b8" }}>Support</NextLink>
              <NextLink href="/docs" style={{ color: "#94a3b8" }}>Privacy Policy</NextLink>
            </Space>
          </Col>
        </Row>

        <div
          style={{
            marginTop: 48,
            paddingTop: 24,
            borderTop: `1px solid ${isDarkMode ? "#1e293b" : "#e2e8f0"}`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
            fontSize: 13,
          }}
        >
          <Text type="secondary">
            © {new Date().getFullYear()} SaralDB Open Source Project. Crafted for high-scale applications.
          </Text>
          <Text type="secondary">Created by Abhishek Jadon</Text>
        </div>
      </div>
    </AntFooter>
  );
}

export default Footer;
