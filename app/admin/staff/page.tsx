import { StaffForm } from "@/components/admin/StaffForm";
import { stylists } from "@/lib/demo-data";

export default function AdminStaffPage() {
  return (
    <div className="space-y-8">
      <div className="premium-card p-8">
        <p className="section-label">Staff</p>
        <h1 className="text-5xl">Team management and availability</h1>
      </div>
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
          </div>
        ))}
      </div>
    </div>
  );
}
