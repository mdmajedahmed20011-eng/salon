import { loyaltyHistory } from "@/lib/demo-data";

export default function DashboardLoyaltyPage() {
  return (
    <div className="space-y-8">
      <div className="premium-card p-8">
        <p className="section-label">Loyalty club</p>
        <h1 className="text-5xl">Points, perks, and rewards</h1>
        <div className="mt-8 h-3 rounded-full bg-white/10">
          <div className="h-full w-[64%] rounded-full bg-gold-400" />
        </div>
        <p className="mt-4 text-sm text-text-secondary">3,240 points earned • 1,760 to Gold tier</p>
      </div>
      <div className="premium-card p-8">
        <h2 className="text-3xl">Points history</h2>
        <div className="mt-6 space-y-4">
          {loyaltyHistory.map((entry) => (
            <div
              key={entry.id}
              className="flex flex-col gap-3 rounded-[24px] border border-white/10 bg-white/[0.03] p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <div className="text-lg">{entry.description}</div>
                <div className="text-sm text-text-secondary">{entry.dateLabel}</div>
              </div>
              <div className={`text-lg ${entry.points > 0 ? "text-success" : "text-rose-400"}`}>
                {entry.points > 0 ? "+" : ""}
                {entry.points} pts
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
