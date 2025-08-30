"use client";

import { ChevronDown, Terminal } from "lucide-react";
import { useEffect, useState } from "react";
import { ABOUT_DATA } from "@/lib/consts";

export function AboutSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCareer = () => {
    document.getElementById("career")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-8">
      <div className="w-lg mx-auto">
        <div className="bg-card border border-border rounded-xl backdrop-blur-sm relative overflow-hidden shadow-2xl">
          <div className="h-8 bg-muted/50 border-b border-border flex items-center px-4 gap-2">
            <div className="w-2 h-2 rounded-full bg-destructive"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-xs font-mono text-muted-foreground ml-2">
              portfolio
            </span>
          </div>
          <div className="inline-flex items-center gap-2 backdrop-blur-sm rounded-lg px-4 py-2 font-mono text-xs">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">~/</span>
            <span className="text-primary">$</span>
            <span className="text-foreground">whoami --verbose</span>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-6 sm:gap-12">
              <div className="flex-shrink-0 sm:ml-4">
                <div className="relative">
                  <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full border border-primary/20 flex items-center justify-center shadow-lg">
                    <span className="text-xl font-mono font-bold text-primary">
                      AS
                    </span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-green-500 text-white rounded-full w-4 h-4 flex items-center justify-center shadow-lg">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>

              <div className="flex-1 space-y-3 float-right">
                <div>
                  <h1 className="text-xl md:text-2xl text-foreground font-bold">
                    {ABOUT_DATA.name}
                  </h1>
                  <p className="text-sm md:text-lg text-primary font-medium">
                    {ABOUT_DATA.position}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {ABOUT_DATA.education}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {ABOUT_DATA.location}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <div className="flex gap-2">
                    {ABOUT_DATA.socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        className="p-2 bg-muted/50 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-200 hover:scale-105 border border-border/50"
                        aria-label={link.label}
                      >
                        <link.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={scrollToCareer}
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 p-3 bg-primary/10 hover:bg-primary/20 rounded-full border border-primary/20 transition-all duration-300 hover:scale-110 ${
          scrollY > 100 ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        aria-label="Scroll to career"
      >
        <ChevronDown className="mt-1 w-5 h-5 text-primary animate-bounce" />
      </button>
    </section>
  );
}
