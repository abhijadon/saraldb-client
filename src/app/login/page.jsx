import React from "react";
import LoginContent from "@/components/public/LoginContent";

export const metadata = {
  title: "Sign In to Admin Studio | SaralDB",
  description: "Log in to your SaralDB cluster, manage collections, inspect query execution plans, and configure RBAC roles.",
};

export default function LoginPage() {
  return <LoginContent />;
}
