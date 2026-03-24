import { locations } from "@/lib/demo-data";

export default function AdminLocationsPage() {
  return (
    <div className="premium-card p-8">
      <p className="section-label">Locations</p>
      <h1 className="text-5xl">Manage branches and hours</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {locations.map((location) => (
          <div
            key={location.id}
            className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5"
          >
            <div className="text-2xl">{location.name}</div>
            <p className="mt-3 text-sm leading-7 text-text-secondary">
              {location.address}, {location.city}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
