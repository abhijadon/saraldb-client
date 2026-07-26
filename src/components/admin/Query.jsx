"use client";

import React, { useState } from "react";
import { Typography, Card, Input, Button, Row, Col, Tag } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;
const { TextArea } = Input;

export function Query() {
  const [query, setQuery] = useState('db.collection("users").find({ status: "active" }).limit(5);');
  const [result] = useState(`[
  { "_id": "usr_101", "name": "Abhishek", "status": "active" },
  { "_id": "usr_102", "name": "Priya", "status": "active" }
]`);

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <Title level={3} style={{ margin: 0 }}>
          Query Editor
        </Title>
        <Text type="secondary">Execute real-time NoSQL queries against your SaralDB clusters.</Text>
      </div>

      <Row gutter={[24, 24]}>
        <Col xs={24} lg={12}>
          <Card title="Query Console" extra={<Button type="primary" icon={<CaretRightOutlined />}>Run Query (Ctrl+Enter)</Button>}>
            <TextArea
              rows={12}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{ fontFamily: "monospace", fontSize: 14 }}
            />
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <Card title="Query Results" extra={<Tag color="green">Execution time: 0.24ms</Tag>}>
            <pre style={{ background: "#0f172a", color: "#38bdf8", padding: 16, borderRadius: 8, height: 280, overflow: "auto" }}>
              {result}
            </pre>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Query;
