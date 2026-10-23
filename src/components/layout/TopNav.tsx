"use client";

import { useState, useEffect } from "react";
import {
  ShieldCheck,
  Sun,
  Moon,
  Volume2,
  VolumeX,
  Terminal,
} from "lucide-react";

interface TopNavProps {
  theme: "dark" | "light";
  toggleTheme: () => void;
  soundEnabled: boolean;
  toggleSound: () => void;
}

export default function TopNav({
  theme,
  toggleTheme,
  soundEnabled,
  toggleSound,
}: TopNavProps) {
  const [currentTime, setCurrentTime] = useState("");

  // Live clock ticker
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }),
      );
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const isDark = theme === "dark";

  return (
    <header
      className={`relative z-40 flex items-center justify-between h-11 px-6 border-b backdrop-blur-md text-xs font-mono transition-colors duration-300 ${
        isDark
          ? "bg-[#0B0E13]/90 border-[#11161B] text-[#F2F5F7]"
          : "bg-white/90 border-slate-200 text-slate-800 shadow-sm"
      }`}
    >
      {/* Left branding */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 font-bold text-[#52F0F5]">
          <span className="w-2 h-2 rounded-full bg-[#52F0F5] animate-ping" />
          <span className="tracking-wider">WEBXODE STUDIO v2.4</span>
        </div>
        <span
          className={`hidden sm:inline ${isDark ? "text-slate-700" : "text-slate-300"}`}
        >
          |
        </span>
        <span
          className={`hidden sm:inline ${isDark ? "text-slate-400" : "text-slate-600"}`}
        >
          Akash S M • Full-Stack Engineer
        </span>
      </div>

      {/* Right controls and system status */}
      <div className="flex items-center gap-4">
        {/* System Secure Badge */}
        <div className="hidden md:flex items-center gap-1.5 text-emerald-400">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>SYSTEM SECURE</span>
        </div>

        <span
          className={`hidden sm:inline ${isDark ? "text-slate-700" : "text-slate-300"}`}
        >
          |
        </span>

        {/* Audio Toggle Button */}
        <button
          onClick={toggleSound}
          className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
            isDark
              ? "hover:bg-[#11161B] text-slate-400 hover:text-white"
              : "hover:bg-slate-100 text-slate-600 hover:text-slate-900"
          }`}
          title={
            soundEnabled ? "Mute Cyberspace Audio" : "Enable Cyberspace Audio"
          }
        >
          {soundEnabled ? (
            <Volume2 className="w-4 h-4 text-[#52F0F5]" />
          ) : (
            <VolumeX className="w-4 h-4 text-slate-500" />
          )}
        </button>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
            isDark
              ? "hover:bg-[#11161B] text-slate-400 hover:text-white"
              : "hover:bg-slate-100 text-slate-600 hover:text-slate-900"
          }`}
          title="Toggle Color Theme"
        >
          {isDark ? (
            <Sun className="w-4 h-4 text-amber-400" />
          ) : (
            <Moon className="w-4 h-4 text-slate-700" />
          )}
        </button>

        <span
          className={`hidden sm:inline ${isDark ? "text-slate-700" : "text-slate-300"}`}
        >
          |
        </span>

        {/* Live Clock */}
        <span className={isDark ? "text-slate-300" : "text-slate-700"}>
          {currentTime}
        </span>
      </div>
    </header>
  );
}
