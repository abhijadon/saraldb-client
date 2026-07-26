import React from "react";
import { PublicLayout, LandingPage } from "@/components/public";

export const metadata = {
  title: "SaralDB - Sub-Millisecond Distributed NoSQL Database Engine",
  description: "Next-generation distributed document database engine with native JSON, live socket subscriptions, and built-in Admin Studio.",
};

export default function Home() {
  return (
    <PublicLayout>
      <LandingPage />
    </PublicLayout>
  );
}
