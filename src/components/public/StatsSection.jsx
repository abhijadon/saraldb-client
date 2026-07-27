"use client";

import React from "react";
import { Tag } from "antd";
import {
  ThunderboltOutlined,
  CloudServerOutlined,
  DatabaseOutlined,
  SafetyCertificateOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";
import { useTheme } from "@/context";

export function StatsSection() {
  const { isDarkMode } = useTheme();

  return (
    <section
      className={`pb-12 sm:pb-16 pt-2 px-6 transition-colors duration-300 ${
        isDarkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Key Live Database Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div
            className={`p-6 rounded-2xl border backdrop-blur-md transition-all hover:scale-[1.02] shadow-lg ${
              isDarkMode ? "bg-slate-900/80 border-slate-800 text-slate-100" : "bg-white border-slate-200 text-slate-900"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Avg Query Latency</span>
              <ThunderboltOutlined className="text-blue-500 text-xl" />
            </div>
            <div className="text-3xl font-black text-blue-400 font-mono">0.3 ms</div>
            <span className="text-xs text-emerald-400 font-medium flex items-center gap-1 mt-2">
              <ArrowUpOutlined /> 12% faster in v2.0
            </span>
          </div>

          <div
            className={`p-6 rounded-2xl border backdrop-blur-md transition-all hover:scale-[1.02] shadow-lg ${
              isDarkMode ? "bg-slate-900/80 border-slate-800 text-slate-100" : "bg-white border-slate-200 text-slate-900"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Ops Throughput</span>
              <CloudServerOutlined className="text-indigo-400 text-xl" />
            </div>
            <div className="text-3xl font-black text-indigo-400 font-mono">1.2M+</div>
            <span className="text-xs text-slate-400 font-medium mt-2 block">Queries per second</span>
          </div>

          <div
            className={`p-6 rounded-2xl border backdrop-blur-md transition-all hover:scale-[1.02] shadow-lg ${
              isDarkMode ? "bg-slate-900/80 border-slate-800 text-slate-100" : "bg-white border-slate-200 text-slate-900"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Cluster Uptime</span>
              <DatabaseOutlined className="text-emerald-400 text-xl" />
            </div>
            <div className="text-3xl font-black text-emerald-400 font-mono">99.999%</div>
            <span className="text-xs text-emerald-400 font-medium mt-2 block">Zero Downtime HA</span>
          </div>

          <div
            className={`p-6 rounded-2xl border backdrop-blur-md transition-all hover:scale-[1.02] shadow-lg ${
              isDarkMode ? "bg-slate-900/80 border-slate-800 text-slate-100" : "bg-white border-slate-200 text-slate-900"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Security Engine</span>
              <SafetyCertificateOutlined className="text-cyan-400 text-xl" />
            </div>
            <div className="text-3xl font-black text-cyan-400 font-mono">Row-Level</div>
            <span className="text-xs text-slate-400 font-medium mt-2 block">Native RLS & ACL Rules</span>
          </div>
        </div>

        {/* Upcoming Features & Live Roadmap Banner */}
        <div
          className={`p-5 sm:p-6 rounded-2xl border flex flex-col md:flex-row items-center justify-between gap-4 backdrop-blur-md shadow-lg ${
            isDarkMode ? "bg-blue-950/40 border-blue-900/50" : "bg-blue-50/80 border-blue-200"
          }`}
        >
          <div className="flex items-center gap-4">
            <span className="flex h-3.5 w-3.5 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-blue-500"></span>
            </span>
            <div>
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-1">
                Upcoming SaralDB Capabilities & Roadmap
              </span>
              <span className={`text-sm sm:text-base font-semibold ${isDarkMode ? "text-slate-200" : "text-slate-800"}`}>
                Vector Embeddings for AI (RAG), Live WebSocket Subscriptions & Multi-Region Auto-Sharding
              </span>
            </div>
          </div>
          <Tag color="processing" className="m-0 px-4 py-1.5 font-bold text-xs rounded-full border-blue-400/40 text-blue-400 shrink-0">
            🚀 Coming Q3 2026
          </Tag>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
