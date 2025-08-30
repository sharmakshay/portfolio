"use client";

import { GitBranch, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section className="py-20 px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-balance mb-4">Contact</h2>
          <div className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm border border-primary/20 rounded-lg px-4 py-2 font-mono text-sm">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">~/contact</span>
            <span className="text-primary">$</span>
            <span className="text-foreground">./connect.sh</span>
          </div>
        </div>
        <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl">
          Ready to bring your ideas to life? I'd love to hear about your project
          and discuss how we can create something amazing together.
        </p>

        <div className="bg-background/60 backdrop-blur-sm border border-primary/20 rounded-lg p-6 mb-8 font-mono text-sm text-left max-w-2xl">
          <div className="flex items-center gap-2 mb-4 text-muted-foreground">
            <GitBranch className="w-4 h-4 text-primary" />
            <span>Initializing collaboration...</span>
          </div>
          <div className="space-y-2 text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Skills loaded successfully</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Portfolio compiled</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Ready for new projects</span>
            </div>
            <div className="flex items-center gap-2 text-primary animate-pulse">
              <span>→</span>
              <span>Awaiting connection...</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl justify-end">
          <a href="mailto:mail@sharmakshay.com">
            <Button size="lg" className="text-md px-8 py-3 font-mono">
              ./send_message.sh
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
