"use client";

import React from "react";
import { ThemeProvider } from "./Theme";
import { LayoutProvider } from "./Layout";
import { AuthProvider } from "./Auth";

export { ThemeProvider, useTheme } from "./Theme";
export { LayoutProvider, useLayout } from "./Layout";
export { AuthProvider, useAuth } from "./Auth";

import { GlobalThemeCursor } from "@/components/common/GlobalThemeCursor";

export function AppProviders({ children }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <LayoutProvider>
          <GlobalThemeCursor />
          {children}
        </LayoutProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
