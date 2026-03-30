import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { locations } from "@/lib/demo-data";

export default function AdminLocationsPage() {
  return (
    <div className="space-y-8">
      <AdminPageHeader
        badges={["2 branches active", "Extended evening hours", "Location pricing enabled"]}
        description="Keep location-specific hours, pricing, and contact details aligned with the guest experience."
        label="Locations"
        title="Manage branches and hours"
      />
      <div className="grid gap-4 md:grid-cols-2">
        {locations.map((location) => (
          <div
            key={location.id}
            className="premium-card p-5"
          >
            <div className="text-2xl">{location.name}</div>
            <p className="mt-3 text-sm leading-7 text-text-secondary">
              {location.address}, {location.city}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-text-secondary">
                {location.hours}
              </span>
              <span className="rounded-full border border-gold-400/20 bg-gold-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-gold-200">
                {location.phone}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
