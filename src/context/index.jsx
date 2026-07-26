"use client";

import React from "react";
import { ThemeProvider } from "./Theme";
import { LayoutProvider } from "./Layout";
import { AuthProvider } from "./Auth";

export { ThemeProvider, useTheme } from "./Theme";
export { LayoutProvider, useLayout } from "./Layout";
export { AuthProvider, useAuth } from "./Auth";

export function AppProviders({ children }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <LayoutProvider>{children}</LayoutProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
