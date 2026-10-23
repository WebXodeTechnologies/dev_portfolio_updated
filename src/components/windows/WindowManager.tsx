"use client";

import {
  User,
  FolderGit2,
  Cpu,
  Terminal,
  Mail,
  X,
  Minimize2,
  ExternalLink,
  Code2,
  Server,
  ShieldCheck,
} from "lucide-react";

interface WindowManagerProps {
  windows: {
    about: boolean;
    projects: boolean;
    skills: boolean;
    terminal: boolean;
    contact: boolean;
  };
  onClose: (
    id: "about" | "projects" | "skills" | "terminal" | "contact",
  ) => void;
  theme: "dark" | "light";
  playClick: () => void;
}

export default function WindowManager({
  windows,
  onClose,
  theme,
  playClick,
}: WindowManagerProps) {
  const isDark = theme === "dark";

  return (
    <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center p-4 sm:p-12">
      {/* 1. ABOUT WINDOW */}
      {windows.about && (
        <WindowFrame
          title="about_akash.txt"
          icon={User}
          onClose={() => {
            playClick();
            onClose("about");
          }}
          theme={theme}
        >
          <div className="space-y-4">
            <h2
              className={`text-xl font-bold font-heading ${isDark ? "text-white" : "text-slate-900"}`}
            >
              About Akash S M
            </h2>
            <p
              className={`leading-relaxed text-sm ${isDark ? "text-slate-300" : "text-slate-600"}`}
            >
              I am a Full-Stack Developer and the founder of{" "}
              <strong className={isDark ? "text-white" : "text-slate-900"}>
                Webxode Technologies
              </strong>{" "}
              based in Namakkal, Tamil Nadu. With 2.5+ years of hands-on
              experience, I specialize in building robust web applications,
              reliable backend APIs, and scalable SaaS products.
            </p>
            <div
              className={`p-4 rounded-lg border font-mono text-xs space-y-2 ${isDark ? "bg-[#080A0D] border-[#11161B]" : "bg-slate-50 border-slate-200 text-slate-700"}`}
            >
              <div className="text-[#52F0F5]">
                &gt; LOCATION: Namakkal, Tamil Nadu, IN
              </div>
              <div className={isDark ? "text-slate-400" : "text-slate-600"}>
                &gt; ROLE: Founder & Lead Developer @ Webxode
              </div>
              <div className={isDark ? "text-slate-400" : "text-slate-600"}>
                &gt; SPECIALTY: Next.js, React, Node.js, MongoDB, DevOps
              </div>
            </div>
          </div>
        </WindowFrame>
      )}

      {/* 2. PROJECTS WINDOW */}
      {windows.projects && (
        <WindowFrame
          title="projects_explorer"
          icon={FolderGit2}
          onClose={() => {
            playClick();
            onClose("projects");
          }}
          theme={theme}
        >
          <div className="space-y-6">
            <div
              className={`border-b pb-4 ${isDark ? "border-[#11161B]" : "border-slate-200"}`}
            >
              <div className="flex items-center justify-between">
                <h2
                  className={`text-xl font-bold font-heading ${isDark ? "text-white" : "text-slate-900"}`}
                >
                  Featured Engineering Projects
                </h2>
                <span className="px-2.5 py-1 rounded-full bg-[#52F0F5]/10 border border-[#52F0F5]/20 text-[#52F0F5] text-xs font-mono">
                  5 Shipped / Active
                </span>
              </div>
              <p
                className={`text-xs mt-1 ${isDark ? "text-slate-400" : "text-slate-500"}`}
              >
                Production-grade web applications and multi-tenant SaaS
                architectures built by Akash S M.
              </p>
            </div>

            {/* Project 1 */}
            <div
              className={`p-4 rounded-lg border space-y-3 ${isDark ? "bg-[#080A0D] border-[#11161B]" : "bg-slate-50 border-slate-200"}`}
            >
              <div className="flex items-center justify-between">
                <h3
                  className={`font-bold text-base ${isDark ? "text-white" : "text-slate-900"}`}
                >
                  Nearbuy Clothing
                </h3>
                <span className="text-xs font-mono text-emerald-400">
                  Live Client Marketplace
                </span>
              </div>
              <p
                className={`text-xs leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}
              >
                Hyperlocal clothing discovery and e-commerce platform featuring
                secure Auth.js Google OAuth authentication, robust Zod
                validation, and lightning-fast Zustand state management.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {[
                  "Next.js 15",
                  "React 19",
                  "MongoDB",
                  "Auth.js",
                  "Zustand",
                  "Tailwind CSS",
                ].map((t, i) => (
                  <span
                    key={i}
                    className={`px-2 py-0.5 rounded text-[11px] font-mono ${isDark ? "bg-[#11161B] text-[#52F0F5]" : "bg-sky-50 text-sky-600 border border-sky-100"}`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Project 2 */}
            <div
              className={`p-4 rounded-lg border space-y-3 ${isDark ? "bg-[#080A0D] border-[#11161B]" : "bg-slate-50 border-slate-200"}`}
            >
              <div className="flex items-center justify-between">
                <h3
                  className={`font-bold text-base ${isDark ? "text-white" : "text-slate-900"}`}
                >
                  Texora
                </h3>
                <span className="text-xs font-mono text-[#52F0F5]">
                  Independent SaaS Platform
                </span>
              </div>
              <p
                className={`text-xs leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}
              >
                Modular blog management system equipped with rich-text
                publishing (Tiptap), real-time Socket.IO collaboration, secure
                Razorpay checkout, Dockerized pipelines, and automated
                Playwright testing.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {[
                  "Next.js",
                  "Redis",
                  "Socket.IO",
                  "Tiptap",
                  "Razorpay",
                  "Docker",
                  "Sentry",
                ].map((t, i) => (
                  <span
                    key={i}
                    className={`px-2 py-0.5 rounded text-[11px] font-mono ${isDark ? "bg-[#11161B] text-[#52F0F5]" : "bg-sky-50 text-sky-600 border border-sky-100"}`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </WindowFrame>
      )}

      {/* 3. SKILLS WINDOW */}
      {windows.skills && (
        <WindowFrame
          title="tech_stack.json"
          icon={Cpu}
          onClose={() => {
            playClick();
            onClose("skills");
          }}
          theme={theme}
        >
          <div className="space-y-4">
            <h2
              className={`text-xl font-bold font-heading ${isDark ? "text-white" : "text-slate-900"}`}
            >
              Technical Architecture & Stack
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                className={`p-4 rounded-lg border space-y-2 ${isDark ? "bg-[#080A0D] border-[#11161B]" : "bg-slate-50 border-slate-200"}`}
              >
                <div className="flex items-center gap-2 text-[#52F0F5] font-mono text-xs font-bold">
                  <Code2 className="w-4 h-4" />
                  <span>FRONTEND</span>
                </div>
                <p
                  className={`text-xs ${isDark ? "text-slate-400" : "text-slate-600"}`}
                >
                  Next.js, React, TypeScript, Tailwind CSS, Zustand, TanStack
                  Query
                </p>
              </div>
              <div
                className={`p-4 rounded-lg border space-y-2 ${isDark ? "bg-[#080A0D] border-[#11161B]" : "bg-slate-50 border-slate-200"}`}
              >
                <div className="flex items-center gap-2 text-[#52F0F5] font-mono text-xs font-bold">
                  <Server className="w-4 h-4" />
                  <span>BACKEND & APIs</span>
                </div>
                <p
                  className={`text-xs ${isDark ? "text-slate-400" : "text-slate-600"}`}
                >
                  Node.js, Express.js, REST APIs, WebSockets, Zod, Auth.js
                </p>
              </div>
            </div>
          </div>
        </WindowFrame>
      )}

      {/* 4. TERMINAL WINDOW */}
      {windows.terminal && (
        <WindowFrame
          title="webxode_cli"
          icon={Terminal}
          onClose={() => {
            playClick();
            onClose("terminal");
          }}
          theme={theme}
        >
          <div className="space-y-3 font-mono text-xs">
            <div className={isDark ? "text-slate-400" : "text-slate-500"}>
              Webxode CLI [Version 2.4.0]
            </div>
            <div className={isDark ? "text-slate-500" : "text-slate-400"}>
              System diagnostic and status check.
            </div>
            <div
              className={`p-3 rounded border space-y-2 text-[#52F0F5] ${isDark ? "bg-[#080A0D] border-[#11161B]" : "bg-slate-900 border-slate-800"}`}
            >
              <div>&gt; curl https://api.webxode.com/v1/status</div>
              <div className="text-emerald-400">
                &quot;status&quot;: &quot;All systems operational. Ready for
                deployment.&quot;
              </div>
            </div>
          </div>
        </WindowFrame>
      )}

      {/* 5. CONTACT WINDOW */}
      {windows.contact && (
        <WindowFrame
          title="hire_akash.sh"
          icon={Mail}
          onClose={() => {
            playClick();
            onClose("contact");
          }}
          theme={theme}
        >
          <div className="space-y-4">
            <h2
              className={`text-xl font-bold font-heading ${isDark ? "text-white" : "text-slate-900"}`}
            >
              Let&apos;s Build Together
            </h2>
            <p
              className={`text-xs ${isDark ? "text-slate-400" : "text-slate-600"}`}
            >
              Have a project in mind or need an expert full-stack engineer?
              Reach out directly:
            </p>
            <div className="flex flex-col gap-2 font-mono text-xs">
              <a
                href="mailto:akashvicky2012@gmail.com"
                className={`p-3 rounded border flex items-center justify-between transition-all ${
                  isDark
                    ? "bg-[#080A0D] border-[#11161B] hover:border-[#52F0F5] text-white"
                    : "bg-slate-50 border-slate-200 hover:border-sky-500 text-slate-800 shadow-sm"
                }`}
              >
                <span>akashvicky2012@gmail.com</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#52F0F5]" />
              </a>
              <a
                href="https://github.com/ak220193"
                target="_blank"
                rel="noreferrer"
                className={`p-3 rounded border flex items-center justify-between transition-all ${
                  isDark
                    ? "bg-[#080A0D] border-[#11161B] hover:border-[#52F0F5] text-white"
                    : "bg-slate-50 border-slate-200 hover:border-sky-500 text-slate-800 shadow-sm"
                }`}
              >
                <span className="flex items-center gap-2">
                  {/* Custom GitHub SVG Icon */}
                  <svg
                    className="w-4 h-4 text-[#52F0F5]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                  GitHub Profile
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-[#52F0F5]" />
              </a>
            </div>
          </div>
        </WindowFrame>
      )}
    </div>
  );
}

// Reusable Window Shell Frame Component
function WindowFrame({
  title,
  icon: IconComponent,
  onClose,
  theme,
  children,
}: {
  title: string;
  icon: any;
  onClose: () => void;
  theme: "dark" | "light";
  children: React.ReactNode;
}) {
  const isDark = theme === "dark";

  return (
    <div
      className={`pointer-events-auto absolute w-full max-w-2xl max-h-[75vh] rounded-xl border backdrop-blur-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200 ${
        isDark
          ? "border-[#11161B] bg-[#0B0E13]/95 shadow-black/90 text-slate-300"
          : "border-slate-200 bg-white/95 shadow-slate-400/30 text-slate-700"
      }`}
    >
      {/* Window TitleBar */}
      <div
        className={`flex items-center justify-between px-4 py-3 border-b select-none ${
          isDark
            ? "bg-[#11161B]/50 border-[#11161B]"
            : "bg-slate-100 border-slate-200"
        }`}
      >
        <div className="flex items-center gap-2">
          <span
            className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer"
            onClick={onClose}
          />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80 cursor-pointer" />
          <span className="w-3 h-3 rounded-full bg-green-500/80 cursor-pointer" />
        </div>
        <div
          className={`flex items-center gap-2 text-xs font-mono ${isDark ? "text-slate-300" : "text-slate-700"}`}
        >
          <IconComponent className="w-3.5 h-3.5 text-[#52F0F5]" />
          <span>{title}</span>
        </div>
        <div className="flex items-center gap-1 text-slate-400">
          <button
            onClick={onClose}
            className="p-1 hover:text-red-400 cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Window Content Body */}
      <div className="p-6 overflow-y-auto space-y-6 font-sans text-sm">
        {children}
      </div>
    </div>
  );
}
