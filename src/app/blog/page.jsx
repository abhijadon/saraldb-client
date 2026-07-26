import React from "react";
import BlogContent from "@/components/public/BlogContent";

export const metadata = {
  title: "Engineering Blog & Release Notes | SaralDB",
  description: "Deep dives on database internals, zero-copy JSON buffers, distributed consensus, query performance benchmarks, and SaralDB release updates.",
};

export default function BlogPage() {
  return <BlogContent />;
}
