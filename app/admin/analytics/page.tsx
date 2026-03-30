import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
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
      <AdminPageHeader
        badges={["Retention up 8.2%", "Weekend demand strongest", "Color mix leading"]}
        description="Read demand patterns, retention, and branch performance before adjusting staffing or campaigns."
        label="Analytics"
        title="Revenue and operational insights"
      />
      <RevenueChart />
      <div className="premium-card p-8">
        <h2 className="text-3xl">Busiest hour heatmap</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-text-secondary">
          Darker cells represent higher booking concentration, helping the floor team prepare for
          arrivals and premium upsell windows.
        </p>
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
