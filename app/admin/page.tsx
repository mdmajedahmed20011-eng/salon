import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { BookingCalendar } from "@/components/admin/BookingCalendar";
import { KPICard } from "@/components/admin/KPICard";
import { RevenueChart } from "@/components/admin/RevenueChart";
import { Button } from "@/components/shared/Button";
import { adminMetrics } from "@/lib/demo-data";

export default function AdminOverviewPage() {
  return (
    <div className="space-y-8">
      <AdminPageHeader
        actions={
          <>
            <Button size="sm" variant="secondary">
              Export report
            </Button>
            <Button size="sm">Add booking</Button>
          </>
        }
        badges={["Live revenue sync", "2 branches active", "4 staff on duty"]}
        description="Track revenue, staffing, arrivals, and customer momentum from one premium control room."
        label="Admin overview"
        title="Salon performance at a glance"
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {adminMetrics.map((metric) => (
          <KPICard key={metric.id} metric={metric} />
        ))}
      </div>
      <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
        <RevenueChart />
        <BookingCalendar />
      </div>
      <div className="grid gap-4 lg:grid-cols-[1fr_0.9fr]">
        <div className="premium-card p-6">
          <div className="text-sm uppercase tracking-[0.16em] text-gold-300">Top stylists</div>
          <div className="mt-6 space-y-4">
            {[
              "Amira Rahman • 12 bookings • BDT 64,200",
              "Nabila Haque • 9 bookings • BDT 38,400",
              "Farhana Yasmin • 8 bookings • BDT 57,800",
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-center justify-between rounded-[24px] border border-white/10 bg-white/[0.03] px-4 py-4"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/20 bg-gold-400/10 text-sm font-semibold text-gold-300">
                    0{index + 1}
                  </div>
                  <span className="text-sm text-text-primary">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="premium-card p-6">
          <div className="text-sm uppercase tracking-[0.16em] text-gold-300">Action items</div>
          <div className="mt-6 space-y-4">
            {[
              "3 pending review replies from VIP guests",
              "2 peak-hour slots nearly sold out tomorrow",
              "Gulshan branch color inventory due for restock",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[24px] border border-white/10 bg-black/20 px-4 py-4 text-sm text-text-secondary"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
