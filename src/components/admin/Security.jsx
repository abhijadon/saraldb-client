"use client";

import React from "react";
import { Typography, Card, Table, Tag, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

export function Security() {
  const users = [
    { key: "1", username: "Abhishek", role: "SuperAdmin", permissions: "Full Access (*)", status: "Active" },
    { key: "2", username: "dev_service", role: "ReadOnly", permissions: "find, count", status: "Active" },
  ];

  const columns = [
    { title: "User / Account", dataIndex: "username", key: "username", render: (u) => <Text strong>{u}</Text> },
    { title: "Role", dataIndex: "role", key: "role", render: (r) => <Tag color="blue">{r}</Tag> },
    { title: "Permissions", dataIndex: "permissions", key: "permissions" },
    { title: "Status", dataIndex: "status", key: "status", render: (s) => <Tag color="green">{s}</Tag> },
  ];

  return (
    <div>
      <div style={{ marginBottom: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <Title level={3} style={{ margin: 0 }}>
            Security & Roles
          </Title>
          <Text type="secondary">Role-based access controls, database users, and IP whitelist policies.</Text>
        </div>
        <Button type="primary" icon={<PlusOutlined />}>
          Create User / Role
        </Button>
      </div>

      <Card title="Database Users & RBAC Policies">
        <Table columns={columns} dataSource={users} pagination={false} scroll={{ x: "max-content" }} />
      </Card>
    </div>
  );
}

export default Security;
