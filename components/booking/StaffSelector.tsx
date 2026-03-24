"use client";

import Link from "next/link";

import { Button } from "@/components/shared/Button";
import { StarRating } from "@/components/shared/StarRating";
import { stylists } from "@/lib/demo-data";
import { useBookingStore } from "@/store/bookingStore";

export function StaffSelector() {
  const { stylistId, setStylist } = useBookingStore();

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="text-5xl">Choose your artist</h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-text-secondary">
            Select a stylist or let the system assign the best available match for your services.
          </p>
        </div>
        <Button onClick={() => setStylist(stylists.find((stylist) => stylist.availableToday)?.id ?? stylists[0].id)} variant="secondary">
          No preference
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {stylists.map((stylist) => {
          const selected = stylist.id === stylistId;

          return (
            <button
              key={stylist.id}
              className={`premium-card p-6 text-left transition ${
                selected ? "border-gold-400/40 bg-gold-400/5" : "hover:border-gold-400/20"
              }`}
              onClick={() => setStylist(stylist.id)}
              type="button"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-3xl">{stylist.name}</h2>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-gold-300">
                    {stylist.title}
                  </p>
                </div>
                <div
                  className={`rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.14em] ${
                    stylist.availableToday
                      ? "border border-success/30 bg-success/10 text-success"
                      : "border border-white/10 text-text-secondary"
                  }`}
                >
                  {stylist.availableToday ? "Available today" : "Next available soon"}
                </div>
              </div>
              <StarRating className="mt-4" rating={stylist.rating} />
              <p className="mt-4 text-sm leading-7 text-text-secondary">{stylist.bio}</p>
              <div className="mt-5 flex items-center justify-between">
                <div className="text-sm text-text-secondary">+ {stylist.priceModifier} BDT</div>
                <div
                  className={`rounded-full border px-3 py-1 text-xs uppercase tracking-[0.14em] ${
                    selected
                      ? "border-gold-400 bg-gold-400 text-black"
                      : "border-white/10 text-text-secondary"
                  }`}
                >
                  {selected ? "Selected" : "Select"}
                </div>
              </div>
            </button>
          );
        })}
      </div>
      <div className="flex justify-end">
        <Button asChild disabled={!stylistId}>
          <Link href="/book/datetime">Continue</Link>
        </Button>
      </div>
    </div>
  );
}
