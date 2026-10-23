"use client";

import { Home, FolderGit2, Cpu, User, Mail } from "lucide-react";

interface SectionNavDockProps {
  activeSection: string;
  onNavigate: (id: string) => void;
  theme: "dark" | "light";
}

const NAV_ITEMS = [
  { id: "hero", label: "Top", icon: Home },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "skills", label: "Architecture", icon: Cpu },
  { id: "about", label: "Story", icon: User },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function SectionNavDock({
  activeSection,
  onNavigate,
  theme,
}: SectionNavDockProps) {
  const isDark = theme === "dark";

  return (
    <nav
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 px-4 py-2.5 rounded-2xl border backdrop-blur-2xl shadow-2xl transition-colors duration-300 ${
        isDark
          ? "bg-[#0B0E13]/90 border-[#11161B] shadow-black/80"
          : "bg-white/90 border-slate-200 shadow-slate-300/50"
      }`}
    >
      {NAV_ITEMS.map((item) => {
        const IconComponent = item.icon;
        const isActive = activeSection === item.id;

        return (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`group relative flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-200 cursor-pointer ${
              isActive
                ? isDark
                  ? "bg-[#11161B] border border-[#52F0F5]/30 text-[#52F0F5]"
                  : "bg-sky-50 border border-sky-500/30 text-sky-600"
                : isDark
                  ? "hover:bg-[#11161B]/60 text-slate-400 hover:text-white"
                  : "hover:bg-slate-100 text-slate-600 hover:text-slate-900"
            }`}
            title={item.label}
          >
            <IconComponent className="w-4 h-4" />
            <span className="hidden sm:inline text-xs font-mono">
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
