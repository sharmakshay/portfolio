import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getShortDate(date: string): string {
  const dateObj = new Date(date);
  const month = dateObj.toLocaleString("en-US", { month: "short" });
  const year = dateObj.getFullYear().toString().slice(-2);
  return `${month}'${year}`;
}
