import React from "react";
import { PublicLayout, LandingPage } from "@/components/public";

export const metadata = {
  title: "SaralDB — Flow-Based State Engine | No CRUD. Everything is a Flow.",
  description: "SaralDB unifies document storage, in-memory caching, and event streaming under a single .flow() abstraction.",
};

export default function Home() {
  return (
    <PublicLayout>
      <LandingPage />
    </PublicLayout>
  );
}