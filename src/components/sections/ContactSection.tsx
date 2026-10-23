"use client";

import { useState } from "react";
import {
  Mail,
  Send,
  MapPin,
  CheckCircle2,
  Sparkles,
  Terminal,
} from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";

interface ContactSectionProps {
  theme: "dark" | "light";
}

export default function ContactSection({ theme }: ContactSectionProps) {
  const isDark = theme === "dark";
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate async submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

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
              <Mail className="w-3.5 h-3.5" />
              <span>INITIATE CONNECTION</span>
            </div>
            <h2
              className={`text-4xl sm:text-6xl font-extrabold tracking-tight font-heading ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Let&apos;s build{" "}
              <span className="text-[#52F0F5]">something exceptional</span>.
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={200}>
            <p
              className={`max-w-md text-sm leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}
            >
              Have a project in mind, need an expert full-stack developer, or
              want to scale your SaaS MVP? Reach out directly.
            </p>
          </ScrollReveal>
        </div>

        {/* Contact Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info & Socials */}
          <ScrollReveal direction="up" className="lg:col-span-5 space-y-6">
            <div
              className={`p-8 rounded-2xl border space-y-8 ${
                isDark
                  ? "bg-[#0B0E13]/80 border-[#11161B]"
                  : "bg-slate-50/80 border-slate-200 shadow-sm"
              }`}
            >
              <div className="space-y-2">
                <h3
                  className={`text-2xl font-bold font-heading ${isDark ? "text-white" : "text-slate-900"}`}
                >
                  Direct Communication
                </h3>
                <p
                  className={`text-xs leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}
                >
                  I typically respond within 24 hours. Feel free to connect via
                  email or professional profiles below.
                </p>
              </div>

              {/* Direct Links */}
              <div className="space-y-4 font-mono text-xs">
                <a
                  href="mailto:akashvicky2012@gmail.com"
                  className={`p-4 rounded-xl border flex items-center justify-between transition-all ${
                    isDark
                      ? "bg-[#080A0D] border-[#11161B] hover:border-[#52F0F5] text-white"
                      : "bg-white border-slate-200 hover:border-sky-500 text-slate-800 shadow-sm"
                  }`}
                >
                  <span className="flex items-center gap-3 truncate">
                    <Mail className="w-4 h-4 text-[#52F0F5] shrink-0" />
                    <span className="truncate">akashvicky2012@gmail.com</span>
                  </span>
                  <span className="text-[#52F0F5] shrink-0">Send Email</span>
                </a>

                <a
                  href="https://github.com/ak220193"
                  target="_blank"
                  rel="noreferrer"
                  className={`p-4 rounded-xl border flex items-center justify-between transition-all ${
                    isDark
                      ? "bg-[#080A0D] border-[#11161B] hover:border-[#52F0F5] text-white"
                      : "bg-white border-slate-200 hover:border-sky-500 text-slate-800 shadow-sm"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <svg
                      className="w-4 h-4 text-[#52F0F5] shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      />
                    </svg>
                    <span>GitHub Profile</span>
                  </span>
                  <span className="text-[#52F0F5]">View Repos</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/akashsm-dev/"
                  target="_blank"
                  rel="noreferrer"
                  className={`p-4 rounded-xl border flex items-center justify-between transition-all ${
                    isDark
                      ? "bg-[#080A0D] border-[#11161B] hover:border-[#52F0F5] text-white"
                      : "bg-white border-slate-200 hover:border-sky-500 text-slate-800 shadow-sm"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <svg
                      className="w-4 h-4 text-[#52F0F5] shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                    <span>LinkedIn Network</span>
                  </span>
                  <span className="text-[#52F0F5]">Connect</span>
                </a>
              </div>

              {/* Location Badge */}
              <div className="pt-6 border-t border-inherit flex items-center gap-3 font-mono text-xs">
                <div
                  className={`p-2.5 rounded-lg border ${
                    isDark
                      ? "bg-[#11161B] border-[#11161B] text-[#52F0F5]"
                      : "bg-white border-slate-200 text-sky-600 shadow-sm"
                  }`}
                >
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div
                    className={
                      isDark
                        ? "text-white font-bold"
                        : "text-slate-900 font-bold"
                    }
                  >
                    Based in Namakkal
                  </div>
                  <div className={isDark ? "text-slate-400" : "text-slate-500"}>
                    Tamil Nadu, India • Available Globally
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Interactive Enquiry Form */}
          <ScrollReveal direction="up" delay={200} className="lg:col-span-7">
            <div
              className={`p-8 sm:p-10 rounded-2xl border ${
                isDark
                  ? "bg-[#0B0E13]/80 border-[#11161B]"
                  : "bg-slate-50/80 border-slate-200 shadow-sm"
              }`}
            >
              {isSubmitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3
                    className={`text-2xl font-bold font-heading ${isDark ? "text-white" : "text-slate-900"}`}
                  >
                    Message Dispatched Successfully
                  </h3>
                  <p
                    className={`text-sm max-w-md mx-auto ${isDark ? "text-slate-400" : "text-slate-600"}`}
                  >
                    Thank you for reaching out. Your project details have been
                    recorded. I will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-[#52F0F5] text-[#080A0D] font-bold text-xs font-mono uppercase tracking-wider cursor-pointer hover:bg-white transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <h3
                      className={`text-xl font-bold font-heading ${isDark ? "text-white" : "text-slate-900"}`}
                    >
                      Project Enquiry Form
                    </h3>
                    <p
                      className={`text-xs ${isDark ? "text-slate-400" : "text-slate-600"}`}
                    >
                      Fill out the parameters below to initiate a technical
                      discussion.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        className={`block text-xs font-mono uppercase ${isDark ? "text-slate-300" : "text-slate-700"}`}
                      >
                        Your Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Sarah Jenkins"
                        className={`w-full px-4 py-3 rounded-xl border text-sm font-sans focus:outline-none transition-colors ${
                          isDark
                            ? "bg-[#080A0D] border-[#11161B] text-white focus:border-[#52F0F5]"
                            : "bg-white border-slate-200 text-slate-900 focus:border-sky-500 shadow-sm"
                        }`}
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        className={`block text-xs font-mono uppercase ${isDark ? "text-slate-300" : "text-slate-700"}`}
                      >
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="sarah@company.com"
                        className={`w-full px-4 py-3 rounded-xl border text-sm font-sans focus:outline-none transition-colors ${
                          isDark
                            ? "bg-[#080A0D] border-[#11161B] text-white focus:border-[#52F0F5]"
                            : "bg-white border-slate-200 text-slate-900 focus:border-sky-500 shadow-sm"
                        }`}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      className={`block text-xs font-mono uppercase ${isDark ? "text-slate-300" : "text-slate-700"}`}
                    >
                      Project Scope / Requirements *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe your web app, SaaS MVP, or technical requirements..."
                      className={`w-full px-4 py-3 rounded-xl border text-sm font-sans focus:outline-none transition-colors resize-none ${
                        isDark
                          ? "bg-[#080A0D] border-[#11161B] text-white focus:border-[#52F0F5]"
                          : "bg-white border-slate-200 text-slate-900 focus:border-sky-500 shadow-sm"
                      }`}
                    />
                  </div>

                  <button
                    disabled={isLoading}
                    type="submit"
                    className="w-full group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#52F0F5] text-[#080A0D] font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_rgba(82,240,245,0.4)] active:scale-95 cursor-pointer disabled:opacity-50"
                  >
                    {isLoading ? (
                      <span className="font-mono text-xs animate-pulse">
                        TRANSMITTING DATA...
                      </span>
                    ) : (
                      <>
                        <span>Transmit Enquiry</span>
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
