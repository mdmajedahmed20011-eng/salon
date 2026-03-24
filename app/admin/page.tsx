import { BookingCalendar } from "@/components/admin/BookingCalendar";
import { KPICard } from "@/components/admin/KPICard";
import { RevenueChart } from "@/components/admin/RevenueChart";
import { adminMetrics } from "@/lib/demo-data";

export default function AdminOverviewPage() {
  return (
    <div className="space-y-8">
      <div className="premium-card p-8">
        <p className="section-label">Admin overview</p>
        <h1 className="text-5xl">Salon performance at a glance</h1>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {adminMetrics.map((metric) => (
          <KPICard key={metric.id} metric={metric} />
        ))}
      </div>
      <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
        <RevenueChart />
        <BookingCalendar />
      </div>
    </div>
  );
}
