"use client";

import React from "react";
import { PublicLayout } from "@/components/public";
import { Typography, Card, Row, Col, Tag, Input, Space, Avatar } from "antd";
import { SearchOutlined, CalendarOutlined, UserOutlined } from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

export function BlogContent() {
  const posts = [
    {
      id: "1",
      title: "Achieving Sub-Millisecond Latency in Distributed Document Stores",
      snippet: "How SaralDB utilizes zero-copy JSON memory buffers and lock-free index structures to deliver ultra-fast queries under heavy write load.",
      category: "Engineering",
      author: "Abhishek Jadon",
      date: "Jul 24, 2026",
      readTime: "5 min read",
      color: "indigo",
    },
    {
      id: "2",
      title: "Announcing SaralDB v2.0: Live Subscriptions & Built-in Studio",
      snippet: "A deep dive into our biggest release yet — real-time web socket live queries, automated index recommendation, and dark-mode studio.",
      category: "Release Notes",
      author: "SaralDB Team",
      date: "Jul 18, 2026",
      readTime: "7 min read",
      color: "purple",
    },
    {
      id: "3",
      title: "Migrating from MongoDB to SaralDB: 10x Throughput Case Study",
      snippet: "Step-by-step benchmark comparing MongoDB and SaralDB for high-concurrency microservice architectures.",
      category: "Benchmarks",
      author: "Priya Singh",
      date: "Jul 10, 2026",
      readTime: "4 min read",
      color: "cyan",
    },
  ];

  return (
    <PublicLayout>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <Tag color="indigo" style={{ borderRadius: 12, padding: "4px 12px", marginBottom: 12 }}>
            SaralDB Tech Blog & Updates
          </Tag>
          <Title level={1} style={{ margin: "8px 0" }}>
            Latest Engineering & Product Insights
          </Title>
          <Paragraph type="secondary" style={{ fontSize: 18, maxWidth: 640, margin: "0 auto" }}>
            Deep dives on database internals, distributed consensus, query optimizations, and release notes.
          </Paragraph>
          <div style={{ maxWidth: 440, margin: "24px auto 0 auto" }}>
            <Input
              size="large"
              placeholder="Search articles..."
              prefix={<SearchOutlined />}
              style={{ borderRadius: 10 }}
            />
          </div>
        </div>

        {/* Featured Blog Posts */}
        <Row gutter={[24, 24]}>
          {posts.map((post) => (
            <Col xs={24} md={8} key={post.id}>
              <Card
                hoverable
                style={{ height: "100%", borderRadius: 14, display: "flex", flexDirection: "column" }}
                styles={{ body: { padding: 24, display: "flex", flexDirection: "column", height: "100%" } }}
              >
                <Tag color={post.color} style={{ width: "max-content", marginBottom: 12, borderRadius: 6 }}>
                  {post.category}
                </Tag>
                <Title level={4} style={{ marginBottom: 12, lineHeight: 1.3 }}>
                  {post.title}
                </Title>
                <Paragraph type="secondary" style={{ flex: 1, fontSize: 14 }}>
                  {post.snippet}
                </Paragraph>
                <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid rgba(140, 140, 140, 0.15)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Space size="small">
                    <Avatar icon={<UserOutlined />} size="small" style={{ backgroundColor: "#6366f1" }} />
                    <Text type="secondary" style={{ fontSize: 12 }}>
                      {post.author}
                    </Text>
                  </Space>
                  <Text type="secondary" style={{ fontSize: 12 }}>
                    <CalendarOutlined /> {post.date}
                  </Text>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </PublicLayout>
  );
}

export default BlogContent;
