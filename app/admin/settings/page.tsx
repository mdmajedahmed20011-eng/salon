import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { Button } from "@/components/shared/Button";

export default function AdminSettingsPage() {
  return (
    <div className="space-y-8">
      <AdminPageHeader
        badges={["Brand tokens synced", "Booking rules editable", "Loyalty logic live"]}
        description="Tune the operating rules behind bookings, loyalty, and brand presentation without touching code."
        label="Settings"
        title="Salon configuration"
      />
      <div className="premium-card p-8">
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "Salon name",
            "Primary color",
            "Booking advance days",
            "Cancellation hours",
            "Loyalty points per dollar",
            "Tax rate",
          ].map((field) => (
            <div key={field}>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-text-secondary">
                {field}
              </label>
              <input
                className="w-full rounded-md border border-white/10 bg-background-tertiary px-4 py-3 text-text-primary outline-none transition focus:border-gold-400/40 focus:ring-2 focus:ring-gold-400/20"
                placeholder={field}
                type="text"
              />
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button size="sm" variant="secondary">
            Preview changes
          </Button>
          <Button size="sm">Save settings</Button>
        </div>
      </div>
    </div>
  );
}
