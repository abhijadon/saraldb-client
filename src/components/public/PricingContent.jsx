"use client";

import React, { useState } from "react";
import { PublicLayout } from "@/components/public";
import {
  Typography,
  Card,
  Row,
  Col,
  Button,
  Tag,
  Space,
  Segmented,
  Table,
} from "antd";
import {
  CheckCircleOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context";

const { Title, Paragraph, Text } = Typography;

export function PricingContent() {
  const [billingCycle, setBillingCycle] = useState("Yearly");
  const router = useRouter();
  const { isLoggedIn } = useAuth();

  const handleSelectPlan = () => {
    if (isLoggedIn) {
      router.push("/admin");
    } else {
      router.push("/login");
    }
  };

  const isYearly = billingCycle === "Yearly";

  const comparisonData = [
    { key: "1", feature: "Storage Capacity", free: "512 MB Shared", pro: "50 GB Dedicated", enterprise: "Unlimited / Custom" },
    { key: "2", feature: "RAM & CPU Allocation", free: "Shared Compute", pro: "4 GB RAM, 2 vCPU", enterprise: "Up to 256 GB RAM, 64 vCPU" },
    { key: "3", feature: "Sub-Millisecond Engine", free: "Included", pro: "Included", enterprise: "Included" },
    { key: "4", feature: "Automated Daily Backups", free: "No", pro: "Yes (7 days retention)", enterprise: "Yes (Point-in-time recovery)" },
    { key: "5", feature: "Live Query Subscriptions", free: "Max 10", pro: "1,000 Concurrent", enterprise: "Unlimited" },
    { key: "6", feature: "Security & RBAC Roles", free: "Basic", pro: "Advanced RBAC", enterprise: "Custom Roles, Audit Logs & VPC" },
    { key: "7", feature: "Support SLA", free: "Community Forum", pro: "24-hr Email Support", enterprise: "15-min SLA 24/7 Priority" },
  ];

  const columns = [
    { title: "Feature / Capability", dataIndex: "feature", key: "feature", render: (f) => <Text strong>{f}</Text> },
    { title: "Free Serverless", dataIndex: "free", key: "free" },
    { title: "Developer Pro", dataIndex: "pro", key: "pro", render: (p) => <Text style={{ color: "#6366f1", fontWeight: 600 }}>{p}</Text> },
    { title: "Dedicated Enterprise", dataIndex: "enterprise", key: "enterprise", render: (e) => <Text style={{ color: "#10b981", fontWeight: 600 }}>{e}</Text> },
  ];

  return (
    <PublicLayout>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <Tag color="indigo" style={{ borderRadius: 12, padding: "4px 12px", marginBottom: 12, fontSize: 13 }}>
            ⚡ Simple & Transparent MongoDB-Style Pricing
          </Tag>
          <Title level={1} style={{ margin: "8px 0", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 800 }}>
            Predictable Pricing for Any Scale
          </Title>
          <Paragraph type="secondary" style={{ fontSize: 18, maxWidth: 640, margin: "0 auto 24px auto" }}>
            Start free with serverless storage, scale up to dedicated clusters with zero downtime.
          </Paragraph>

          <Space size="middle" align="center">
            <Text strong>Billing Cycle:</Text>
            <Segmented
              options={["Monthly", "Yearly (Save 20%)"]}
              value={billingCycle}
              onChange={setBillingCycle}
              style={{ borderRadius: 10 }}
            />
          </Space>
        </div>

        {/* Pricing Cards Grid */}
        <Row gutter={[24, 24]} style={{ marginBottom: 64 }}>
          {/* Free Tier */}
          <Col xs={24} md={8}>
            <Card
              hoverable
              style={{ height: "100%", borderRadius: 16, display: "flex", flexDirection: "column" }}
              styles={{ body: { padding: 32, display: "flex", flexDirection: "column", height: "100%" } }}
            >
              <div style={{ marginBottom: 20 }}>
                <Tag color="default" style={{ borderRadius: 6, marginBottom: 8 }}>FREE FOREVER</Tag>
                <Title level={3} style={{ margin: 0 }}>Community Serverless</Title>
                <Paragraph type="secondary" style={{ fontSize: 14 }}>Perfect for side projects, learning, and prototyping.</Paragraph>
              </div>

              <div style={{ marginBottom: 24 }}>
                <Title level={1} style={{ margin: 0, fontSize: 42, fontWeight: 800 }}>
                  $0
                  <Text type="secondary" style={{ fontSize: 16, fontWeight: 400 }}> / month</Text>
                </Title>
              </div>

              <Space orientation="vertical" size="middle" style={{ width: "100%", flex: 1, marginBottom: 24 }}>
                <Text><CheckCircleOutlined style={{ color: "#10b981", marginRight: 8 }} /> 512 MB Storage</Text>
                <Text><CheckCircleOutlined style={{ color: "#10b981", marginRight: 8 }} /> Shared Memory & CPU</Text>
                <Text><CheckCircleOutlined style={{ color: "#10b981", marginRight: 8 }} /> Sub-millisecond engine</Text>
                <Text><CheckCircleOutlined style={{ color: "#10b981", marginRight: 8 }} /> Community Support</Text>
              </Space>

              <Button size="large" block onClick={handleSelectPlan} style={{ height: 44, borderRadius: 10 }}>
                Get Started Free
              </Button>
            </Card>
          </Col>

          {/* Developer Pro Tier */}
          <Col xs={24} md={8}>
            <Card
              hoverable
              style={{
                height: "100%",
                borderRadius: 16,
                borderColor: "#6366f1",
                boxShadow: "0 10px 30px rgba(99, 102, 241, 0.2)",
                position: "relative",
                display: "flex",
                flexDirection: "column",
              }}
              styles={{ body: { padding: 32, display: "flex", flexDirection: "column", height: "100%" } }}
            >
              <div style={{ position: "absolute", top: -14, right: 24 }}>
                <Tag color="indigo" style={{ padding: "4px 12px", borderRadius: 12, fontWeight: 600 }}>MOST POPULAR</Tag>
              </div>

              <div style={{ marginBottom: 20 }}>
                <Tag color="indigo" style={{ borderRadius: 6, marginBottom: 8 }}>PRODUCTION READY</Tag>
                <Title level={3} style={{ margin: 0 }}>Developer Pro</Title>
                <Paragraph type="secondary" style={{ fontSize: 14 }}>Ideal for growing startups and production apps.</Paragraph>
              </div>

              <div style={{ marginBottom: 24 }}>
                <Title level={1} style={{ margin: 0, fontSize: 42, fontWeight: 800, color: "#6366f1" }}>
                  ${isYearly ? "24" : "29"}
                  <Text type="secondary" style={{ fontSize: 16, fontWeight: 400 }}> / month</Text>
                </Title>
              </div>

              <Space orientation="vertical" size="middle" style={{ width: "100%", flex: 1, marginBottom: 24 }}>
                <Text><CheckCircleOutlined style={{ color: "#6366f1", marginRight: 8 }} /> 50 GB Dedicated Storage</Text>
                <Text><CheckCircleOutlined style={{ color: "#6366f1", marginRight: 8 }} /> 4 GB Dedicated RAM, 2 vCPU</Text>
                <Text><CheckCircleOutlined style={{ color: "#6366f1", marginRight: 8 }} /> Automated Daily Backups</Text>
                <Text><CheckCircleOutlined style={{ color: "#6366f1", marginRight: 8 }} /> 1,000 Live Subscriptions</Text>
                <Text><CheckCircleOutlined style={{ color: "#6366f1", marginRight: 8 }} /> Priority 24-hr Email Support</Text>
              </Space>

              <Button
                type="primary"
                size="large"
                block
                onClick={handleSelectPlan}
                style={{
                  height: 44,
                  borderRadius: 10,
                  background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
                }}
              >
                Start 14-Day Free Trial
              </Button>
            </Card>
          </Col>

          {/* Enterprise Cluster Tier */}
          <Col xs={24} md={8}>
            <Card
              hoverable
              style={{ height: "100%", borderRadius: 16, display: "flex", flexDirection: "column" }}
              styles={{ body: { padding: 32, display: "flex", flexDirection: "column", height: "100%" } }}
            >
              <div style={{ marginBottom: 20 }}>
                <Tag color="green" style={{ borderRadius: 6, marginBottom: 8 }}>ENTERPRISE HIGH-SCALE</Tag>
                <Title level={3} style={{ margin: 0 }}>Dedicated Cluster</Title>
                <Paragraph type="secondary" style={{ fontSize: 14 }}>For mission-critical enterprise workloads.</Paragraph>
              </div>

              <div style={{ marginBottom: 24 }}>
                <Title level={1} style={{ margin: 0, fontSize: 42, fontWeight: 800 }}>
                  ${isYearly ? "159" : "199"}
                  <Text type="secondary" style={{ fontSize: 16, fontWeight: 400 }}> / month</Text>
                </Title>
              </div>

              <Space orientation="vertical" size="middle" style={{ width: "100%", flex: 1, marginBottom: 24 }}>
                <Text><CheckCircleOutlined style={{ color: "#10b981", marginRight: 8 }} /> Unlimited / Custom Storage</Text>
                <Text><CheckCircleOutlined style={{ color: "#10b981", marginRight: 8 }} /> Dedicated Multi-Node Cluster</Text>
                <Text><CheckCircleOutlined style={{ color: "#10b981", marginRight: 8 }} /> Point-in-time Recovery</Text>
                <Text><CheckCircleOutlined style={{ color: "#10b981", marginRight: 8 }} /> VPC Peering & Custom RBAC</Text>
                <Text><CheckCircleOutlined style={{ color: "#10b981", marginRight: 8 }} /> 15-Minute SLA 24/7 Phone Support</Text>
              </Space>

              <Button size="large" block onClick={() => router.push("/contact")} style={{ height: 44, borderRadius: 10 }}>
                Contact Sales
              </Button>
            </Card>
          </Col>
        </Row>

        {/* Feature Comparison Table */}
        <Card title="Detailed Feature Comparison" style={{ borderRadius: 14 }}>
          <Table columns={columns} dataSource={comparisonData} pagination={false} scroll={{ x: "max-content" }} />
        </Card>
      </div>
    </PublicLayout>
  );
}

export default PricingContent;
