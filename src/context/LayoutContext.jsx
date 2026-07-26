"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const LayoutContext = createContext({
  sidebarCollapsed: false,
  toggleSidebar: () => {},
  setSidebarCollapsed: () => {},
  headerTitle: "SaralDB",
  setHeaderTitle: () => {},
});

export const useLayout = () => useContext(LayoutContext);

export function LayoutProvider({ children }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [headerTitle, setHeaderTitle] = useState("SaralDB");

  // Load saved sidebar collapsed state on client mount
  useEffect(() => {
    const savedState = localStorage.getItem("saral_sidebar_collapsed");
    if (savedState !== null) {
      setSidebarCollapsed(savedState === "true");
    }
  }, []);

  const toggleSidebar = () => {
    setSidebarCollapsed((prev) => {
      const next = !prev;
      localStorage.setItem("saral_sidebar_collapsed", String(next));
      return next;
    });
  };

  const handleSetSidebarCollapsed = (collapsed) => {
    setSidebarCollapsed(collapsed);
    localStorage.setItem("saral_sidebar_collapsed", String(collapsed));
  };

  return (
    <LayoutContext.Provider
      value={{
        sidebarCollapsed,
        toggleSidebar,
        setSidebarCollapsed: handleSetSidebarCollapsed,
        headerTitle,
        setHeaderTitle,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
}

export default LayoutContext;
