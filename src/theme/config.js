import { theme as antdTheme } from "antd";

export function getAntdThemeConfig(isDarkMode) {
  return {
    algorithm: isDarkMode ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
    token: {
      colorPrimary: "#6366f1",
      colorPrimaryHover: "#4f46e5",
      borderRadius: 10,
      fontFamily: "var(--font-montserrat), system-ui, sans-serif",
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
      Button: {
        borderRadius: 8,
        fontWeight: 600,
        controlHeight: 38,
      },
      Card: {
        borderRadius: 12,
      },
      Table: {
        borderRadius: 10,
        headerBg: isDarkMode ? "#1e293b" : "#f8fafc",
        headerColor: isDarkMode ? "#f8fafc" : "#0f172a",
        rowHoverBg: isDarkMode ? "#334155" : "#f1f5f9",
      },
      Input: {
        borderRadius: 8,
        controlHeight: 40,
        colorBgContainer: isDarkMode ? "#1e293b" : "#ffffff",
      },
      Select: {
        borderRadius: 8,
        controlHeight: 40,
      },
      Modal: {
        borderRadius: 14,
        contentBg: isDarkMode ? "#1e293b" : "#ffffff",
        headerBg: isDarkMode ? "#1e293b" : "#ffffff",
      },
      Drawer: {
        colorBgElevated: isDarkMode ? "#1e293b" : "#ffffff",
      },
    },
  };
}
