import { Gem } from "lucide-react";

import { cn } from "@/lib/utils";
import type { Tier } from "@/types";

const tierClasses: Record<Tier, string> = {
  Bronze: "border-amber-600/30 bg-amber-600/10 text-amber-200",
  Silver: "border-slate-500/40 bg-slate-500/10 text-slate-200",
  Gold: "border-gold-400/40 bg-gold-400/10 text-gold-300",
  Platinum: "border-cyan-300/40 bg-cyan-300/10 text-cyan-200",
};

interface LoyaltyBadgeProps {
  tier: Tier;
  className?: string;
}

export function LoyaltyBadge({ tier, className }: LoyaltyBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]",
        tierClasses[tier],
        className,
      )}
    >
      <Gem className="h-3.5 w-3.5" />
      {tier}
    </span>
  );
}
