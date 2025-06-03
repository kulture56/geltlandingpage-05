"use client";

import React from "react";
import { cn } from "@/lib/utils";
interface FloatingSocialProps {
  className?: string;
}
export function FloatingSocial({
  className
}: FloatingSocialProps) {
  const socials = [{
    name: "Instagram",
    icon: "📷",
    url: "https://instagram.com/gelt_official",
    color: "hover:bg-pink-500"
  }, {
    name: "LinkedIn",
    icon: "💼",
    url: "https://linkedin.com/company/gelt",
    color: "hover:bg-blue-600"
  }, {
    name: "X",
    icon: "𝕏",
    url: "https://x.com/__GELT__",
    color: "hover:bg-black"
  }, {
    name: "TikTok",
    icon: "🎵",
    url: "https://tiktok.com/@gelt_official",
    color: "hover:bg-red-500"
  }];
  return <div className={cn("fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3", className)}>
      {socials.map((social, index) => {})}
    </div>;
}