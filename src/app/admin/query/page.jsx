import React from "react";
import { Query } from "@/components/admin";

export const metadata = {
  title: "Interactive Query Console | SaralDB Admin Studio",
  description: "Execute sub-millisecond NoSQL JSON queries, analyze execution plans, and run live subscriptions in SaralDB Admin Studio.",
};

export default function QueryPage() {
  return <Query />;
}
