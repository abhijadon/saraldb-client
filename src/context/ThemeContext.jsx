"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { ConfigProvider } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { getAntdThemeConfig } from "@/theme";

const ThemeContext = createContext({
  isDarkMode: true,
  themeMode: "dark",
  toggleTheme: () => {},
  setThemeMode: () => {},
  mounted: false,
});

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }) {
  const [themeMode, setThemeModeState] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 1. Check if user has explicit saved preference in localStorage
    const savedTheme = localStorage.getItem("saral_theme");

    if (savedTheme === "light") {
      setThemeModeState("light");
    } else {
      // Default to Dark Mode
      setThemeModeState("dark");
      document.documentElement.classList.add("dark");
    }

    setMounted(true);
  }, []);

  useEffect(() => {
    if (themeMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [themeMode]);

  const setThemeMode = (mode) => {
    setThemeModeState(mode);
    localStorage.setItem("saral_theme", mode);
  };

  const toggleTheme = () => {
    const nextMode = themeMode === "dark" ? "light" : "dark";
    setThemeMode(nextMode);
  };

  const isDarkMode = themeMode === "dark";
  const customTheme = getAntdThemeConfig(isDarkMode);

  return (
    <ThemeContext.Provider
      value={{ isDarkMode, themeMode, toggleTheme, setThemeMode, mounted }}
    >
      <AntdRegistry>
        <ConfigProvider theme={customTheme}>
          <div
            className={isDarkMode ? "dark" : ""}
            style={{
              minHeight: "100vh",
              backgroundColor: isDarkMode ? "#0f172a" : "#f8fafc",
              color: isDarkMode ? "#f8fafc" : "#0f172a",
              transition: "background-color 0.25s ease, color 0.25s ease",
            }}
          >
            {children}
          </div>
        </ConfigProvider>
      </AntdRegistry>
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
