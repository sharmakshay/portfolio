"use client";

import { useEffect, useState } from "react";

interface TypingAnimationProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
  className?: string;
}

export function TypingAnimation({
  text,
  speed = 100,
  onComplete,
  className = "",
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      setHasStarted(true);
    }, 1500); // 1.5 second delay

    return () => clearTimeout(initialDelay);
  }, []);

  useEffect(() => {
    if (hasStarted && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (hasStarted && currentIndex >= text.length && onComplete) {
      const timeout = setTimeout(onComplete, 1000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, onComplete, hasStarted]);

  return (
    <span className={className}>
      {displayedText}
      <span
        className={`transition-opacity duration-100 ${showCursor ? "opacity-100" : "opacity-0"}`}
      >
        |
      </span>
    </span>
  );
}
