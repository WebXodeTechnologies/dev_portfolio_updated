"use client";

import { User, FolderGit2, Cpu, Terminal, Mail } from "lucide-react";

interface DesktopGridProps {
  onOpenWindow: (
    id: "about" | "projects" | "skills" | "terminal" | "contact",
  ) => void;
  theme: "dark" | "light";
}

const DESKTOP_ICONS = [
  {
    id: "about" as const,
    title: "about_akash.txt",
    icon: User,
    description: "Personal background & bio",
  },
  {
    id: "projects" as const,
    title: "projects_explorer",
    icon: FolderGit2,
    description: "Featured case studies & SaaS",
  },
  {
    id: "skills" as const,
    title: "tech_stack.json",
    icon: Cpu,
    description: "Architecture & tech stack",
  },
  {
    id: "terminal" as const,
    title: "webxode_cli",
    icon: Terminal,
    description: "Interactive system terminal",
  },
  {
    id: "contact" as const,
    title: "hire_akash.sh",
    icon: Mail,
    description: "Client enquiry & socials",
  },
];

export default function DesktopGrid({ onOpenWindow, theme }: DesktopGridProps) {
  const isDark = theme === "dark";

  return (
    <div className="relative z-10 h-[calc(100vh-5rem)] p-6 sm:p-8 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 content-start select-none">
      {DESKTOP_ICONS.map((item) => {
        const IconComponent = item.icon;
        return (
          <button
            key={item.id}
            onClick={() => onOpenWindow(item.id)}
            className={`group flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-200 cursor-pointer w-28 h-28 text-center ${
              isDark
                ? "border-transparent hover:border-[#11161B] hover:bg-[#11161B]/40"
                : "border-transparent hover:border-slate-200 hover:bg-slate-200/50"
            }`}
            title={item.description}
          >
            <div
              className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-all shadow-lg group-hover:scale-105 ${
                isDark
                  ? "bg-[#11161B] border-[#11161B] text-[#52F0F5] group-hover:border-[#52F0F5]/50 group-hover:shadow-[#52F0F5]/10"
                  : "bg-white border-slate-200 text-sky-600 group-hover:border-sky-500/50 group-hover:shadow-sky-500/10 shadow-sm"
              }`}
            >
              <IconComponent className="w-7 h-7" />
            </div>
            <span
              className={`mt-2.5 text-xs font-mono truncate w-full transition-colors ${
                isDark
                  ? "text-slate-300 group-hover:text-white"
                  : "text-slate-700 group-hover:text-slate-900 font-medium"
              }`}
            >
              {item.title}
            </span>
          </button>
        );
      })}
    </div>
  );
}
