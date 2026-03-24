"use client";

import Link from "next/link";

import { Button } from "@/components/shared/Button";
import { locations, services } from "@/lib/demo-data";
import { formatCurrency } from "@/lib/utils";
import { useBookingStore } from "@/store/bookingStore";

export function ServiceSelector() {
  const { locationId, serviceIds, setLocation, toggleService } = useBookingStore();
  const selectedServices = services.filter((service) => serviceIds.includes(service.id));
  const total = selectedServices.reduce((sum, service) => sum + service.basePrice, 0);
  const duration = selectedServices.reduce((sum, service) => sum + service.duration, 0);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-5xl">What would you like today?</h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-text-secondary">
          Start by selecting a branch and the services you want to combine into one visit.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        {locations.map((location) => (
          <button
            key={location.id}
            className={`rounded-full border px-4 py-2 text-sm uppercase tracking-[0.14em] transition ${
              locationId === location.id
                ? "border-gold-400 bg-gold-400 text-black"
                : "border-white/10 text-text-secondary hover:text-text-primary"
            }`}
            onClick={() => setLocation(location.id)}
            type="button"
          >
            {location.name}
          </button>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => {
          const selected = serviceIds.includes(service.id);

          return (
            <button
              key={service.id}
              className={`premium-card p-6 text-left transition ${
                selected ? "border-gold-400/40 bg-gold-400/5" : "hover:border-gold-400/20"
              }`}
              onClick={() => toggleService(service.id)}
              type="button"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.14em] text-text-secondary">
                    {service.duration} min
                  </div>
                  <h2 className="mt-3 text-3xl">{service.name}</h2>
                </div>
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-full border text-xs ${
                    selected
                      ? "border-gold-400 bg-gold-400 text-black"
                      : "border-white/10 text-text-secondary"
                  }`}
                >
                  {selected ? "✓" : "+"}
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-text-secondary">{service.description}</p>
              <div className="mt-6 text-lg font-semibold text-gold-300">
                {formatCurrency(service.basePrice)}
              </div>
            </button>
          );
        })}
      </div>
      <div className="sticky bottom-4 rounded-[28px] border border-gold-400/20 bg-black/80 px-5 py-4 backdrop-blur">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-text-secondary">
            <span className="text-text-primary">{selectedServices.length} services selected</span> •{" "}
            {duration} min • {formatCurrency(total)}
          </div>
          <Button asChild disabled={selectedServices.length === 0}>
            <Link href="/book/stylist">Continue</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
