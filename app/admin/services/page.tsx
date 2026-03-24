import { ServiceForm } from "@/components/admin/ServiceForm";
import { services } from "@/lib/demo-data";

export default function AdminServicesPage() {
  return (
    <div className="space-y-8">
      <div className="premium-card p-8">
        <p className="section-label">Services</p>
        <h1 className="text-5xl">Manage the service menu</h1>
      </div>
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
                <div className="text-sm text-text-secondary">{service.duration} min</div>
              </div>
              <div className="text-sm text-gold-300">{service.basePrice} BDT</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
