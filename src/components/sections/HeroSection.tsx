"use client";

import {
  ArrowDownRight,
  Sparkles,
  Terminal,
  Layers,
  Code2,
  Cpu,
} from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";
import Parallax from "@/components/motion/Parallax";

interface HeroSectionProps {
  theme: "dark" | "light";
  onExplore: () => void;
}

export default function HeroSection({ theme, onExplore }: HeroSectionProps) {
  const isDark = theme === "dark";

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between px-6 sm:px-16 pt-20 pb-12 overflow-hidden">
      {/* Cinematic Background Stock Video / Ambient Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-20 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105 filter brightness-75 contrast-125"
        >
          <source
            src="https://www.pexels.com/download/video/18419660/"
            type="video/mp4"
          />
        </video>
        <div
          className={`absolute inset-0 ${isDark ? "bg-linear-to-t from-[#080A0D] via-[#080A0D]/70 to-transparent" : "bg-linear-to-t from-[#F8FAFC] via-[#F8FAFC]/70 to-transparent"}`}
        />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#11161B_1px,transparent_1px),linear-gradient(to_bottom,#11161B_1px,transparent_1px)] bg-size-[5rem_5rem] opacity-20 pointer-events-none z-1" />

      {/* Top Meta info */}
      <ScrollReveal
        direction="fade"
        className="relative z-10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs"
      >
        <div
          className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border backdrop-blur-md ${
            isDark
              ? "bg-[#11161B]/80 border-[#11161B] text-[#52F0F5]"
              : "bg-white/80 border-sky-200 text-sky-600 shadow-sm"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#52F0F5] animate-ping" />
          <span className="font-semibold tracking-wider">
            FOUNDER @ WEBXODE TECHNOLOGIES
          </span>
        </div>
        <div
          className={`flex items-center gap-2 ${isDark ? "text-slate-400" : "text-slate-500"}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>NAMAKKAL, TAMIL NADU, IN</span>
        </div>
      </ScrollReveal>

      {/* Main Kinetic Typography & Side Preview Grid */}
      <div className="relative z-10 my-auto py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-7xl mx-auto w-full">
        {/* Left Column: Kinetic Headline */}
        <div className="lg:col-span-7 space-y-6">
          <ScrollReveal direction="up" delay={100}>
            <div
              className={`inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase ${isDark ? "text-[#52F0F5]" : "text-sky-600 font-bold"}`}
            >
              <Code2 className="w-4 h-4" />
              <span>Full-Stack Engineer &bull; 2.5+ Years Experience</span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tighter leading-[1.05] font-heading">
              Architecting{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#52F0F5] via-teal-300 to-emerald-400">
                scalable SaaS
              </span>{" "}
              & digital products.
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={300}>
            <p
              className={`max-w-xl text-base sm:text-lg font-sans font-light leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}
            >
              Specializing in Next.js, React, Node.js, and multi-tenant
              architectures. Building high-performance solutions from Namakkal
              to global audiences.
            </p>
          </ScrollReveal>

          {/* CTAs */}
          <ScrollReveal direction="up" delay={400}>
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onExplore}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#52F0F5] text-[#080A0D] font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_rgba(82,240,245,0.4)] active:scale-95 cursor-pointer"
              >
                <span>Explore Selected Work</span>
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
              </button>
              <a
                href="#contact"
                className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl border font-semibold text-sm transition-all duration-300 cursor-pointer backdrop-blur-md ${
                  isDark
                    ? "border-[#11161B] bg-[#0B0E13]/80 hover:border-[#52F0F5] text-white"
                    : "border-slate-200 bg-white/90 hover:border-sky-500 text-slate-800 shadow-sm"
                }`}
              >
                <Terminal className="w-4 h-4 text-[#52F0F5]" />
                <span>Initiate Project Enquiry</span>
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Floating Glassmorphic System Terminal Widget */}
        <div className="lg:col-span-5">
          <ScrollReveal direction="right" delay={300}>
            <div
              className={`p-6 rounded-2xl border backdrop-blur-xl shadow-2xl space-y-4 font-mono text-xs ${
                isDark
                  ? "bg-[#0B0E13]/90 border-[#11161B] shadow-black/80"
                  : "bg-white/90 border-slate-200 shadow-slate-300/50"
              }`}
            >
              <div className="flex items-center justify-between pb-3 border-b border-inherit">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                </div>
                <span className={isDark ? "text-slate-400" : "text-slate-500"}>
                  webxode_kernel.ts
                </span>
              </div>

              <div className="space-y-2 text-slate-400">
                <div className="text-[#52F0F5]">
                  &gt; initializing core systems...
                </div>
                <div>&gt; stack: [Next.js, TypeScript, Node.js, MongoDB]</div>
                <div>&gt; active_company: Webxode Technologies</div>
                <div className="text-emerald-400">
                  &gt; status: Ready for high-impact deployment.
                </div>
              </div>

              <div
                className={`p-4 rounded-xl border flex items-center justify-between ${
                  isDark
                    ? "bg-[#080A0D] border-[#11161B]"
                    : "bg-slate-50 border-slate-200"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Cpu className="w-5 h-5 text-[#52F0F5] animate-pulse" />
                  <div>
                    <div
                      className={`font-bold ${isDark ? "text-white" : "text-slate-900"}`}
                    >
                      Production Environment
                    </div>
                    <div className="text-[10px] text-slate-500">
                      Optimized for Speed & Security
                    </div>
                  </div>
                </div>
                <span className="px-2 py-1 rounded bg-[#52F0F5]/10 text-[#52F0F5] text-[10px]">
                  v2.4
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Bottom Metrics Bar with Parallax Float */}
      <Parallax speed={0.05} className="relative z-10 max-w-7xl mx-auto w-full">
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t font-mono text-xs backdrop-blur-sm ${
            isDark
              ? "border-[#11161B] text-slate-400"
              : "border-slate-200 text-slate-600"
          }`}
        >
          <div>
            <div className="text-lg font-bold text-white font-heading">
              2.5+ YEARS
            </div>
            <div>Engineering Experience</div>
          </div>
          <div>
            <div className="text-lg font-bold text-white font-heading">
              WEBXODE
            </div>
            <div>Founding & Leadership</div>
          </div>
          <div>
            <div className="text-lg font-bold text-white font-heading">
              NEXT.JS & MERN
            </div>
            <div>Primary Core Stack</div>
          </div>
          <div>
            <div className="text-lg font-bold text-emerald-400 font-heading">
              100% SHIPPED
            </div>
            <div>Production Delivery Rate</div>
          </div>
        </div>
      </Parallax>
    </section>
  );
}
