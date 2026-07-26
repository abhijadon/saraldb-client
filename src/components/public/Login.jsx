"use client";

import React from "react";
import { PublicLayout, LoginModal } from "@/components/public";
import { useRouter } from "next/navigation";

export function Login() {
  const router = useRouter();

  return (
    <PublicLayout>
      <LoginModal open={true} onClose={() => router.push("/admin")} />
    </PublicLayout>
  );
}

export default Login;
