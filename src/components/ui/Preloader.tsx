"use client";

import { useState, useEffect } from "react";
import { Terminal, Cpu, ShieldCheck, Activity } from "lucide-react";

interface PreloaderProps {
  onComplete: () => void;
}

const BOOT_LOGS = [
  { text: "INITIALIZING KERNEL [Webxode OS v2.4]..." },
  { text: "MOUNTING VIRTUAL FILESYSTEM [/sys/workspace]..." },
  { text: "ESTABLISHING SECURE CONNECTION TO MONGODB ATLAS..." },
  { text: "LOADING REACT 19 & NEXT.JS 16 APP ROUTER..." },
  { text: "INJECTING DESIGN TOKENS [#52F0F5 / #080A0D]..." },
  { text: "INITIALIZING WINDOW MANAGER & CLI SUBSYSTEM..." },
  { text: "SYSTEM READY. LAUNCHING WORKSPACE..." },
];

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  // Derive log index directly from progress during render (Clean & warning-free)
  const currentLogIndex = Math.min(
    Math.floor((progress / 100) * BOOT_LOGS.length),
    BOOT_LOGS.length - 1,
  );

  useEffect(() => {
    // Progress counter animation timer
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        const increment = Math.floor(Math.random() * 12) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 80);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setIsFadingOut(true);
        const exitTimer = setTimeout(() => {
          onComplete();
        }, 600); // match transition duration
        return () => clearTimeout(exitTimer);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#080A0D] text-[#F2F5F7] font-sans px-4 transition-opacity duration-600 ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Background technical grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#11161B_1px,transparent_1px),linear-gradient(to_bottom,#11161B_1px,transparent_1px)] bg-size-[3rem_3rem] opacity-30 pointer-events-none" />

      {/* Center Terminal Box */}
      <div className="relative z-10 w-full max-w-xl rounded-xl border border-[#11161B] bg-[#0B0E13]/95 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl shadow-black/80">
        {/* Window Header Bar */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#11161B]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Terminal className="w-3.5 h-3.5 text-[#52F0F5]" />
            <span>sys_boot.sh</span>
          </div>
        </div>

        {/* Title & Progress Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <Cpu className="w-5 h-5 text-[#52F0F5] animate-pulse" />
            <span className="font-mono text-sm tracking-wider font-semibold text-white">
              AKASH S M — WORKSPACE KERNEL
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Activity
              className="w-4 h-4 text-[#52F0F5] animate-spin"
              style={{ animationDuration: "3s" }}
            />
            <span className="font-mono text-lg font-bold text-[#52F0F5]">
              {progress}%
            </span>
          </div>
        </div>

        {/* Custom Glowing Progress Bar */}
        <div className="w-full h-2 rounded-full bg-[#11161B] overflow-hidden mb-6 p-0.5">
          <div
            className="h-full rounded-full bg-linear-to-r from-[#52F0F5]/50 to-[#52F0F5] transition-all duration-150 ease-out shadow-[0_0_12px_rgba(82,240,245,0.4)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Terminal Logs Console Output */}
        <div className="bg-[#080A0D] rounded-lg border border-[#11161B] p-4 font-mono text-xs space-y-2 min-h-30 flex flex-col justify-end shadow-inner">
          {BOOT_LOGS.slice(0, currentLogIndex + 1).map((log, index) => {
            const isLatest = index === currentLogIndex;
            return (
              <div
                key={index}
                className={`flex items-start gap-2 transition-opacity duration-300 ${
                  isLatest ? "text-[#52F0F5]" : "text-slate-400"
                }`}
              >
                <span className="text-slate-600 select-none">&gt;</span>
                <span className="break-all">{log.text}</span>
                {isLatest && progress < 100 && (
                  <span className="inline-block w-1.5 h-3.5 bg-[#52F0F5] animate-pulse ml-1" />
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Meta Details */}
        <div className="mt-6 pt-4 border-t border-[#11161B] flex items-center justify-between text-[11px] font-mono text-slate-500">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>ENV: PRODUCTION_READY</span>
          </div>
          <span className="text-slate-400">NAMAKKAL, IN</span>
        </div>
      </div>
    </div>
  );
}
