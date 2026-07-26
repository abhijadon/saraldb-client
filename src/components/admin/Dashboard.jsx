"use client";

import React from "react";
import {
  Row,
  Col,
  Card,
  Statistic,
  Typography,
  Table,
  Tag,
  Button,
  Space,
  Progress,
} from "antd";
import {
  DatabaseOutlined,
  ThunderboltOutlined,
  CheckCircleOutlined,
  ArrowUpOutlined,
  LineChartOutlined,
  CloudServerOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
import { useTheme } from "@/context";

const { Title, Paragraph, Text } = Typography;

export function Dashboard({ onSwitchToPublic }) {
  const { isDarkMode } = useTheme();

  const activeDatabases = [
    { key: "1", name: "saral_primary", collections: 14, size: "2.4 GB", status: "Healthy" },
    { key: "2", name: "saral_analytics", collections: 8, size: "850 MB", status: "Healthy" },
    { key: "3", name: "saral_logs", collections: 3, size: "14.2 GB", status: "Healthy" },
  ];

  const columns = [
    {
      title: "Database Name",
      dataIndex: "name",
      key: "name",
      render: (text) => (
        <Space>
          <DatabaseOutlined style={{ color: "#6366f1" }} />
          <Text strong>{text}</Text>
        </Space>
      ),
    },
    { title: "Collections", dataIndex: "collections", key: "collections" },
    { title: "Size", dataIndex: "size", key: "size" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (s) => (
        <Tag color="green" icon={<CheckCircleOutlined />}>
          {s}
        </Tag>
      ),
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {/* Welcome Banner */}
      <Card
        style={{
          background: isDarkMode
            ? "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)"
            : "linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)",
          borderRadius: 16,
          border: "none",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div>
            <Title level={2} style={{ color: "#ffffff", margin: 0 }}>
              Welcome back, Abhishek! 🚀
            </Title>
            <Paragraph style={{ color: "rgba(255, 255, 255, 0.85)", margin: "4px 0 0 0", fontSize: 15 }}>
              SaralDB Cluster v2.0 is running at peak sub-millisecond efficiency.
            </Paragraph>
          </div>
          {onSwitchToPublic && (
            <Button
              onClick={onSwitchToPublic}
              style={{
                borderRadius: 10,
                fontWeight: 600,
                background: "rgba(255, 255, 255, 0.2)",
                color: "#fff",
                border: "1px solid rgba(255, 255, 255, 0.4)",
              }}
            >
              Public Website
            </Button>
          )}
        </div>
      </Card>

      {/* Metrics Row */}
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} lg={6}>
          <Card hoverable style={{ borderRadius: 14 }}>
            <Statistic
              title="Active Clusters"
              value={3}
              prefix={<DatabaseOutlined style={{ color: "#6366f1" }} />}
              styles={{ content: { fontWeight: 700 } }}
            />
            <Text type="secondary" style={{ fontSize: 12 }}>All nodes synced</Text>
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={6}>
          <Card hoverable style={{ borderRadius: 14 }}>
            <Statistic
              title="Avg Latency"
              value={0.34}
              precision={2}
              suffix="ms"
              prefix={<ThunderboltOutlined style={{ color: "#10b981" }} />}
              styles={{ content: { color: "#10b981", fontWeight: 700 } }}
            />
            <Text type="secondary" style={{ fontSize: 12 }}>
              <ArrowUpOutlined style={{ color: "#10b981" }} /> 12% faster today
            </Text>
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={6}>
          <Card hoverable style={{ borderRadius: 14 }}>
            <Statistic
              title="Throughput (QPS)"
              value={48500}
              prefix={<LineChartOutlined style={{ color: "#a855f7" }} />}
              styles={{ content: { fontWeight: 700 } }}
            />
            <Text type="secondary" style={{ fontSize: 12 }}>Peak: 62,000 QPS</Text>
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={6}>
          <Card hoverable style={{ borderRadius: 14 }}>
            <Statistic
              title="Total Storage"
              value={17.45}
              precision={2}
              suffix="GB"
              prefix={<CloudServerOutlined style={{ color: "#f59e0b" }} />}
              styles={{ content: { fontWeight: 700 } }}
            />
            <Text type="secondary" style={{ fontSize: 12 }}>Max Limit: 50 GB</Text>
          </Card>
        </Col>
      </Row>

      {/* Cluster Health & Databases */}
      <Row gutter={[24, 24]}>
        <Col xs={24} lg={16}>
          <Card title="Active Databases Overview" style={{ borderRadius: 14 }}>
            <Table columns={columns} dataSource={activeDatabases} pagination={false} scroll={{ x: "max-content" }} />
          </Card>
        </Col>

        <Col xs={24} lg={8}>
          <Card title="Cluster Resource Usage" style={{ borderRadius: 14 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <Text strong>RAM Usage (Allocated 4 GB)</Text>
                  <Text type="secondary">42%</Text>
                </div>
                <Progress percent={42} strokeColor="#6366f1" showInfo={false} />
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <Text strong>CPU Load (2 vCPUs)</Text>
                  <Text type="secondary">18%</Text>
                </div>
                <Progress percent={18} strokeColor="#10b981" showInfo={false} />
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <Text strong>Disk IOPS Utilization</Text>
                  <Text type="secondary">65%</Text>
                </div>
                <Progress percent={65} strokeColor="#f59e0b" showInfo={false} />
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
