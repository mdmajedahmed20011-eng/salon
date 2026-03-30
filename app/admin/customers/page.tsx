import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { CustomerDrawer } from "@/components/admin/CustomerDrawer";

export default function AdminCustomersPage() {
  return (
    <div className="space-y-8">
      <AdminPageHeader
        badges={["320 active clients", "72% returning", "24 VIP guests"]}
        description="See who is spending, returning, and engaging most so the team can personalize every follow-up."
        label="Customers"
        title="Client database"
      />
      <div className="grid gap-8 xl:grid-cols-[1fr_0.8fr]">
        <div className="premium-card p-8">
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { label: "Active this month", value: "182" },
              { label: "Average spend", value: "BDT 5,780" },
              { label: "Loyalty redemptions", value: "36" },
            ].map((item) => (
              <div key={item.label} className="rounded-[24px] border border-white/10 bg-black/20 px-4 py-4">
                <div className="text-[11px] uppercase tracking-[0.14em] text-text-secondary">
                  {item.label}
                </div>
                <div className="mt-2 text-lg text-text-primary">{item.value}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 space-y-4">
            {[
              "Nadia Karim • 18 bookings • 84,300 BDT",
              "Tania Reza • 12 bookings • 63,100 BDT",
              "Sharmeen Hossain • 10 bookings • 58,700 BDT",
            ].map((customer) => (
              <div
                key={customer}
                className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 text-sm text-text-secondary"
              >
                {customer}
              </div>
            ))}
          </div>
        </div>
        <CustomerDrawer />
      </div>
    </div>
  );
}
