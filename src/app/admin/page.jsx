import React from "react";
import { Dashboard } from "@/components/admin";

export const metadata = {
  title: "Admin Studio Dashboard | SaralDB",
  description: "Overview dashboard for active SaralDB clusters, throughput metrics, node health, and database collections.",
};

export default function AdminPage() {
  return <Dashboard />;
}
