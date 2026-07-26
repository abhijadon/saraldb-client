"use client";

import React from "react";
import { Typography, Card, Table, Button, Space } from "antd";
import { TableOutlined, PlusOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

export function Tables() {
  const tables = [
    { key: "1", collection: "users", db: "saral_primary", documents: "1,240,500", indexes: 3 },
    { key: "2", collection: "transactions", db: "saral_primary", documents: "8,920,110", indexes: 5 },
    { key: "3", collection: "events", db: "saral_analytics", documents: "450,000", indexes: 2 },
  ];

  const columns = [
    {
      title: "Collection",
      dataIndex: "collection",
      key: "collection",
      render: (t) => (
        <Space>
          <TableOutlined style={{ color: "#6366f1" }} />
          <Text strong>{t}</Text>
        </Space>
      ),
    },
    { title: "Database", dataIndex: "db", key: "db" },
    { title: "Documents", dataIndex: "documents", key: "documents" },
    { title: "Indexes", dataIndex: "indexes", key: "indexes" },
  ];

  return (
    <div>
      <div style={{ marginBottom: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <Title level={3} style={{ margin: 0 }}>
            Tables & Schemas
          </Title>
          <Text type="secondary">View and manage collections, schema validations, and indexes.</Text>
        </div>
        <Button type="primary" icon={<PlusOutlined />}>
          New Collection
        </Button>
      </div>

      <Card title="Collections & Schema Overview">
        <Table columns={columns} dataSource={tables} pagination={false} scroll={{ x: "max-content" }} />
      </Card>
    </div>
  );
}

export default Tables;
