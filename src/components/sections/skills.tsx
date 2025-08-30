"use client";

import { Cpu, Languages, Terminal } from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      category: "Languages",
      skills: [
        { name: "Python", years: 7 },
        { name: "JavaScript", years: 7 },
        { name: "TypeScript", years: 5 },
        { name: "Java", years: 3 },
        { name: "R", years: 3 },
        { name: "Go", years: 2 },
        { name: "C#", years: 1 },
        { name: "SQL", years: 9 },
      ],
      icon: <Languages className="w-4 h-4" />,
      command: "languages/",
    },
    {
      category: "Technologies",
      skills: [
        { name: "React.js", years: 5 },
        { name: "Node.js", years: 4 },
        { name: "Next.js", years: 3 },
        { name: "Django", years: 2 },
        { name: "FastAPI", years: 2 },
        { name: "PostgreSQL", years: 5 },
        { name: "Docker", years: 3 },
        { name: "Git", years: 5 },
        { name: "Linux", years: 3 },
        { name: "AWS", years: 2 },
        { name: "GCP", years: 2 },
        { name: "Pulumi", years: 1 },
      ],
      icon: <Cpu className="w-4 h-4" />,
      command: "technologies/",
    },
  ];

  return (
    <section className="pb-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-balance mb-4">Skills</h2>
          <div className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm border border-primary/20 rounded-lg px-4 py-2 font-mono text-sm">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">~/skills</span>
            <span className="text-primary">$</span>
            <span className="text-foreground">cat expertise.json</span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.category} className="group">
              <div className="bg-background/60 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      {category.icon}
                      <div className="font-mono text-sm text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                        ./{category.command}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="px-4 py-2 bg-muted/50 rounded-full text-sm font-medium hover:bg-primary/10 hover:text-primary transition-all duration-200 cursor-pointer hover:scale-105 flex items-center gap-2 border border-primary/10"
                    >
                      <span className="font-mono">{skill.name}</span>
                      <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full font-mono">
                        {skill.years}y
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
