"use client";

import { Terminal } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function ExperienceSection() {
  const experiences = [
    {
      company: "Macy's",
      position: "Software Engineer",
      period: "2016 - 2018",
      startDate: "2016-06",
      endDate: "2018-05",
      description:
        "Worked on an application that simulates order flows and shows analytics.",
      achievements: [
        "Published 2 papers",
        "Built data analysis tools",
        "Learned Python & R",
      ],
      skills: ["JavaScript", "Java", "Spring Boot", "Python", "SQL"],
    },
    {
      company: "Invesco",
      position: "Senior Software Engineer",
      period: "2018 - 2021",
      startDate: "2018-05",
      endDate: "2021-06",
      description:
        "Built and lead all the engineering efforts for a greenfield quantitative investment platform, in close collaboration with quantitative researchers",
      achievements: [
        "10+ satisfied clients",
        "Built e-commerce sites",
        "Learned business skills",
      ],
      skills: ["R", "RShiny", "RMarkdown", "RStudio", "SQL", "Linux"],
    },
    {
      company: "Relay Payments",
      position: "Software Engineer",
      period: "2021 - 2022",
      startDate: "2021-06",
      endDate: "2022-08",
      description:
        "Worked on a full -stack, greenfield, web application responsible for managing reservations, payments, receipts, etc",
      achievements: [
        "Built 8 client websites",
        "Learned WordPress & PHP",
        "Improved page speed by 25%",
      ],
      skills: ["React", "TypeScript", "Go", "PostgreSQL", "Docker"],
    },
    {
      company: "Rails",
      position: "Founding Engineer",
      period: "2022 - 2024",
      startDate: "2022-08",
      endDate: "2024-01",
      description: "First hire, tasked with building out v1.0 of the product.",
      achievements: [
        "Shipped first production app",
        "Learned React & Node.js",
        "Contributed to open source",
      ],
      skills: [
        "React",
        "TypeScript",
        "Python",
        "SQL",
        "GCP",
        "Firebase",
        "Linux",
        "Docker",
      ],
    },
    {
      company: "Stealth Startup",
      position: "Founding Engineer",
      period: "2024 - 2024",
      startDate: "2024-01",
      endDate: "2024-03",
      description:
        "Developed responsive web applications using React and modern JavaScript. Collaborated with design teams to create pixel-perfect user interfaces.",
      achievements: [
        "Built 15+ client projects",
        "Improved accessibility scores",
        "Reduced bundle size by 30%",
      ],
      skills: ["React", "Next.js", "TypeScript", "AWS", "Docker"],
    },
    {
      company: "Wagmo",
      position: "Senior Software Engineer",
      period: "2024 - 2025",
      startDate: "2024-03",
      endDate: "2025-08",
      description:
        "Led development of scalable web applications serving 100K+ users. Architected microservices infrastructure and mentored junior developers.",
      achievements: [
        "Reduced load times by 40%",
        "Led team of 5 developers",
        "Implemented CI/CD pipeline",
      ],
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Python",
        "Django",
        "PostgreSQL",
      ],
    },
  ];

  const [activeExperience, setActiveExperience] = useState(
    experiences.length - 1,
  ); // Start at latest experience
  const [lastHoveredExperience, setLastHoveredExperience] = useState<
    number | null
  >(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Use last hovered experience if it exists, otherwise use the default active experience
  const currentActiveExperience =
    lastHoveredExperience !== null ? lastHoveredExperience : activeExperience;

  const getDateRange = () => {
    const startDates = experiences.map((exp) => new Date(exp.startDate));
    const endDates = experiences.map((exp) =>
      exp.endDate === "present" ? new Date() : new Date(exp.endDate),
    );

    const minDate = new Date(Math.min(...startDates.map((d) => d.getTime())));
    const maxDate = new Date(Math.max(...endDates.map((d) => d.getTime())));

    return { minDate, maxDate };
  };

  const { minDate, maxDate } = getDateRange();

  const getTimelinePosition = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = endDate === "present" ? new Date() : new Date(endDate);

    const totalRange = maxDate.getTime() - minDate.getTime();
    const startPosition =
      ((start.getTime() - minDate.getTime()) / totalRange) * 100;
    const endPosition =
      ((end.getTime() - minDate.getTime()) / totalRange) * 100;

    return { startPosition, endPosition, width: endPosition - startPosition };
  };

  const calculateDuration = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = endDate === "present" ? new Date() : new Date(endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));

    if (diffMonths < 12) {
      return `${diffMonths}mo`;
    } else {
      const years = Math.floor(diffMonths / 12);
      const months = diffMonths % 12;
      return months > 0 ? `${years}y ${months}mo` : `${years}y`;
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.scrollLeft = scrollContainer.scrollWidth;
    }
  }, []);

  const handleTimelineClick = (index: number) => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const cardWidth = 320 + 24; // card width + gap
    const targetScroll = index * cardWidth;
    scrollContainer.scrollTo({ left: targetScroll, behavior: "smooth" });
    setActiveExperience(index);
    setLastHoveredExperience(null); // Reset hover state when clicking timeline
  };

  return (
    <section className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-balance mb-4">Experience</h2>
          <div className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm border border-primary/20 rounded-lg px-4 py-2 font-mono text-sm">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">~/career</span>
            <span className="text-primary">$</span>
            <span className="text-foreground">git log --oneline --reverse</span>
          </div>
        </div>

        <div className="relative">
          <div className="relative h-10">
            {/* Background timeline */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-primary/10 via-primary/20 to-primary/30 rounded-full" />

            {/* Year markers */}
            <div className="absolute top-2 left-0 right-0 flex justify-between text-xs font-mono text-muted-foreground">
              <span>{minDate.getFullYear()}</span>
              <span>{maxDate.getFullYear()}</span>
            </div>

            {/* Experience sections */}
            {experiences.map((experience, index) => {
              const { startPosition, width } = getTimelinePosition(
                experience.startDate,
                experience.endDate,
              );
              const isActive = index === currentActiveExperience;

              return (
                // biome-ignore lint/a11y/noStaticElementInteractions: TBD
                // biome-ignore lint/a11y/useKeyWithClickEvents: TBD
                <div
                  key={experience.company}
                  className="absolute top-8 cursor-pointer group"
                  style={{
                    left: `${startPosition}%`,
                    width: `${width}%`,
                  }}
                  onClick={() => handleTimelineClick(index)}
                >
                  {/* Experience section bar */}
                  <div
                    className={`h-1 rounded-full transition-all duration-300 mx-1 ${
                      isActive
                        ? "bg-primary shadow-lg shadow-primary/50 scale-y-150"
                        : "bg-primary/60 hover:bg-primary/80 group-hover:scale-y-125"
                    }`}
                  />

                  {/* Company label */}
                  <div
                    className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-mono whitespace-nowrap transition-all duration-300 ${
                      isActive
                        ? "text-primary font-semibold"
                        : "text-muted-foreground group-hover:text-primary"
                    }`}
                  >
                    {experience.company}
                  </div>

                  {/* Duration tooltip for active experience */}
                  {isActive && (
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-mono whitespace-nowrap shadow-lg animate-in fade-in-0 zoom-in-95 duration-200">
                      {calculateDuration(
                        experience.startDate,
                        experience.endDate,
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto overflow-y-hidden pb-6 scroll-smooth experience-scrollbar items-center"
            style={{
              minHeight: "700px",
            }}
          >
            <div className="flex gap-6 w-max px-4">
              {experiences.map((experience, index) => (
                // biome-ignore lint/a11y/noStaticElementInteractions: TBD
                <div
                  key={experience.company}
                  className="relative group flex-shrink-0 w-80"
                  data-experience-card
                  onMouseEnter={() => setLastHoveredExperience(index)}
                >
                  <Card
                    className={`border transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 group-hover:-translate-y-2 h-full ${
                      index === currentActiveExperience
                        ? "border-primary/60 bg-background/90 shadow-xl shadow-primary/20 scale-105 ring-2 ring-primary/30"
                        : "border-primary/20 bg-background/60 hover:border-primary/40"
                    } backdrop-blur-sm hover:bg-background/80`}
                  >
                    {index === currentActiveExperience && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 rounded-lg pointer-events-none" />
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-lg blur-sm opacity-75 animate-pulse" />
                      </>
                    )}

                    <CardContent className="p-6 relative z-10">
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-3">
                          <Badge
                            variant="outline"
                            className={`text-xs font-mono transition-colors duration-300 ${
                              index === currentActiveExperience
                                ? "bg-primary/30 text-primary border-primary/60 shadow-sm"
                                : "bg-primary/10 text-primary border-primary/30"
                            }`}
                          >
                            {experience.company}
                          </Badge>
                          <span
                            className={`text-xs font-mono transition-colors duration-300 ${
                              index === currentActiveExperience
                                ? "text-primary"
                                : "text-muted-foreground"
                            }`}
                          >
                            #{index + 1}
                          </span>
                        </div>
                        <h3
                          className={`text-xl font-semibold mb-1 transition-colors duration-300 text-balance ${
                            index === currentActiveExperience
                              ? "text-primary"
                              : "group-hover:text-primary"
                          }`}
                        >
                          {experience.position}
                        </h3>
                        <p
                          className={`font-medium text-sm font-mono transition-colors duration-300 ${
                            index === currentActiveExperience
                              ? "text-primary"
                              : "text-primary/80"
                          }`}
                        >
                          {calculateDuration(
                            experience.startDate,
                            experience.endDate,
                          )}
                        </p>
                      </div>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                        {experience.description}
                      </p>

                      <div className="space-y-3 mb-4">
                        <h4 className="font-medium text-xs uppercase tracking-wide text-muted-foreground font-mono">
                          Key Achievements
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {experience.achievements.map((achievement) => (
                            <div
                              key={achievement}
                              className="px-2 py-1 bg-muted/50 rounded-full text-xs hover:bg-primary/10 hover:text-primary transition-all duration-200 cursor-pointer border border-primary/10"
                            >
                              {achievement}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-medium text-xs uppercase tracking-wide text-muted-foreground font-mono">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {experience.skills.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="text-xs px-2 py-1 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-200 font-mono"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
