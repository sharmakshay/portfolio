"use client";

import { Code2, Cpu, Hammer, Palette, Terminal } from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", years: 5 },
        { name: "Next.js", years: 3 },
        { name: "TypeScript", years: 4 },
        { name: "Tailwind CSS", years: 3 },
        { name: "Vue.js", years: 2 },
      ],
      icon: <Code2 className="w-4 h-4" />,
      command: "frontend/",
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", years: 4 },
        { name: "Python", years: 3 },
        { name: "PostgreSQL", years: 3 },
        { name: "MongoDB", years: 2 },
        { name: "GraphQL", years: 2 },
      ],
      icon: <Cpu className="w-4 h-4" />,
      command: "backend/",
    },
    {
      category: "Tools & DevOps",
      skills: [
        { name: "Docker", years: 2 },
        { name: "AWS", years: 3 },
        { name: "Git", years: 6 },
        { name: "Webpack", years: 3 },
        { name: "Jest", years: 3 },
      ],
      icon: <Hammer className="w-4 h-4" />,
      command: "devops/",
    },
    {
      category: "Design",
      skills: [
        { name: "Figma", years: 2 },
        { name: "UI/UX", years: 4 },
        { name: "Responsive Design", years: 5 },
        { name: "Accessibility", years: 3 },
      ],
      icon: <Palette className="w-4 h-4" />,
      command: "design/",
    },
  ];

  return (
    <section className="pb-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-balance mb-4">
            Skills & Expertise
          </h2>
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
                      {/* <h3 className="text-xl font-semibold">
                        {category.category}
                      </h3> */}
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
