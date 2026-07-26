"use client";

import React from "react";
import { ThemeProvider } from "./ThemeContext";
import { LayoutProvider } from "./LayoutContext";
import { AuthProvider } from "./AuthContext";

export { ThemeProvider, useTheme } from "./ThemeContext";
export { LayoutProvider, useLayout } from "./LayoutContext";
export { AuthProvider, useAuth } from "./AuthContext";

export function AppProviders({ children }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <LayoutProvider>{children}</LayoutProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
