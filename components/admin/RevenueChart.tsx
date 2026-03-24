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
    <div className="premium-card h-[360px] p-6">
      <div className="mb-6">
        <div className="text-sm uppercase tracking-[0.16em] text-gold-300">Revenue</div>
        <h2 className="mt-3 text-3xl">Revenue by period</h2>
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
