"use client";

import { loyaltyHistory } from "@/lib/demo-data";

export function useLoyalty() {
  return {
    points: 3240,
    tier: "Silver",
    history: loyaltyHistory,
  };
}
