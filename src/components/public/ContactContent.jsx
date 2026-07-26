"use client";

import React, { useState } from "react";
import { PublicLayout } from "@/components/public";
import { Typography, Card, Row, Col, Form, Input, Button, Tag, Space, Alert } from "antd";
import { MailOutlined, EnvironmentOutlined, PhoneOutlined, SendOutlined } from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

export function ContactContent() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <PublicLayout>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <Tag color="cyan" style={{ borderRadius: 12, padding: "4px 12px", marginBottom: 12 }}>
            Get in Touch
          </Tag>
          <Title level={1} style={{ margin: "8px 0" }}>
            Contact SaralDB Team
          </Title>
          <Paragraph type="secondary" style={{ fontSize: 18, maxWidth: 600, margin: "0 auto" }}>
            Have a question about SaralDB enterprise clusters, custom deployments, or benchmarks? We are here to help.
          </Paragraph>
        </div>

        <Row gutter={[32, 32]}>
          <Col xs={24} md={10}>
            <Space orientation="vertical" size="large" style={{ width: "100%" }}>
              <Card style={{ borderRadius: 14 }}>
                <Space align="start" size="middle">
                  <MailOutlined style={{ fontSize: 24, color: "#6366f1", marginTop: 4 }} />
                  <div>
                    <Text strong style={{ fontSize: 16 }}>
                      Email Us
                    </Text>
                    <Paragraph type="secondary" style={{ margin: 0 }}>
                      support@saraldb.io / sales@saraldb.io
                    </Paragraph>
                  </div>
                </Space>
              </Card>

              <Card style={{ borderRadius: 14 }}>
                <Space align="start" size="middle">
                  <EnvironmentOutlined style={{ fontSize: 24, color: "#a855f7", marginTop: 4 }} />
                  <div>
                    <Text strong style={{ fontSize: 16 }}>
                      Headquarters
                    </Text>
                    <Paragraph type="secondary" style={{ margin: 0 }}>
                      SaralDB Open Source Project, India
                    </Paragraph>
                  </div>
                </Space>
              </Card>

              <Card style={{ borderRadius: 14 }}>
                <Space align="start" size="middle">
                  <PhoneOutlined style={{ fontSize: 24, color: "#10b981", marginTop: 4 }} />
                  <div>
                    <Text strong style={{ fontSize: 16 }}>
                      Direct Phone
                    </Text>
                    <Paragraph type="secondary" style={{ margin: 0 }}>
                      +91 (800) SARAL-DB
                    </Paragraph>
                  </div>
                </Space>
              </Card>
            </Space>
          </Col>

          <Col xs={24} md={14}>
            <Card title="Send Us a Message" style={{ borderRadius: 14 }}>
              {submitted && (
                <Alert
                  title="Thank you for reaching out!"
                  description="Your message has been received. Our team will get back to you within 24 hours."
                  type="success"
                  showIcon
                  style={{ marginBottom: 24 }}
                />
              )}

              <Form layout="vertical" onFinish={handleSubmit} requiredMark={false}>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item label="Your Name" name="name" rules={[{ required: true }]}>
                      <Input placeholder="Abhishek Jadon" size="large" />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="Work Email" name="email" rules={[{ required: true }]}>
                      <Input placeholder="abhishek@company.com" size="large" />
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item label="Subject" name="subject">
                  <Input placeholder="e.g. Enterprise License & Dedicated Cluster" size="large" />
                </Form.Item>

                <Form.Item label="Message" name="message" rules={[{ required: true }]}>
                  <TextArea rows={5} placeholder="How can SaralDB help your team?" />
                </Form.Item>

                <Form.Item style={{ margin: 0 }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    icon={<SendOutlined />}
                    style={{
                      height: 44,
                      padding: "0 28px",
                      borderRadius: 10,
                      background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
                    }}
                  >
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </PublicLayout>
  );
}

export default ContactContent;
