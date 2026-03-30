"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const ranges = ["Day", "Week", "Month", "Year"] as const;

const data = [
  { label: "Mon", revenue: 120000 },
  { label: "Tue", revenue: 138000 },
  { label: "Wed", revenue: 126000 },
  { label: "Thu", revenue: 148000 },
  { label: "Fri", revenue: 164000 },
  { label: "Sat", revenue: 181000 },
  { label: "Sun", revenue: 152000 },
];

export function RevenueChart() {
  return (
    <div className="premium-card h-[420px] p-6">
      <div className="mb-6 flex flex-col gap-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="text-sm uppercase tracking-[0.16em] text-gold-300">Revenue</div>
            <h2 className="mt-3 text-3xl">Revenue by period</h2>
            <p className="mt-2 text-sm leading-6 text-text-secondary">
              Premium service revenue across the current booking window.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {ranges.map((range, index) => (
              <button
                key={range}
                className={`rounded-full border px-3 py-2 text-xs uppercase tracking-[0.14em] transition ${
                  index === 1
                    ? "border-gold-400/25 bg-gold-400/10 text-gold-200"
                    : "border-white/10 bg-white/[0.03] text-text-secondary hover:text-text-primary"
                }`}
                type="button"
              >
                {range}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { label: "Net revenue", value: "BDT 1.03M" },
            { label: "Color services share", value: "38%" },
            { label: "Returning clients", value: "72%" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-[20px] border border-white/10 bg-white/[0.03] px-4 py-3"
            >
              <div className="text-[11px] uppercase tracking-[0.14em] text-text-secondary">
                {item.label}
              </div>
              <div className="mt-2 text-lg text-text-primary">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
      <ResponsiveContainer height="100%" width="100%">
        <LineChart data={data}>
          <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
          <XAxis dataKey="label" stroke="#A89B8A" />
          <YAxis stroke="#A89B8A" />
          <Tooltip
            contentStyle={{
              background: "#111111",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 16,
              color: "#F5F0E8",
            }}
          />
          <Line
            dataKey="revenue"
            dot={{ fill: "#F0B429" }}
            stroke="#F0B429"
            strokeWidth={3}
            type="monotone"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
