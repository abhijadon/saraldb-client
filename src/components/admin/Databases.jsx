"use client";

import React, { useState } from "react";
import { Typography, Card, Table, Tag, Button, Space, Input, Modal } from "antd";
import { DatabaseOutlined, PlusOutlined, ReloadOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

export function Databases() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const databases = [
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
      render: (s) => <Tag color="green">{s}</Tag>,
    },
  ];

  return (
    <div>
      <div style={{ marginBottom: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <Title level={3} style={{ margin: 0 }}>
            Databases
          </Title>
          <Text type="secondary">Manage your active SaralDB database clusters and instances.</Text>
        </div>
        <Space>
          <Button icon={<ReloadOutlined />}>Refresh</Button>
          <Button type="primary" icon={<PlusOutlined />} onClick={() => setIsModalOpen(true)}>
            Create Database
          </Button>
        </Space>
      </div>

      <Card title="Active Database Instances">
        <Table columns={columns} dataSource={databases} pagination={false} scroll={{ x: "max-content" }} />
      </Card>

      <Modal
        title="Create Database Instance"
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
      >
        <Input placeholder="Enter database name" />
      </Modal>
    </div>
  );
}

export default Databases;
