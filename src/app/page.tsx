"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { RainbowButton } from "@/components/magicui/rainbow-button";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
      {/* 背景效果 */}
      <BackgroundBeams className="pointer-events-none" />
      <RainbowButton>第一个按钮测试</RainbowButton>
    </div>
  );
}
