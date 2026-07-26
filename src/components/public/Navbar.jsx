"use client";

import React, { useState } from "react";
import { Layout as AntLayout, Button, Space, Switch, Typography, Dropdown, Drawer } from "antd";
import {
  SunOutlined,
  MoonOutlined,
  DatabaseOutlined,
  LoginOutlined,
  UserOutlined,
  DashboardOutlined,
  LogoutOutlined,
  DownOutlined,
  BookOutlined,
  ThunderboltOutlined,
  CloudServerOutlined,
  CustomerServiceOutlined,
  MailOutlined,
  MenuOutlined,
  HomeOutlined,
  DollarOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { useTheme, useAuth } from "@/context";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import LoginModal from "./LoginModal";

const { Header } = AntLayout;
const { Text } = Typography;

export function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme();
  const { isLoggedIn, user, logout } = useAuth();
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    logout();
    setMobileMenuOpen(false);
    router.push("/");
  };

  // Products Dropdown
  const productMenuItems = [
    {
      key: "docstore",
      icon: <DatabaseOutlined style={{ color: "#6366f1" }} />,
      label: <Link href="/admin/databases">Document Store (NoSQL)</Link>,
    },
    {
      key: "stream",
      icon: <ThunderboltOutlined style={{ color: "#a855f7" }} />,
      label: <Link href="/admin/analytics">Real-Time Streams</Link>,
    },
    {
      key: "studio",
      icon: <CloudServerOutlined style={{ color: "#10b981" }} />,
      label: <Link href="/admin">SaralDB Admin Studio</Link>,
    },
  ];

  // Resources Dropdown
  const resourceMenuItems = [
    {
      key: "docs",
      icon: <BookOutlined style={{ color: "#6366f1" }} />,
      label: <Link href="/docs">Documentation & API</Link>,
    },
    {
      key: "blog",
      icon: <BookOutlined style={{ color: "#a855f7" }} />,
      label: <Link href="/blog">Engineering Blog</Link>,
    },
    {
      key: "support",
      icon: <CustomerServiceOutlined style={{ color: "#10b981" }} />,
      label: <Link href="/support">Support & Help Center</Link>,
    },
  ];

  const userMenuItems = [
    {
      key: "dashboard",
      icon: <DashboardOutlined />,
      label: "Admin Dashboard",
      onClick: () => router.push("/admin"),
    },
    {
      type: "divider",
    },
    {
      key: "logout",
      icon: <LogoutOutlined />,
      danger: true,
      label: "Logout",
      onClick: handleLogout,
    },
  ];

  return (
    <>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          width: "100%",
          padding: "0 20px",
          background: isDarkMode ? "rgba(15, 23, 42, 0.92)" : "rgba(255, 255, 255, 0.92)",
          backdropFilter: "blur(14px)",
          borderBottom: `1px solid ${isDarkMode ? "rgba(51, 65, 85, 0.6)" : "rgba(226, 232, 240, 0.8)"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 68,
          lineHeight: "normal",
          transition: "all 0.25s ease",
        }}
      >
        {/* Left Section: Brand Logo */}
        <Link href="/" style={{ textDecoration: "none", flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 12,
                background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                fontSize: 20,
                boxShadow: "0 4px 14px rgba(99, 102, 241, 0.35)",
                flexShrink: 0,
              }}
            >
              <DatabaseOutlined />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Text strong style={{ fontSize: 19, letterSpacing: "-0.5px", whiteSpace: "nowrap", lineHeight: 1 }}>
                SaralDB
              </Text>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  padding: "2px 6px",
                  borderRadius: 6,
                  backgroundColor: "#6366f1",
                  color: "#fff",
                  marginLeft: 6,
                  whiteSpace: "nowrap",
                  lineHeight: 1,
                }}
              >
                v2.0
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop & Laptop Center Navigation Links */}
        <Space size="large" align="center" className="desktop-nav-links">
          <Link
            href="/"
            style={{
              color: pathname === "/" ? "#6366f1" : isDarkMode ? "#f8fafc" : "#0f172a",
              fontWeight: pathname === "/" ? 600 : 500,
              fontSize: 15,
              whiteSpace: "nowrap",
            }}
          >
            Home
          </Link>

          <Dropdown menu={{ items: productMenuItems }} placement="bottomLeft">
            <span
              style={{
                cursor: "pointer",
                color: isDarkMode ? "#94a3b8" : "#64748b",
                fontSize: 15,
                fontWeight: 500,
                whiteSpace: "nowrap",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              Products <DownOutlined style={{ fontSize: 10, marginLeft: 4 }} />
            </span>
          </Dropdown>

          <Link
            href="/pricing"
            style={{
              color: pathname === "/pricing" ? "#6366f1" : isDarkMode ? "#94a3b8" : "#64748b",
              fontWeight: pathname === "/pricing" ? 600 : 500,
              fontSize: 15,
              whiteSpace: "nowrap",
            }}
          >
            Pricing
          </Link>

          <Link
            href="/docs"
            style={{
              color: pathname === "/docs" ? "#6366f1" : isDarkMode ? "#94a3b8" : "#64748b",
              fontWeight: pathname === "/docs" ? 600 : 500,
              fontSize: 15,
              whiteSpace: "nowrap",
            }}
          >
            Docs
          </Link>

          <Link
            href="/blog"
            style={{
              color: pathname === "/blog" ? "#6366f1" : isDarkMode ? "#94a3b8" : "#64748b",
              fontWeight: pathname === "/blog" ? 600 : 500,
              fontSize: 15,
              whiteSpace: "nowrap",
            }}
          >
            Blog
          </Link>

          <Dropdown menu={{ items: resourceMenuItems }} placement="bottomLeft">
            <span
              style={{
                cursor: "pointer",
                color: isDarkMode ? "#94a3b8" : "#64748b",
                fontSize: 15,
                fontWeight: 500,
                whiteSpace: "nowrap",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              Resources <DownOutlined style={{ fontSize: 10, marginLeft: 4 }} />
            </span>
          </Dropdown>

          <Link
            href="/support"
            style={{
              color: pathname === "/support" ? "#6366f1" : isDarkMode ? "#94a3b8" : "#64748b",
              fontWeight: pathname === "/support" ? 600 : 500,
              fontSize: 15,
              whiteSpace: "nowrap",
            }}
          >
            Support
          </Link>

          <Link
            href="/contact"
            style={{
              color: pathname === "/contact" ? "#6366f1" : isDarkMode ? "#94a3b8" : "#64748b",
              fontWeight: pathname === "/contact" ? 600 : 500,
              fontSize: 15,
              whiteSpace: "nowrap",
            }}
          >
            Contact
          </Link>
        </Space>

        {/* Right Section: Theme Toggle & Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Switch
              checked={isDarkMode}
              onChange={toggleTheme}
              checkedChildren={<MoonOutlined />}
              unCheckedChildren={<SunOutlined />}
            />
          </div>

          {/* Desktop Auth / User Controls (Hidden on Mobile) */}
          <div className="desktop-auth-actions" style={{ alignItems: "center", gap: 10 }}>
            {isLoggedIn ? (
              <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
                <Button
                  type="primary"
                  icon={<UserOutlined />}
                  onClick={() => router.push("/admin")}
                  style={{
                    height: 38,
                    borderRadius: 10,
                    background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
                    display: "inline-flex",
                    alignItems: "center",
                  }}
                >
                  {user?.name || "Admin"}
                </Button>
              </Dropdown>
            ) : (
              <>
                <Button
                  type="text"
                  icon={<LoginOutlined />}
                  onClick={() => setLoginModalOpen(true)}
                  style={{ fontWeight: 500 }}
                >
                  Sign In
                </Button>
                <Button
                  type="primary"
                  onClick={() => setLoginModalOpen(true)}
                  style={{
                    height: 38,
                    borderRadius: 10,
                    background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
                    boxShadow: "0 4px 14px rgba(99, 102, 241, 0.3)",
                  }}
                >
                  Get Started Free
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Hamburger Button (Visible on Mobile) */}
          <Button
            type="text"
            icon={<MenuOutlined style={{ fontSize: 20 }} />}
            onClick={() => setMobileMenuOpen(true)}
            style={{
              height: 38,
              width: 38,
              padding: 0,
              alignItems: "center",
              justifyContent: "center",
            }}
            className="mobile-hamburger-btn"
          />
        </div>
      </Header>

      {/* Mobile Drawer Menu */}
      <Drawer
        title={
          <Space align="center">
            <DatabaseOutlined style={{ color: "#6366f1", fontSize: 20 }} />
            <Text strong style={{ fontSize: 18 }}>SaralDB Navigation</Text>
          </Space>
        }
        placement="right"
        onClose={() => setMobileMenuOpen(false)}
        open={mobileMenuOpen}
        size={300}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 20, padding: "8px 0" }}>
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              fontSize: 16,
              fontWeight: 500,
              color: pathname === "/" ? "#6366f1" : isDarkMode ? "#f8fafc" : "#0f172a",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <HomeOutlined style={{ color: "#6366f1" }} /> Home
          </Link>

          <Link
            href="/pricing"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              fontSize: 16,
              fontWeight: 500,
              color: pathname === "/pricing" ? "#6366f1" : isDarkMode ? "#f8fafc" : "#0f172a",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <DollarOutlined style={{ color: "#10b981" }} /> Pricing Plans
          </Link>

          <Link
            href="/docs"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              fontSize: 16,
              fontWeight: 500,
              color: pathname === "/docs" ? "#6366f1" : isDarkMode ? "#f8fafc" : "#0f172a",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <BookOutlined style={{ color: "#a855f7" }} /> Documentation
          </Link>

          <Link
            href="/blog"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              fontSize: 16,
              fontWeight: 500,
              color: pathname === "/blog" ? "#6366f1" : isDarkMode ? "#f8fafc" : "#0f172a",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <AppstoreOutlined style={{ color: "#f59e0b" }} /> Engineering Blog
          </Link>

          <Link
            href="/support"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              fontSize: 16,
              fontWeight: 500,
              color: pathname === "/support" ? "#6366f1" : isDarkMode ? "#f8fafc" : "#0f172a",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <CustomerServiceOutlined style={{ color: "#06b6d4" }} /> Support Center
          </Link>

          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              fontSize: 16,
              fontWeight: 500,
              color: pathname === "/contact" ? "#6366f1" : isDarkMode ? "#f8fafc" : "#0f172a",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <MailOutlined style={{ color: "#ec4899" }} /> Contact Sales
          </Link>

          <div style={{ marginTop: 20, paddingTop: 20, borderTop: `1px solid ${isDarkMode ? "#334155" : "#e2e8f0"}` }}>
            {isLoggedIn ? (
              <Space orientation="vertical" style={{ width: "100%" }} size="middle">
                <Button
                  type="primary"
                  block
                  size="large"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    router.push("/admin");
                  }}
                  style={{
                    height: 44,
                    borderRadius: 10,
                    background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
                  }}
                >
                  Go to Admin Panel ({user?.name || "Admin"})
                </Button>
                <Button
                  danger
                  block
                  size="large"
                  icon={<LogoutOutlined />}
                  onClick={handleLogout}
                  style={{ height: 44, borderRadius: 10 }}
                >
                  Logout
                </Button>
              </Space>
            ) : (
              <Space orientation="vertical" style={{ width: "100%" }} size="middle">
                <Button
                  type="primary"
                  block
                  size="large"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setLoginModalOpen(true);
                  }}
                  style={{
                    height: 44,
                    borderRadius: 10,
                    background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
                  }}
                >
                  Get Started Free
                </Button>
                <Button
                  block
                  size="large"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setLoginModalOpen(true);
                  }}
                  style={{ height: 44, borderRadius: 10 }}
                >
                  Sign In
                </Button>
              </Space>
            )}
          </div>
        </div>
      </Drawer>

      <LoginModal open={loginModalOpen} onClose={() => setLoginModalOpen(false)} />
    </>
  );
}

export default Navbar;
