import React from "react";
import { Tables } from "@/components/admin";

export const metadata = {
  title: "Collections & Schema Inspector | SaralDB Admin Studio",
  description: "Inspect collections, document count, JSON schema validators, and index allocations across SaralDB databases.",
};

export default function TablesPage() {
  return <Tables />;
}
