"use client";

import { ExternalLink, Layers, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";

interface ProjectsSectionProps {
  theme: "dark" | "light";
}

const PROJECTS = [
  {
    title: "Aishwarya Arts",
    category: "Live Client E-Commerce",
    status: "Shipped",
    description:
      "Full-stack e-commerce platform featuring robust product browsing, order processing, live Razorpay payment flows, and an intuitive administrative CMS.",
    stack: [
      "Next.js",
      "React",
      "Express.js",
      "MongoDB",
      "Zustand",
      "Razorpay",
      "Tailwind CSS",
    ],
    highlights: [
      "Secure Payment Gateway Integration",
      "Custom Admin CMS",
      "Optimized Product Catalog",
    ],
  },
  {
    title: "Nearbuy Clothing",
    category: "Live Client Hyperlocal Marketplace",
    status: "Shipped",
    description:
      "Hyperlocal clothing discovery and marketplace platform equipped with secure Auth.js Google OAuth, strict Zod validation, and lightning-fast client-side state management.",
    stack: [
      "Next.js 15",
      "React 19",
      "MongoDB",
      "Auth.js",
      "Zustand",
      "TanStack Query",
      "Zod",
    ],
    highlights: [
      "Google OAuth Authentication",
      "Robust Zod Input Validation",
      "High-Performance State Architecture",
    ],
  },
  {
    title: "Texora",
    category: "Independent SaaS Platform",
    status: "Shipped",
    description:
      "Modular blog management system with rich-text publishing (Tiptap), real-time Socket.IO collaboration, secure Razorpay checkout, Docker pipelines, and Sentry monitoring.",
    stack: [
      "Next.js",
      "MongoDB Atlas",
      "Redis",
      "Socket.IO",
      "Tiptap",
      "Razorpay",
      "Docker",
      "Sentry",
    ],
    highlights: [
      "Rich-Text Publishing Engine",
      "Real-Time WebSocket Sync",
      "Automated Playwright Testing",
    ],
  },
  {
    title: "Webxode OS",
    category: "Internal CRM Product",
    status: "In Development",
    description:
      "Proprietary internal operating system and CRM dashboard designed to streamline lead management, project workflows, payment tracking, and role-based access control.",
    stack: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS v4",
      "shadcn/ui",
      "MongoDB Native",
      "Docker",
    ],
    highlights: [
      "Role-Based Access Control",
      "Modular Window Interfaces",
      "Lead & Pipeline Tracking",
    ],
  },
  {
    title: "InvoNext",
    category: "Independent SaaS Application",
    status: "Shipped",
    description:
      "Personal billing and invoicing application featuring a built-in GST calculator, dynamic receipt generation, and streamlined client data management.",
    stack: ["Next.js", "React", "Tailwind CSS", "Zustand"],
    highlights: [
      "Built-in GST Calculation Engine",
      "Instant PDF/Receipt Export",
      "Clean Minimalist UI",
    ],
  },
];

export default function ProjectsSection({ theme }: ProjectsSectionProps) {
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
              <Sparkles className="w-3.5 h-3.5" />
              <span>SELECTED ENGINEERING WORKS</span>
            </div>
            <h2
              className={`text-4xl sm:text-6xl font-extrabold tracking-tight font-heading ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Architected for{" "}
              <span className="text-[#52F0F5]">scale & impact</span>.
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={200}>
            <p
              className={`max-w-md text-sm leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}
            >
              Explore production-grade web applications, e-commerce platforms,
              and multi-tenant SaaS products built from scratch by Akash S M.
            </p>
          </ScrollReveal>
        </div>

        {/* Projects Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => {
            const isShipped = project.status === "Shipped";
            return (
              <ScrollReveal
                key={index}
                direction="up"
                delay={index * 100}
                className={`group relative rounded-2xl border p-8 transition-all duration-300 flex flex-col justify-between ${
                  isDark
                    ? "bg-[#0B0E13]/80 border-[#11161B] hover:border-[#52F0F5]/50 hover:bg-[#0B0E13]"
                    : "bg-slate-50/80 border-slate-200 hover:border-sky-500/50 hover:bg-white shadow-sm"
                }`}
              >
                <div className="space-y-6">
                  {/* Card Top Meta */}
                  <div className="flex items-center justify-between gap-4 font-mono text-xs">
                    <span
                      className={
                        isDark ? "text-[#52F0F5]" : "text-sky-600 font-semibold"
                      }
                    >
                      {project.category}
                    </span>
                    <span
                      className={`px-2.5 py-1 rounded-full border ${
                        isShipped
                          ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                          : "bg-amber-500/10 border-amber-500/20 text-amber-400"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3
                    className={`text-2xl sm:text-3xl font-bold font-heading transition-colors ${
                      isDark
                        ? "text-white group-hover:text-[#52F0F5]"
                        : "text-slate-900 group-hover:text-sky-600"
                    }`}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}
                  >
                    {project.description}
                  </p>

                  {/* Highlights Bullet Points */}
                  <div className="space-y-2 pt-2">
                    <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                      Engineering Highlights:
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.highlights.map((h, hIdx) => (
                        <li
                          key={hIdx}
                          className={`flex items-center gap-2 text-xs font-mono ${isDark ? "text-slate-400" : "text-slate-700"}`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#52F0F5]" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Stack Chips & Footer */}
                <div className="pt-8 mt-8 border-t border-inherit space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className={`px-2.5 py-1 rounded-md text-xs font-mono ${
                          isDark
                            ? "bg-[#11161B] text-[#52F0F5] border border-[#11161B]"
                            : "bg-white text-sky-600 border border-sky-100 shadow-sm"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
