"use client";

import React from "react";
import { Typography, Card, Row, Col, Statistic } from "antd";

const { Title, Text } = Typography;

export function Analytics() {
  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <Title level={3} style={{ margin: 0 }}>
          Analytics & Logs
        </Title>
        <Text type="secondary">Monitor cluster latency, throughput, memory usage, and operational logs.</Text>
      </div>

      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic title="Total Operations" value={1482090} />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic title="Avg Latency" value={0.32} suffix="ms" styles={{ content: { color: "#6366f1" } }} />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic title="Cache Hit Ratio" value={99.4} suffix="%" />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic title="Uptime" value={99.99} suffix="%" />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Analytics;
