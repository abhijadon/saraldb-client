import React from "react";
import Login from "@/components/public/Login";

export const metadata = {
  title: "Login",
  description: "Log in to SaralDB Admin Studio to manage databases, collections, users, and cluster performance.",
};

export default function LoginPage() {
  return <Login />;
}
