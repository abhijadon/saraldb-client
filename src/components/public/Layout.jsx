"use client";

import React from "react";
import { Layout as AntLayout } from "antd";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "@/context";

const { Content } = AntLayout;

export function Layout({ children }) {
  const { isDarkMode } = useTheme();

  return (
    <AntLayout
      style={{
        minHeight: "100vh",
        backgroundColor: isDarkMode ? "#0f172a" : "#ffffff",
        color: isDarkMode ? "#f8fafc" : "#0f172a",
        transition: "background-color 0.25s ease",
      }}
    >
      <Navbar />
      <Content style={{ flex: 1 }}>{children}</Content>
      <Footer />
    </AntLayout>
  );
}

export default Layout;
