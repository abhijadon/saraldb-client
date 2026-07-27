"use client";

import React, { useState } from "react";
import { useTheme, useAuth } from "@/context";
import LoginModal from "./LoginModal";
import Hero from "./Hero";
import StatsSection from "./StatsSection";

export function LandingPage({ onOpenAdmin }) {
  const { isDarkMode } = useTheme();
  const { isLoggedIn } = useAuth();
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const handleStart = () => {
    if (isLoggedIn) {
      if (onOpenAdmin) onOpenAdmin();
    } else {
      setLoginModalOpen(true);
    }
  };

  return (
    <div style={{ minHeight: "100vh", overflowX: "hidden" }}>
      <Hero onStart={handleStart} />
      <StatsSection />
      <LoginModal open={loginModalOpen} onClose={() => setLoginModalOpen(false)} />
    </div>
  );
}

export default LandingPage;
