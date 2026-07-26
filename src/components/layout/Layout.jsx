"use client";

import React from "react";
import { Layout as AntLayout } from "antd";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { useTheme } from "@/context";

const { Content } = AntLayout;

export function Layout({ children }) {
  const { isDarkMode } = useTheme();

  return (
    <AntLayout style={{ minHeight: "100vh" }}>
      {/* Fixed Top Header */}
      <Header />

      <AntLayout style={{ display: "flex", flexDirection: "row" }}>
        {/* Collapsible Sidebar */}
        <Sidebar />

        {/* Main Content & Footer Area */}
        <AntLayout
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "calc(100vh - 64px)",
            backgroundColor: isDarkMode ? "#0f172a" : "#f8fafc",
            transition: "background-color 0.25s ease",
          }}
        >
          <Content
            style={{
              padding: "24px",
              flex: 1,
              maxWidth: "1400px",
              width: "100%",
              margin: "0 auto",
            }}
          >
            {children}
          </Content>
          <Footer />
        </AntLayout>
      </AntLayout>
    </AntLayout>
  );
}

export default Layout;
