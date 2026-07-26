"use client";

import React from "react";
import { PublicLayout } from "@/components/public";
import { Typography, Card, Row, Col, Collapse, Tag, Button, Badge } from "antd";
import { CustomerServiceOutlined, MessageOutlined, FileTextOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

export function Support() {
  const faqs = [
    {
      key: "1",
      label: "What makes SaralDB sub-millisecond fast?",
      children: <p>SaralDB combines memory-mapped zero-copy JSON buffers with optimized lock-free indices, bypassing standard disk serialization overhead.</p>,
    },
    {
      key: "2",
      label: "Is SaralDB compatible with MongoDB drivers?",
      children: <p>Yes! SaralDB supports BSON/JSON dialect structures and provides native MongoDB compatibility layers.</p>,
    },
    {
      key: "3",
      label: "How does the built-in Admin Studio work?",
      children: <p>SaralDB includes a graphical Admin Studio out of the box so you can inspect schemas, run queries, and manage security without third-party tools.</p>,
    },
  ];

  return (
    <PublicLayout>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px" }}>
        {/* Support Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <Tag color="green" style={{ borderRadius: 12, padding: "4px 12px", marginBottom: 12 }}>
            <Badge status="success" /> All Systems Operational
          </Tag>
          <Title level={1} style={{ margin: "8px 0" }}>
            SaralDB Support & Help Center
          </Title>
          <Paragraph type="secondary" style={{ fontSize: 18, maxWidth: 640, margin: "0 auto" }}>
            Find answers to common questions or reach out to our core database engineers.
          </Paragraph>
        </div>

        {/* Support Options */}
        <Row gutter={[24, 24]} style={{ marginBottom: 48 }}>
          <Col xs={24} md={8}>
            <Card hoverable style={{ height: "100%", borderRadius: 14, textAlign: "center" }}>
              <CustomerServiceOutlined style={{ fontSize: 36, color: "#6366f1", marginBottom: 16 }} />
              <Title level={4}>24/7 Enterprise Support</Title>
              <Paragraph type="secondary">Dedicated Slack channel and 15-minute SLA response for enterprise clusters.</Paragraph>
              <Button type="primary">Contact Enterprise Team</Button>
            </Card>
          </Col>

          <Col xs={24} md={8}>
            <Card hoverable style={{ height: "100%", borderRadius: 14, textAlign: "center" }}>
              <MessageOutlined style={{ fontSize: 36, color: "#a855f7", marginBottom: 16 }} />
              <Title level={4}>Community Discord</Title>
              <Paragraph type="secondary">Join 5,000+ developers, share query optimizations, and report bugs directly.</Paragraph>
              <Button href="/contact">Join Community</Button>
            </Card>
          </Col>

          <Col xs={24} md={8}>
            <Card hoverable style={{ height: "100%", borderRadius: 14, textAlign: "center" }}>
              <FileTextOutlined style={{ fontSize: 36, color: "#10b981", marginBottom: 16 }} />
              <Title level={4}>Documentation Hub</Title>
              <Paragraph type="secondary">Browse API reference, client drivers, configuration schemas, and benchmarks.</Paragraph>
              <Button href="/docs">View Docs</Button>
            </Card>
          </Col>
        </Row>

        {/* FAQs */}
        <Card title="Frequently Asked Questions" style={{ borderRadius: 14 }}>
          <Collapse items={faqs} defaultActiveKey={["1"]} />
        </Card>
      </div>
    </PublicLayout>
  );
}

export default Support;
