"use client";

import { useState } from "react";
import Preloader from "@/components/ui/Preloader";
import CinematicIntro from "@/components/cinematic/CinematicIntro";
import TopNav from "@/components/layout/TopNav";
import SectionNavDock from "@/components/layout/SectionNavDock";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import { useAudio } from "@/hooks/useAudio";

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);

  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const { playClick } = useAudio(soundEnabled);

  const scrollToSection = (id: string) => {
    playClick();
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main
      className={`relative min-h-screen transition-colors duration-700 ${
        theme === "dark"
          ? "bg-[#080A0D] text-[#F2F5F7]"
          : "bg-[#F8FAFC] text-[#0F172A]"
      }`}
    >
      {/* STAGE 1: Terminal Kernel Preloader */}
      {!loadingComplete ? (
        <Preloader onComplete={() => setLoadingComplete(true)} />
      ) : !introComplete ? (
        /* STAGE 2: Cinematic Gateway Intro from your cinematic folder */
        <CinematicIntro onEnter={() => setIntroComplete(true)} />
      ) : (
        /* STAGE 3: Unlocks Full Experience (Cosmic Universe Story + Portfolio Workspace) */
        <div className="animate-fade-in">
          {/* Top Navigation Bar */}
          <div className="fixed top-0 left-0 right-0 z-40">
            <TopNav
              theme={theme}
              toggleTheme={() => {
                playClick();
                setTheme(theme === "dark" ? "light" : "dark");
              }}
              soundEnabled={soundEnabled}
              toggleSound={() => setSoundEnabled(!soundEnabled)}
            />
          </div>

          {/* Visual Storyteller Chapters */}

          {/* Core Engineering Workspace */}
          <div className="relative z-20">
            <div id="hero">
              <HeroSection
                theme={theme}
                onExplore={() => scrollToSection("projects")}
              />
            </div>
            <div id="projects">
              <ProjectsSection theme={theme} />
            </div>
            <div id="skills">
              <SkillsSection theme={theme} />
            </div>
            <div id="about">
              <AboutSection theme={theme} />
            </div>
            <div id="contact">
              <ContactSection theme={theme} />
            </div>
          </div>

          {/* Floating Section Dock */}
          <SectionNavDock
            activeSection={activeSection}
            onNavigate={scrollToSection}
            theme={theme}
          />
        </div>
      )}
    </main>
  );
}
