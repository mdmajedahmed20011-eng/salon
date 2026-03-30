import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { ServiceForm } from "@/components/admin/ServiceForm";
import { services } from "@/lib/demo-data";

export default function AdminServicesPage() {
  return (
    <div className="space-y-8">
      <AdminPageHeader
        badges={["18 active services", "6 featured treatments", "2 menu updates pending"]}
        description="Shape the premium menu, review pricing, and keep high-margin services surfaced across the booking journey."
        label="Services"
        title="Manage the service menu"
      />
      <div className="premium-card p-8">
        <ServiceForm />
      </div>
      <div className="premium-card p-8">
        <h2 className="text-3xl">Current services</h2>
        <div className="mt-6 space-y-4">
          {services.slice(0, 6).map((service) => (
            <div
              key={service.id}
              className="flex flex-col gap-3 rounded-[24px] border border-white/10 bg-white/[0.03] p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <div className="text-lg">{service.name}</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-text-secondary">
                    {service.duration} min
                  </span>
                  <span className="rounded-full border border-gold-400/20 bg-gold-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-gold-200">
                    {service.categorySlug.replace("-", " ")}
                  </span>
                </div>
              </div>
              <div className="text-sm text-gold-300">{service.basePrice} BDT</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
