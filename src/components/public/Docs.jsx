"use client";

import React from "react";
import { PublicLayout } from "@/components/public";
import { Typography, Card, Row, Col, Input, Tag } from "antd";
import { SearchOutlined, BookOutlined, RocketOutlined, CodeOutlined, SafetyCertificateOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

export function Docs() {
  const categories = [
    { icon: <RocketOutlined style={{ fontSize: 24, color: "#6366f1" }} />, title: "Getting Started", desc: "Quick installation, CLI setup, and first connection." },
    { icon: <BookOutlined style={{ fontSize: 24, color: "#a855f7" }} />, title: "Core Concepts", desc: "Documents, collections, indexing, and memory architecture." },
    { icon: <CodeOutlined style={{ fontSize: 24, color: "#10b981" }} />, title: "Query API Reference", desc: "Find, Insert, Update, Delete, Aggregate, and Stream operators." },
    { icon: <SafetyCertificateOutlined style={{ fontSize: 24, color: "#f59e0b" }} />, title: "Security & RBAC", desc: "Authentication, TLS certificates, and permission roles." },
  ];

  return (
    <PublicLayout>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px" }}>
        {/* Docs Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <Tag color="purple" style={{ borderRadius: 12, padding: "4px 12px", marginBottom: 12 }}>
            SaralDB Documentation v2.0
          </Tag>
          <Title level={1} style={{ margin: "8px 0" }}>
            How can we help you build?
          </Title>
          <Paragraph type="secondary" style={{ fontSize: 18, maxWidth: 640, margin: "0 auto" }}>
            Comprehensive guides, API reference, benchmarks, and SDK tutorials for SaralDB.
          </Paragraph>
          <div style={{ maxWidth: 520, margin: "24px auto 0 auto" }}>
            <Input
              size="large"
              placeholder="Search documentation (e.g. indexes, replica sets, NodeJS driver)..."
              prefix={<SearchOutlined />}
              style={{ borderRadius: 10 }}
            />
          </div>
        </div>

        {/* Documentation Categories Grid */}
        <Row gutter={[24, 24]} style={{ marginBottom: 48 }}>
          {categories.map((cat, idx) => (
            <Col xs={24} sm={12} md={6} key={idx}>
              <Card hoverable style={{ height: "100%", borderRadius: 14 }}>
                <div style={{ marginBottom: 12 }}>{cat.icon}</div>
                <Title level={4} style={{ marginBottom: 8 }}>
                  {cat.title}
                </Title>
                <Paragraph type="secondary" style={{ fontSize: 13, margin: 0 }}>
                  {cat.desc}
                </Paragraph>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Quick Example Code Guide */}
        <Card title="Quick Start: Connecting with Node.js" style={{ borderRadius: 14 }}>
          <Paragraph>Install the official driver via Bun or NPM:</Paragraph>
          <pre style={{ background: "#0f172a", color: "#38bdf8", padding: 16, borderRadius: 8, fontSize: 14 }}>
            bun add saraldb
          </pre>
          <Paragraph style={{ marginTop: 16 }}>Connect and query your cluster:</Paragraph>
          <pre style={{ background: "#0f172a", color: "#f8fafc", padding: 16, borderRadius: 8, fontSize: 14 }}>
            {`import { SaralClient } from "saraldb";\n\nconst db = new SaralClient({ endpoint: "localhost:7700" });\nconst users = await db.collection("users").find({ active: true });\nconsole.log(users);`}
          </pre>
        </Card>
      </div>
    </PublicLayout>
  );
}

export default Docs;
