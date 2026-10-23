"use client";

import {
  User,
  MapPin,
  Building2,
  Code2,
  Sparkles,
  Terminal,
} from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";

interface AboutSectionProps {
  theme: "dark" | "light";
}

export default function AboutSection({ theme }: AboutSectionProps) {
  const isDark = theme === "dark";

  return (
    <section
      className={`relative py-24 px-6 sm:px-16 border-t ${
        isDark ? "bg-[#080A0D] border-[#11161B]" : "bg-white border-slate-200"
      }`}
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#11161B_1px,transparent_1px),linear-gradient(to_bottom,#11161B_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <ScrollReveal direction="up" className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#52F0F5]/10 border border-[#52F0F5]/20 text-[#52F0F5] text-xs font-mono">
              <User className="w-3.5 h-3.5" />
              <span>FOUNDER & ENGINEER BACKGROUND</span>
            </div>
            <h2
              className={`text-4xl sm:text-6xl font-extrabold tracking-tight font-heading ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Driven by code,{" "}
              <span className="text-[#52F0F5]">anchored in vision</span>.
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={200}>
            <p
              className={`max-w-md text-sm leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}
            >
              Operating from Namakkal, Tamil Nadu, I build production-ready
              digital solutions that bridge technical complexity with clean user
              experiences.
            </p>
          </ScrollReveal>
        </div>

        {/* About Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Story Column */}
          <ScrollReveal
            direction="up"
            className={`lg:col-span-2 p-8 sm:p-10 rounded-2xl border flex flex-col justify-between space-y-8 ${
              isDark
                ? "bg-[#0B0E13]/80 border-[#11161B]"
                : "bg-slate-50/80 border-slate-200 shadow-sm"
            }`}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div
                  className={`p-3 rounded-xl border ${
                    isDark
                      ? "bg-[#11161B] border-[#11161B] text-[#52F0F5]"
                      : "bg-white border-slate-200 text-sky-600 shadow-sm"
                  }`}
                >
                  <Terminal className="w-6 h-6" />
                </div>
                <div>
                  <h3
                    className={`text-xl font-bold font-heading ${isDark ? "text-white" : "text-slate-900"}`}
                  >
                    Akash S M
                  </h3>
                  <p
                    className={`text-xs font-mono ${isDark ? "text-[#52F0F5]" : "text-sky-600"}`}
                  >
                    Founder @ Webxode Technologies
                  </p>
                </div>
              </div>

              <div
                className={`space-y-4 text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}
              >
                <p>
                  I am a Full-Stack Developer with over 2.5 years of hands-on
                  engineering experience, specializing in modern web application
                  architecture, robust backend systems, and scalable SaaS
                  products.
                </p>
                <p>
                  As the founder of{" "}
                  <strong className={isDark ? "text-white" : "text-slate-900"}>
                    Webxode Technologies
                  </strong>{" "}
                  based in Namakkal, I lead end-to-end development
                  lifecycles—from database design in MongoDB and secure API
                  creation with Node.js/Next.js to containerized deployments
                  using Docker and Nginx.
                </p>
                <p>
                  My work centers on writing clean, maintainable code,
                  implementing rigorous type safety with TypeScript, and
                  shipping digital platforms that deliver tangible business
                  growth for clients and users alike.
                </p>
              </div>
            </div>

            {/* Quick Meta Badges */}
            <div className="pt-6 border-t border-inherit grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#52F0F5]" />
                <span className={isDark ? "text-slate-400" : "text-slate-600"}>
                  Namakkal, Tamil Nadu
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#52F0F5]" />
                <span className={isDark ? "text-slate-400" : "text-slate-600"}>
                  Webxode Technologies
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-[#52F0F5]" />
                <span className={isDark ? "text-slate-400" : "text-slate-600"}>
                  Full-Stack Architect
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Side Highlights Column */}
          <div className="space-y-6 flex flex-col justify-between">
            <ScrollReveal
              direction="up"
              delay={100}
              className={`p-6 rounded-2xl border space-y-3 ${
                isDark
                  ? "bg-[#0B0E13]/80 border-[#11161B]"
                  : "bg-slate-50/80 border-slate-200 shadow-sm"
              }`}
            >
              <div className="text-xs font-mono text-[#52F0F5]">
                CORE PHILOSOPHY
              </div>
              <h4
                className={`text-lg font-bold font-heading ${isDark ? "text-white" : "text-slate-900"}`}
              >
                Performance & Reliability First
              </h4>
              <p
                className={`text-xs leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}
              >
                Every system I architect is built with scalability, fault
                tolerance, and speed at its core—ensuring seamless experiences
                under heavy traffic.
              </p>
            </ScrollReveal>

            <ScrollReveal
              direction="up"
              delay={200}
              className={`p-6 rounded-2xl border space-y-3 ${
                isDark
                  ? "bg-[#0B0E13]/80 border-[#11161B]"
                  : "bg-slate-50/80 border-slate-200 shadow-sm"
              }`}
            >
              <div className="text-xs font-mono text-[#52F0F5]">
                CLIENT-CENTRIC FOCUS
              </div>
              <h4
                className={`text-lg font-bold font-heading ${isDark ? "text-white" : "text-slate-900"}`}
              >
                From Concept to Production
              </h4>
              <p
                className={`text-xs leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}
              >
                Whether building bespoke e-commerce platforms like Aishwarya
                Arts or multi-tenant SaaS products, I handle the entire pipeline
                from design to deployment.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
