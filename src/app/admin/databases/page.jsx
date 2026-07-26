import React from "react";
import { Databases } from "@/components/admin";

export const metadata = {
  title: "Database Cluster Instances | SaralDB Admin Studio",
  description: "View and manage active SaralDB database instances, memory allocation, and storage size.",
};

export default function DatabasesPage() {
  return <Databases />;
}
