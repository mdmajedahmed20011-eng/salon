import { type ClassValue, clsx } from "clsx";
import { format } from "date-fns";
import { twMerge } from "tailwind-merge";

import type { Tier } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-BD", {
    style: "currency",
    currency: "BDT",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatDateLabel(date: Date | string) {
  return format(typeof date === "string" ? new Date(date) : date, "MMMM d, yyyy");
}

export function getTier(points: number): Tier {
  if (points >= 10000) {
    return "Platinum";
  }

  if (points >= 5000) {
    return "Gold";
  }

  if (points >= 1000) {
    return "Silver";
  }

  return "Bronze";
}

export function getNextTier(points: number) {
  if (points < 1000) {
    return { tier: "Silver" as const, target: 1000 };
  }

  if (points < 5000) {
    return { tier: "Gold" as const, target: 5000 };
  }

  if (points < 10000) {
    return { tier: "Platinum" as const, target: 10000 };
  }

  return { tier: "Platinum" as const, target: 10000 };
}

export const sectionMotion = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
} as const;

export const heroMotion = (delay = 0) =>
  ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }) as const;

export function buildBlurDataURL(hex = "111111") {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <rect width="24" height="24" fill="#${hex}" />
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}
