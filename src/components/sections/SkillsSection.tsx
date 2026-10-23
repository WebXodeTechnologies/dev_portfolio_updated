"use client";

import {
  Code2,
  Server,
  Database,
  Wrench,
  ShieldCheck,
  Cpu,
  Sparkles,
} from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";

interface SkillsSectionProps {
  theme: "dark" | "light";
}

const TECH_CATEGORIES = [
  {
    title: "Frontend Architecture",
    icon: Code2,
    description:
      "Building responsive, highly performant user interfaces with modern React ecosystems.",
    skills: [
      "React",
      "Next.js (App Router)",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Zustand",
      "TanStack Query",
      "HTML5 / CSS3",
    ],
  },
  {
    title: "Backend & Core APIs",
    icon: Server,
    description:
      "Designing robust server-side architecture, RESTful endpoints, and real-time communication.",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "WebSockets (Socket.IO)",
      "Authentication & OAuth",
      "Zod Validation",
      "Auth.js",
    ],
  },
  {
    title: "Database & Caching",
    icon: Database,
    description:
      "Managing structured data storage, caching layers, and high-speed data retrieval.",
    skills: [
      "MongoDB",
      "MongoDB Atlas",
      "Mongoose ODM",
      "Redis",
      "Multi-tenant Architecture",
    ],
  },
  {
    title: "DevOps, Quality & Cloud",
    icon: Wrench,
    description:
      "Ensuring code quality, automated delivery pipelines, and reliable cloud deployments.",
    skills: [
      "Docker",
      "Nginx",
      "GitHub Actions",
      "CI/CD Pipelines",
      "Playwright",
      "Vitest",
      "Sentry",
      "AWS (EC2, Lambda, S3)",
      "Vercel",
    ],
  },
];

export default function SkillsSection({ theme }: SkillsSectionProps) {
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
              <Cpu className="w-3.5 h-3.5" />
              <span>TECHNICAL ARCHITECTURE & STACK</span>
            </div>
            <h2
              className={`text-4xl sm:text-6xl font-extrabold tracking-tight font-heading ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Engineered with{" "}
              <span className="text-[#52F0F5]">modern precision</span>.
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={200}>
            <p
              className={`max-w-md text-sm leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}
            >
              A comprehensive breakdown of the core technologies, frameworks,
              and infrastructure tools leveraged to build scalable products.
            </p>
          </ScrollReveal>
        </div>

        {/* Skills Grid Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TECH_CATEGORIES.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <ScrollReveal
                key={index}
                direction="up"
                delay={index * 100}
                className={`p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  isDark
                    ? "bg-[#0B0E13]/80 border-[#11161B] hover:border-[#52F0F5]/50"
                    : "bg-slate-50/80 border-slate-200 hover:border-sky-500/50 shadow-sm"
                }`}
              >
                <div className="space-y-6">
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-3 rounded-xl border ${
                        isDark
                          ? "bg-[#11161B] border-[#11161B] text-[#52F0F5]"
                          : "bg-white border-slate-200 text-sky-600 shadow-sm"
                      }`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3
                        className={`text-xl font-bold font-heading ${isDark ? "text-white" : "text-slate-900"}`}
                      >
                        {category.title}
                      </h3>
                      <p
                        className={`text-xs mt-0.5 ${isDark ? "text-slate-400" : "text-slate-600"}`}
                      >
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium ${
                          isDark
                            ? "bg-[#080A0D] border border-[#11161B] text-slate-300 hover:text-[#52F0F5] hover:border-[#52F0F5]/30 transition-colors"
                            : "bg-white border border-slate-200 text-slate-700 hover:text-sky-600 hover:border-sky-300 shadow-sm transition-colors"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Status Tag */}
                <div className="pt-6 mt-6 border-t border-inherit flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>PRODUCTION_TESTED</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> ACTIVE
                  </span>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
