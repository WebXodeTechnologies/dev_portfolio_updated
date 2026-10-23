"use client";

import { useState } from "react";
import { Sparkles, Terminal, Volume2 } from "lucide-react";

interface CinematicIntroProps {
  onEnter: () => void;
}

export default function CinematicIntro({ onEnter }: CinematicIntroProps) {
  const [isExiting, setIsExiting] = useState(false);

  const handleEnterWorkspace = () => {
    setIsExiting(true);
    setTimeout(onEnter, 800); // Match transition duration
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#080A0D] text-[#F2F5F7] px-6 transition-all duration-800 ${
        isExiting
          ? "opacity-0 scale-105 pointer-events-none"
          : "opacity-100 scale-100"
      }`}
    >
      {/* Background Cyber Grid & Radar Pulse */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#11161B_1px,transparent_1px),linear-gradient(to_bottom,#11161B_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-30 pointer-events-none" />
      <div
        className="absolute w-150 h-150 rounded-full border border-[#52F0F5]/10 animate-ping pointer-events-none"
        style={{ animationDuration: "4s" }}
      />
      <div className="absolute w-75 h-75 rounded-full border border-[#52F0F5]/20 animate-pulse pointer-events-none" />

      {/* Cinematic Content */}
      <div className="relative z-10 text-center space-y-6 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#52F0F5]/10 border border-[#52F0F5]/20 text-[#52F0F5] text-xs font-mono tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5 animate-spin" />
          <span>Digital Dimension Experience v2.4</span>
        </div>

        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tighter font-heading">
          AKASH <span className="text-[#52F0F5]">S M</span>
        </h1>

        <p className="text-sm sm:text-base text-slate-400 font-mono tracking-wide">
          FULL-STACK ARCHITECT &bull; FOUNDER @ WEBXODE TECHNOLOGIES
        </p>

        <div className="pt-8">
          <button
            onClick={handleEnterWorkspace}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#52F0F5] text-[#080A0D] font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_rgba(82,240,245,0.6)] active:scale-95 cursor-pointer"
          >
            <Volume2 className="w-4 h-4" />
            <span>Initialize Cyberspace Workspace</span>
            <Terminal className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 text-[11px] font-mono text-slate-600">
        RECOMMENDED: DESKTOP VIEW &bull; AUDIO ENABLED
      </div>
    </div>
  );
}
