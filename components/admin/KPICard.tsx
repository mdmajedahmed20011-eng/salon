import { TrendingDown, TrendingUp } from "lucide-react";

import type { AdminMetric } from "@/types";

export function KPICard({ metric }: { metric: AdminMetric }) {
  return (
    <div className="premium-card p-6">
      <div className="text-sm uppercase tracking-[0.14em] text-text-secondary">{metric.label}</div>
      <div className="mt-4 flex items-end justify-between gap-4">
        <div className="text-4xl">{metric.value}</div>
        <div
          className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs uppercase tracking-[0.14em] ${
            metric.trend === "up"
              ? "border border-success/30 bg-success/10 text-success"
              : "border border-rose-400/30 bg-rose-400/10 text-rose-400"
          }`}
        >
          {metric.trend === "up" ? (
            <TrendingUp className="h-3.5 w-3.5" />
          ) : (
            <TrendingDown className="h-3.5 w-3.5" />
          )}
          {metric.delta}
        </div>
      </div>
    </div>
  );
}
