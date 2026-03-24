import { RevenueChart } from "@/components/admin/RevenueChart";

export default function AdminAnalyticsPage() {
  const heatClasses = [
    "bg-gold-400/20",
    "bg-gold-400/25",
    "bg-gold-400/30",
    "bg-gold-400/35",
    "bg-gold-400/40",
    "bg-gold-400/45",
  ];

  return (
    <div className="space-y-8">
      <div className="premium-card p-8">
        <p className="section-label">Analytics</p>
        <h1 className="text-5xl">Revenue and operational insights</h1>
      </div>
      <RevenueChart />
      <div className="premium-card p-8">
        <h2 className="text-3xl">Busiest hour heatmap</h2>
        <div className="mt-6 grid grid-cols-6 gap-2 sm:grid-cols-8 lg:grid-cols-12">
          {Array.from({ length: 24 }).map((_, index) => (
            <div
              key={index}
              className={`aspect-square rounded-xl ${heatClasses[index % heatClasses.length]}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
