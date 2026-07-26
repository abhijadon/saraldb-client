import React from "react";
import { Settings } from "@/components/admin";

export const metadata = {
  title: "Cluster Configuration & Settings | SaralDB Admin Studio",
  description: "Configure listen ports, cluster node names, daily backup retention, and webhook notifications.",
};

export default function SettingsPage() {
  return <Settings />;
}
