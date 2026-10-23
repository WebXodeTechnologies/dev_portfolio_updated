import Link from "next/link";
import { Terminal, ArrowLeft, ShieldAlert } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center bg-[#080A0D] px-6 text-[#F2F5F7] font-sans selection:bg-[#52F0F5]/30">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#11161B_1px,transparent_1px),linear-gradient(to_bottom,#11161B_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#52F0F5]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-lg rounded-xl border border-[#11161B] bg-[#0B0E13]/80 backdrop-blur-xl p-8 shadow-2xl shadow-black/50">
        {/* Terminal window header bar */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#11161B]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Terminal className="w-3.5 h-3.5 text-[#52F0F5]" />
            <span>sys_err.sh — 404</span>
          </div>
        </div>

        {/* Error Content */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>EXCEPTION: RESOURCE_NOT_FOUND</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-heading text-white">
            404<span className="text-[#52F0F5]">.</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-sans">
            The requested route or module could not be located in the current
            environment workspace. It may have been moved, deprecated, or never
            existed.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#52F0F5] text-[#080A0D] font-semibold text-sm transition-all hover:bg-[#52F0F5]/90 hover:shadow-lg hover:shadow-[#52F0F5]/20 active:scale-[0.98]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Workspace</span>
            </Link>
          </div>
        </div>

        {/* Footer meta */}
        <div className="mt-8 pt-4 border-t border-[#11161B] flex items-center justify-between text-[11px] font-mono text-slate-600">
          <span>HOST: webxode.com</span>
          <span>STATUS: 404_NOT_FOUND</span>
        </div>
      </div>
    </main>
  );
}
