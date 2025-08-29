"use client";

import { Terminal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PROJECT_DATA } from "@/lib/consts";

export function ProjectsSection() {
  return (
    <section className="py-20 px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-balance mb-4">
            Featured Projects
          </h2>
          <div className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm border border-primary/20 rounded-lg px-4 py-2 font-mono text-sm">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">~/projects</span>
            <span className="text-primary">$</span>
            <span className="text-foreground">ls -la featured/</span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECT_DATA.map((project, index) => (
            <Card
              key={project.title}
              className="group relative overflow-hidden border border-primary/20 bg-background/60 backdrop-blur-sm hover:bg-background/80 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
            >
              <CardContent className="p-8 relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-primary">
                    <project.icon className="w-5 h-5" />
                    <span className="font-mono text-xs">
                      project_{index + 1}
                    </span>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                </div>

                <div className="w-12 h-1 bg-primary rounded-full mb-6 group-hover:w-20 transition-all duration-300" />
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="bg-muted/50 rounded-md p-3 mb-6 font-mono text-sm border border-primary/10">
                  <div className="flex items-center gap-2 text-muted-foreground mb-1">
                    <span className="text-primary">$</span>
                    <span>{project.command}</span>
                  </div>
                  <div className="text-green-400 text-xs">
                    ✓ Build completed successfully
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs px-3 py-1 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-200 font-mono"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-primary/10 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground w-full font-mono"
                >
                  ./view_project.sh
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
