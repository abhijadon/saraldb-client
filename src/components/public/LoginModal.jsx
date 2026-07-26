"use client";

import React, { useState } from "react";
import { Modal, Form, Input, Button, Typography, Space, Message, Divider } from "antd";
import { UserOutlined, LockOutlined, DatabaseOutlined, GoogleOutlined } from "@ant-design/icons";
import { useAuth } from "@/context";
import { useRouter } from "next/navigation";

const { Title, Text } = Typography;

export function LoginModal({ open, onClose }) {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleFinish = (values) => {
    setLoading(true);
    setTimeout(() => {
      login({ name: values.email?.split("@")[0] || "Abhishek Jadon", email: values.email || "abhishek@saraldb.io" });
      setLoading(false);
      onClose();
      router.push("/admin");
    }, 400);
  };

  const handleQuickDemoLogin = () => {
    setLoading(true);
    setTimeout(() => {
      login({ name: "Abhishek Jadon", email: "abhishek@saraldb.io" });
      setLoading(false);
      onClose();
      router.push("/admin");
    }, 300);
  };

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      centered
      width={420}
      styles={{ body: { padding: "32px 24px" } }}
    >
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 14,
            background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffff",
            fontSize: 24,
            marginBottom: 12,
          }}
        >
          <DatabaseOutlined />
        </div>
        <Title level={3} style={{ margin: 0 }}>
          Welcome to SaralDB
        </Title>
        <Text type="secondary">Sign in to access your admin dashboard</Text>
      </div>

      <Form layout="vertical" onFinish={handleFinish} requiredMark={false}>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please enter your email" }]}
        >
          <Input
            prefix={<UserOutlined style={{ color: "#94a3b8" }} />}
            placeholder="admin@saraldb.io"
            size="large"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input.Password
            prefix={<LockOutlined style={{ color: "#94a3b8" }} />}
            placeholder="••••••••"
            size="large"
          />
        </Form.Item>

        <Form.Item style={{ marginBottom: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            block
            loading={loading}
            style={{
              height: 42,
              borderRadius: 10,
              background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
            }}
          >
            Sign In to Admin Panel
          </Button>
        </Form.Item>
      </Form>

      <Divider style={{ margin: "16px 0", fontSize: 13 }}>OR</Divider>

      <Button
        block
        size="large"
        type="dashed"
        onClick={handleQuickDemoLogin}
        loading={loading}
        style={{ borderRadius: 10, height: 42, color: "#6366f1", borderColor: "#6366f1" }}
      >
        ⚡ Instant Demo Access (One-Click Login)
      </Button>

      <div style={{ textAlign: "center", marginTop: 20 }}>
        <Text type="secondary" style={{ fontSize: 13 }}>
          Don&apos;t have an account?{" "}
          <Text strong style={{ color: "#6366f1", cursor: "pointer" }} onClick={handleQuickDemoLogin}>
            Sign up free
          </Text>
        </Text>
      </div>
    </Modal>
  );
}

export default LoginModal;
