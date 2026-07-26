import React from "react";
import { Analytics } from "@/components/admin";

export const metadata = {
  title: "Real-Time Analytics & Cluster Metrics | SaralDB Admin Studio",
  description: "Monitor sub-millisecond query latency, operations per second, cache hit ratios, and server metrics in SaralDB Admin Studio.",
};

export default function AnalyticsPage() {
  return <Analytics />;
}
