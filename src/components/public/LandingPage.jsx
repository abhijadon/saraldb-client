"use client";

import React, { useState } from "react";
import {
  Typography,
  Button,
  Space,
  Row,
  Col,
  Card,
  Tag,
  Tabs,
  Badge,
  Table,
} from "antd";
import {
  ThunderboltOutlined,
  SafetyCertificateOutlined,
  CloudServerOutlined,
  CodeOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  DatabaseOutlined,
  RocketOutlined,
  CopyOutlined,
} from "@ant-design/icons";
import { useTheme, useAuth } from "@/context";
import LoginModal from "./LoginModal";

const { Title, Paragraph, Text } = Typography;

export function LandingPage({ onOpenAdmin }) {
  const { isDarkMode } = useTheme();
  const { isLoggedIn } = useAuth();
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const handleStart = () => {
    if (isLoggedIn) {
      if (onOpenAdmin) onOpenAdmin();
    } else {
      setLoginModalOpen(true);
    }
  };

  const codeExamples = {
    js: `import { SaralClient } from "saraldb";

const db = new SaralClient({ endpoint: "localhost:7700" });

// High-speed JSON Insert
await db.collection("users").insert({
  name: "Abhishek",
  role: "Lead Architect",
  tags: ["nosql", "fast"]
});

// Lightning Query (< 1ms)
const activeUsers = await db.collection("users")
  .find({ status: "active" })
  .limit(10);`,

    python: `from saraldb import SaralClient

db = SaralClient(endpoint="localhost:7700")

# Insert document
db.collection("products").insert({
    "sku": "SRL-99",
    "price": 199.99,
    "stock": 450
})`,
  };

  const sampleDbRows = [
    { key: "1", id: "usr_991", name: "Abhishek", role: "SuperAdmin", status: "Active", latency: "0.4ms" },
    { key: "2", id: "usr_992", name: "Priya Singh", role: "Developer", status: "Active", latency: "0.2ms" },
    { key: "3", id: "usr_993", name: "Rohan Verma", role: "Analyst", status: "Active", latency: "0.5ms" },
  ];

  return (
    <div style={{ minHeight: "100vh", overflowX: "hidden" }}>
      {/* Hero Section */}
      <section
        style={{
          padding: "100px 24px 80px 24px",
          textAlign: "center",
          maxWidth: 1200,
          margin: "0 auto",
          position: "relative",
        }}
      >
        <Space orientation="vertical" size="large" style={{ width: "100%" }}>
          <Tag
            color="indigo"
            style={{
              padding: "6px 16px",
              borderRadius: 20,
              fontSize: 14,
              border: "1px solid #6366f1",
              background: isDarkMode ? "rgba(99, 102, 241, 0.15)" : "#eef2ff",
              color: "#6366f1",
              fontWeight: 600,
            }}
          >
            ⚡ SaralDB v2.0 - High Performance NoSQL Database
          </Tag>

          <Title
            level={1}
            style={{
              fontSize: "clamp(36px, 6vw, 64px)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-1.5px",
              margin: "12px 0",
            }}
          >
            The Database Designed for <br />
            <span
              style={{
                background: "linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Ultra-Fast Modern Apps
            </span>
          </Title>

          <Paragraph
            style={{
              fontSize: "clamp(16px, 2.5vw, 20px)",
              color: isDarkMode ? "#94a3b8" : "#64748b",
              maxWidth: 720,
              margin: "0 auto 24px auto",
              lineHeight: 1.6,
            }}
          >
            SaralDB is an open-source, sub-millisecond document database with native JSON storage, real-time live queries, and an intuitive built-in Admin Studio.
          </Paragraph>

          <Space size="large" align="center" style={{ justifyContent: "center", flexWrap: "wrap" }}>
            <Button
              type="primary"
              size="large"
              icon={<RocketOutlined />}
              onClick={handleStart}
              style={{
                height: 52,
                padding: "0 36px",
                fontSize: 16,
                fontWeight: 600,
                borderRadius: 12,
                background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
                boxShadow: "0 8px 24px rgba(99, 102, 241, 0.4)",
              }}
            >
              {isLoggedIn ? "Open Admin Dashboard" : "Launch Admin Studio"}
            </Button>

            <Button
              size="large"
              icon={<CodeOutlined />}
              onClick={() => window.location.href = "/docs"}
              style={{
                height: 52,
                padding: "0 30px",
                fontSize: 16,
                borderRadius: 12,
              }}
            >
              View Documentation
            </Button>
          </Space>
        </Space>
      </section>

      {/* Interactive Mock Studio Preview */}
      <section style={{ maxWidth: 1100, margin: "0 auto 80px auto", padding: "0 24px" }}>
        <Card
          style={{
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: isDarkMode
              ? "0 20px 50px rgba(0, 0, 0, 0.6)"
              : "0 20px 50px rgba(99, 102, 241, 0.12)",
            borderColor: isDarkMode ? "#334155" : "#e2e8f0",
          }}
          styles={{ body: { padding: 0 } }}
        >
          <div
            style={{
              padding: "14px 20px",
              background: isDarkMode ? "#1e293b" : "#f1f5f9",
              borderBottom: `1px solid ${isDarkMode ? "#334155" : "#e2e8f0"}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Space size="small">
              <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#ef4444", display: "inline-block" }} />
              <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#eab308", display: "inline-block" }} />
              <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
              <Text strong style={{ marginLeft: 12, fontSize: 13 }}>
                SaralDB Admin Studio Preview
              </Text>
            </Space>
            <Tag color="green">
              <Badge status="processing" color="green" /> Cluster Online
            </Tag>
          </div>

          <div style={{ padding: 24 }}>
            <Row gutter={[24, 24]}>
              <Col xs={24} md={14}>
                <div style={{ marginBottom: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Text strong style={{ fontSize: 14 }}>
                    <DatabaseOutlined style={{ color: "#6366f1", marginRight: 8 }} />
                    Collection: <Text code>users</Text>
                  </Text>
                  <Text type="secondary" style={{ fontSize: 12 }}>
                    Query latency: <b>0.3ms</b>
                  </Text>
                </div>
                <Table
                  dataSource={sampleDbRows}
                  pagination={false}
                  size="small"
                  columns={[
                    { title: "ID", dataIndex: "id", key: "id", render: (t) => <Text code>{t}</Text> },
                    { title: "Name", dataIndex: "name", key: "name" },
                    { title: "Role", dataIndex: "role", key: "role" },
                    {
                      title: "Status",
                      dataIndex: "status",
                      key: "status",
                      render: (s) => <Tag color="green">{s}</Tag>,
                    },
                  ]}
                />
              </Col>

              <Col xs={24} md={10}>
                <div style={{ marginBottom: 12 }}>
                  <Text strong style={{ fontSize: 14 }}>
                    <CodeOutlined style={{ color: "#6366f1", marginRight: 8 }} />
                    JSON Document View
                  </Text>
                </div>
                <pre
                  style={{
                    padding: 16,
                    borderRadius: 10,
                    fontSize: 13,
                    background: isDarkMode ? "#0f172a" : "#1e293b",
                    color: "#38bdf8",
                    margin: 0,
                    overflowX: "auto",
                  }}
                >
                  {`{\n  "_id": "usr_991",\n  "name": "Abhishek",\n  "role": "SuperAdmin",\n  "database": "SaralDB_Primary",\n  "indexes": ["name_1", "role_1"]\n}`}
                </pre>
              </Col>
            </Row>
          </div>
        </Card>
      </section>

      {/* Key Features Grid */}
      <section style={{ background: isDarkMode ? "#090d16" : "#f8fafc", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <Title level={2} style={{ margin: 0 }}>
              Why Engineers Choose SaralDB
            </Title>
            <Text type="secondary" style={{ fontSize: 16 }}>
              Built from scratch for extreme simplicity, security, and developer productivity.
            </Text>
          </div>

          <Row gutter={[24, 24]}>
            <Col xs={24} sm={12} lg={8}>
              <Card hoverable style={{ height: "100%", borderRadius: 14 }}>
                <ThunderboltOutlined style={{ fontSize: 32, color: "#6366f1", marginBottom: 16 }} />
                <Title level={4}>Sub-Millisecond Engine</Title>
                <Paragraph type="secondary">
                  Memory-optimized index structures and Zero-copy JSON parsing deliver blazing query speeds under heavy loads.
                </Paragraph>
              </Card>
            </Col>

            <Col xs={24} sm={12} lg={8}>
              <Card hoverable style={{ height: "100%", borderRadius: 14 }}>
                <CloudServerOutlined style={{ fontSize: 32, color: "#a855f7", marginBottom: 16 }} />
                <Title level={4}>MongoDB-Style Studio</Title>
                <Paragraph type="secondary">
                  Built-in graphical admin panel lets you inspect collections, run queries, and monitor clusters visually.
                </Paragraph>
              </Card>
            </Col>

            <Col xs={24} sm={12} lg={8}>
              <Card hoverable style={{ height: "100%", borderRadius: 14 }}>
                <SafetyCertificateOutlined style={{ fontSize: 32, color: "#10b981", marginBottom: 16 }} />
                <Title level={4}>Enterprise Security</Title>
                <Paragraph type="secondary">
                  Role-based access control (RBAC), end-to-end TLS encryption, and automated scheduled snapshot backups.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* Code SDK Section */}
      <section style={{ padding: "80px 24px", maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <Title level={2}>Simple SDK Integration</Title>
          <Text type="secondary">Start querying in less than 2 minutes using standard drivers.</Text>
        </div>

        <Card style={{ borderRadius: 14, overflow: "hidden" }}>
          <Tabs
            defaultActiveKey="js"
            items={[
              {
                key: "js",
                label: "Node.js / TypeScript",
                children: (
                  <pre
                    style={{
                      background: isDarkMode ? "#0f172a" : "#0f172a",
                      color: "#f8fafc",
                      padding: 20,
                      borderRadius: 10,
                      fontSize: 14,
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {codeExamples.js}
                  </pre>
                ),
              },
              {
                key: "python",
                label: "Python",
                children: (
                  <pre
                    style={{
                      background: isDarkMode ? "#0f172a" : "#0f172a",
                      color: "#f8fafc",
                      padding: 20,
                      borderRadius: 10,
                      fontSize: 14,
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {codeExamples.python}
                  </pre>
                ),
              },
            ]}
          />
        </Card>
      </section>

      {/* Bottom CTA Banner */}
      <section style={{ padding: "0 24px 80px 24px" }}>
        <Card
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            borderRadius: 20,
            background: "linear-gradient(135deg, #4f46e5 0%, #6366f1 50%, #818cf8 100%)",
            color: "#ffffff",
            border: "none",
          }}
          styles={{ body: { padding: "48px 32px", textAlign: "center" } }}
        >
          <Title level={2} style={{ color: "#ffffff", margin: "0 0 12px 0" }}>
            Ready to experience SaralDB Admin Panel?
          </Title>
          <Paragraph style={{ color: "#e0e7ff", fontSize: 18, maxWidth: 600, margin: "0 auto 28px auto" }}>
            Launch the interactive MongoDB-style admin studio with one click.
          </Paragraph>
          <Button
            size="large"
            onClick={handleStart}
            style={{
              height: 48,
              padding: "0 32px",
              fontSize: 16,
              fontWeight: 600,
              color: "#4f46e5",
              borderRadius: 10,
              border: "none",
            }}
          >
            {isLoggedIn ? "Open Admin Panel Now" : "Sign In & Launch Admin Panel"}
          </Button>
        </Card>
      </section>

      <LoginModal open={loginModalOpen} onClose={() => setLoginModalOpen(false)} />
    </div>
  );
}

export default LandingPage;
