import { CustomerDrawer } from "@/components/admin/CustomerDrawer";

export default function AdminCustomersPage() {
  return (
    <div className="grid gap-8 xl:grid-cols-[1fr_0.8fr]">
      <div className="premium-card p-8">
        <p className="section-label">Customers</p>
        <h1 className="text-5xl">Client database</h1>
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
  );
}
