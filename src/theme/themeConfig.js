import { theme as antdTheme } from "antd";

export const getAntdThemeConfig = (isDarkMode) => ({
  algorithm: isDarkMode ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
  token: {
    colorPrimary: "#6366f1",
    colorPrimaryHover: "#4f46e5",
    colorPrimaryActive: "#4338ca",
    borderRadius: 10,
    fontFamily: "var(--font-montserrat), 'Montserrat', system-ui, -apple-system, sans-serif",
    colorBgBase: isDarkMode ? "#0f172a" : "#ffffff",
    colorBgContainer: isDarkMode ? "#1e293b" : "#ffffff",
    colorBgLayout: isDarkMode ? "#0f172a" : "#f8fafc",
    colorBgElevated: isDarkMode ? "#1e293b" : "#ffffff",
    colorBorder: isDarkMode ? "#334155" : "#e2e8f0",
    colorBorderSecondary: isDarkMode ? "#1e293b" : "#f1f5f9",
    colorText: isDarkMode ? "#f8fafc" : "#0f172a",
    colorTextSecondary: isDarkMode ? "#94a3b8" : "#64748b",
    colorTextHeading: isDarkMode ? "#ffffff" : "#0f172a",
  },
  components: {
    Layout: {
      headerBg: isDarkMode ? "#1e293b" : "#ffffff",
      bodyBg: isDarkMode ? "#0f172a" : "#f8fafc",
      triggerBg: isDarkMode ? "#334155" : "#e2e8f0",
    },
    Menu: {
      itemBg: "transparent",
      itemSelectedBg: isDarkMode ? "rgba(99, 102, 241, 0.2)" : "#eef2ff",
      itemSelectedColor: "#6366f1",
      borderRadius: 8,
    },
    Button: {
      borderRadius: 8,
      fontWeight: 500,
      controlHeight: 38,
    },
    Card: {
      borderRadiusLG: 14,
    },
    Input: {
      borderRadius: 8,
      controlHeight: 38,
    },
    Select: {
      borderRadius: 8,
      controlHeight: 38,
    },
    Modal: {
      borderRadiusLG: 16,
    },
    Table: {
      borderRadius: 12,
      headerBg: isDarkMode ? "#0f172a" : "#f8fafc",
    },
    Tabs: {
      colorBorderSecondary: isDarkMode ? "#334155" : "#e2e8f0",
    },
  },
});
