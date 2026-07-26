import React from "react";
import PricingContent from "@/components/public/PricingContent";

export const metadata = {
  title: "Pricing Plans & Tier Comparison | SaralDB",
  description: "Transparent MongoDB-style pricing for SaralDB. Free serverless tier, developer pro dedicated clusters, and custom high-scale enterprise deployments.",
};

export default function PricingPage() {
  return <PricingContent />;
}
