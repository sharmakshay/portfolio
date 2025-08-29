import { TypingAnimation } from "@/components/typing-animation";
import { INTRO_TEXT } from "@/lib/consts";
import { ThemeToggle } from "../theme/theme-toggle";

interface IntroSectionProps {
  handleIntroComplete: () => void;
}

export const IntroSection = ({ handleIntroComplete }: IntroSectionProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <ThemeToggle />
      <div className="text-center">
        <TypingAnimation
          text={INTRO_TEXT}
          speed={150}
          onComplete={handleIntroComplete}
          className="text-6xl md:text-8xl font-mono font-bold text-foreground"
        />
      </div>
    </div>
  );
};
