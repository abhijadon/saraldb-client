import React from "react";
import { Security } from "@/components/admin";

export const metadata = {
  title: "Security & RBAC Policies | SaralDB Admin Studio",
  description: "Configure role-based access control, database user accounts, audit logging, and TLS security settings.",
};

export default function SecurityPage() {
  return <Security />;
}
