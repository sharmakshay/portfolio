import { Github, Linkedin, Mail } from "lucide-react";

export function AboutSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8">
      <div className="w-1/4 mx-auto">
        <div className="bg-card border border-border rounded-xl backdrop-blur-sm relative overflow-hidden shadow-2xl">
          {/* Terminal header for dev aesthetic */}
          <div className="h-8 bg-muted/50 border-b border-border flex items-center px-4 gap-2">
            <div className="w-2 h-2 rounded-full bg-destructive"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-xs font-mono text-muted-foreground ml-2">
              business_card.dev
            </span>
          </div>

          <div className="p-6">
            <div className="flex items-center gap-6">
              {/* Profile Section */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full border border-primary/20 flex items-center justify-center shadow-lg">
                    <span className="text-xl font-mono font-bold text-primary">
                      AC
                    </span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-green-500 text-white rounded-full w-4 h-4 flex items-center justify-center shadow-lg">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Contact & Info Section */}
              <div className="flex-1 space-y-3">
                <div>
                  <p className="text-xs text-muted-foreground font-mono">
                    $ whoami --verbose
                  </p>
                  <h1 className="text-2xl font-bold text-foreground">
                    Akshay Sharma
                  </h1>
                  <p className="text-primary font-medium">Senior Engineer</p>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <div className="flex gap-2">
                    <a
                      href="https://github.com/sharmakshay"
                      className="p-2 bg-muted/50 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-200 hover:scale-105 border border-border/50"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/sharmakshay/"
                      className="p-2 bg-muted/50 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-200 hover:scale-105 border border-border/50"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="mailto:mail@sharmakshay.com"
                      className="p-2 bg-muted/50 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-200 hover:scale-105 border border-border/50"
                      aria-label="Email"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                    <button
                      type="button"
                      onClick={() =>
                        document
                          .getElementById("projects")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="ml-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 duration-200 text-sm"
                    >
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
