"use client";

import { useState } from "react";
import { AboutSection } from "@/components/sections/about";
import { CareerSection } from "@/components/sections/career";
import { ContactSection } from "@/components/sections/contact";
import { IntroSection } from "@/components/sections/intro";
// import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export default function Portfolio() {
  const [isIntroComplete, setIsIntroComplete] = useState(false);

  const handleIntroComplete = () => {
    setIsIntroComplete(true);
  };

  if (!isIntroComplete) {
    return <IntroSection handleIntroComplete={handleIntroComplete} />;
  }

  return (
    <div className="min-h-screen bg-background animate-in fade-in duration-1000">
      <ThemeToggle />

      <div id="about">
        <AboutSection />
      </div>

      {/* <div id="projects">
        <ProjectsSection />
      </div> */}

      <div id="career">
        <CareerSection />
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
