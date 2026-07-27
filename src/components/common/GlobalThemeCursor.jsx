"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "@/context";

export function GlobalThemeCursor() {
  const { isDarkMode } = useTheme();
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [angle, setAngle] = useState(-45);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let lastX = 0;
    let lastY = 0;

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      setPos({ x, y });
      if (!isVisible) setIsVisible(true);

      const dx = x - lastX;
      const dy = y - lastY;
      if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
        const targetAngle = (Math.atan2(dy, dx) * 180) / Math.PI + 90;
        setAngle((prev) => {
          const diff = ((((targetAngle - prev) % 360) + 540) % 360) - 180;
          return prev + diff * 0.25;
        });
      }
      lastX = x;
      lastY = y;

      const target = e.target;
      const isInteractive =
        target &&
        target.closest(
          "button, a, .ant-btn, .ant-tag, .ant-card, input, select, textarea, [role='button'], .cursor-pointer"
        );
      setIsHovered(!!isInteractive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  useEffect(() => {
    let animationId;
    const animateRing = () => {
      setRingPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.18,
        y: prev.y + (pos.y - prev.y) * 0.18,
      }));
      animationId = requestAnimationFrame(animateRing);
    };
    animationId = requestAnimationFrame(animateRing);
    return () => cancelAnimationFrame(animationId);
  }, [pos]);

  if (!isVisible) return null;

  const glowColor = isDarkMode ? "#60a5fa" : "#2563eb";
  const coreColor = isDarkMode ? "#3b82f6" : "#1d4ed8";

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* 1. Trailing High-Tech Target Crosshair Ring */}
      <div
        className={`pointer-events-none fixed flex items-center justify-center rounded-full transition-all duration-200 ease-out ${
          isHovered
            ? "w-12 h-12 -ml-6 -mt-6 bg-blue-500/15 border-2 border-blue-400 shadow-xl shadow-blue-500/60 scale-110 rotate-45"
            : "w-8 h-8 -ml-4 -mt-4 border border-blue-500/60 shadow-md shadow-blue-500/30"
        }`}
        style={{
          left: `${ringPos.x}px`,
          top: `${ringPos.y}px`,
          borderColor: isDarkMode
            ? isHovered
              ? "#60a5fa"
              : "rgba(96, 165, 250, 0.7)"
            : isHovered
            ? "#2563eb"
            : "rgba(37, 99, 235, 0.7)",
        }}
      >
        {/* Target Crosshair Node Accents */}
        <div
          className={`absolute w-1 h-1 rounded-full bg-blue-400 -top-0.5 transition-opacity ${
            isHovered ? "opacity-100 scale-125" : "opacity-40"
          }`}
        />
        <div
          className={`absolute w-1 h-1 rounded-full bg-blue-400 -bottom-0.5 transition-opacity ${
            isHovered ? "opacity-100 scale-125" : "opacity-40"
          }`}
        />
        <div
          className={`absolute w-1 h-1 rounded-full bg-blue-400 -left-0.5 transition-opacity ${
            isHovered ? "opacity-100 scale-125" : "opacity-40"
          }`}
        />
        <div
          className={`absolute w-1 h-1 rounded-full bg-blue-400 -right-0.5 transition-opacity ${
            isHovered ? "opacity-100 scale-125" : "opacity-40"
          }`}
        />
      </div>

      {/* 2. Sleek Futuristic Rotating Laser Arrow Pointer SVG */}
      <div
        className="pointer-events-none fixed transition-transform duration-75"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          transform: `translate3d(-4px, -4px, 0) rotate(${angle}deg)`,
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_0_10px_rgba(59,130,246,0.85)]"
        >
          {/* Laser Arrowhead Path */}
          <path
            d="M3 3L10.5 21L13.5 13.5L21 10.5L3 3Z"
            fill={coreColor}
            stroke={glowColor}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {/* Internal Energy Core Diamond */}
          <polygon
            points="7,7 11,13 13,11"
            fill={isDarkMode ? "#ffffff" : "#bfdbfe"}
          />
        </svg>
      </div>
    </div>
  );
}

export default GlobalThemeCursor;
