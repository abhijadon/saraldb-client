"use client";

import React from "react";
import { Typography, Card, Form, Input, Button, Switch } from "antd";

const { Title, Text } = Typography;

export function Settings() {
  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <Title level={3} style={{ margin: 0 }}>
          Cluster Settings
        </Title>
        <Text type="secondary">Configure cluster connection parameters, backups, and notification webhooks.</Text>
      </div>

      <Card title="General Configuration" style={{ maxWidth: 640 }}>
        <Form layout="vertical" initialValues={{ clusterName: "SaralDB_Primary_Cluster", port: "7700", autoBackup: true }}>
          <Form.Item label="Cluster Name" name="clusterName">
            <Input />
          </Form.Item>
          <Form.Item label="Listen Port" name="port">
            <Input />
          </Form.Item>
          <Form.Item label="Automated Daily Backups" name="autoBackup" valuePropName="checked">
            <Switch />
          </Form.Item>
          <Form.Item>
            <Button type="primary">Save Changes</Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default Settings;
