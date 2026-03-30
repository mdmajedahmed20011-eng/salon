import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { StaffForm } from "@/components/admin/StaffForm";
import { stylists } from "@/lib/demo-data";

export default function AdminStaffPage() {
  return (
    <div className="space-y-8">
      <AdminPageHeader
        badges={["8 active artists", "3 specialists in Gulshan", "2 leave requests"]}
        description="Review availability, seniority, and service alignment before you open more peak-hour inventory."
        label="Staff"
        title="Team management and availability"
      />
      <div className="premium-card p-8">
        <StaffForm />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {stylists.slice(0, 4).map((stylist) => (
          <div
            key={stylist.id}
            className="premium-card p-6"
          >
            <div className="text-2xl">{stylist.name}</div>
            <p className="mt-2 text-sm text-text-secondary">{stylist.title}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-text-secondary">
                {stylist.experience} years
              </span>
              <span className="rounded-full border border-gold-400/20 bg-gold-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-gold-200">
                {stylist.rating} rating
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
