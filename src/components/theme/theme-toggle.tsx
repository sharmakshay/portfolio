"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme/theme-provider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "system") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("system");
    }
  };

  const getIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="h-5 w-5" />;
      case "dark":
        return <Moon className="h-5 w-5" />;
      default:
        return <Monitor className="h-5 w-5" />;
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-accent transition-colors duration-200 shadow-lg"
      aria-label={`Switch to ${theme === "system" ? "light" : theme === "light" ? "dark" : "system"} mode`}
    >
      {getIcon()}
    </button>
  );
}
