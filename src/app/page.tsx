"use client";

import { useState } from "react";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { TypingAnimation } from "@/components/typing-animation";

export default function Portfolio() {
  const [isIntroComplete, setIsIntroComplete] = useState(false);

  const handleIntroComplete = () => {
    setIsIntroComplete(true);
  };

  if (!isIntroComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <ThemeToggle />
        <div className="text-center">
          <TypingAnimation
            text="hello world"
            speed={150}
            onComplete={handleIntroComplete}
            className="text-6xl md:text-8xl font-mono font-bold text-foreground"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background animate-in fade-in duration-1000">
      <ThemeToggle />

      <div id="about">
        <AboutSection />
      </div>

      <div id="projects">
        <ProjectsSection />
      </div>

      <div id="experience">
        <ExperienceSection />
      </div>

      <div id="skills">
        <SkillsSection />
      </div>

      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
}
