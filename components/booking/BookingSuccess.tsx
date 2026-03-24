"use client";

import Link from "next/link";

import { Button } from "@/components/shared/Button";
import { useBooking } from "@/hooks/useBooking";

export function BookingSuccess() {
  const { selectedLocation, selectedServices, selectedStylist, booking, formattedTotal } = useBooking();

  return (
    <div className="mx-auto max-w-3xl space-y-8 text-center">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-gold-400/20 bg-gold-400/10 text-4xl text-gold-300">
        ✓
      </div>
      <div>
        <p className="section-label justify-center">Booking complete</p>
        <h1 className="text-6xl">You&apos;re all booked</h1>
        <p className="mt-5 text-base leading-8 text-text-secondary">
          Your confirmation email, SMS, and WhatsApp reminder flow is ready to go once the live
          integrations are connected.
        </p>
      </div>
      <div className="premium-card p-8 text-left">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <div className="text-xs uppercase tracking-[0.14em] text-text-secondary">
              Reference
            </div>
            <div className="mt-2 text-xl text-gold-300">LUXE-2026-0412</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.14em] text-text-secondary">
              Amount paid
            </div>
            <div className="mt-2 text-xl text-gold-300">{formattedTotal}</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.14em] text-text-secondary">
              Services
            </div>
            <div className="mt-2 text-lg">{selectedServices.map((service) => service.name).join(", ")}</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.14em] text-text-secondary">
              Stylist
            </div>
            <div className="mt-2 text-lg">{selectedStylist?.name ?? "Assigned automatically"}</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.14em] text-text-secondary">
              Time
            </div>
            <div className="mt-2 text-lg">
              {booking.date ?? "Date pending"} at {booking.time ?? "Time pending"}
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.14em] text-text-secondary">
              Location
            </div>
            <div className="mt-2 text-lg">{selectedLocation?.name ?? "Branch pending"}</div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        <Button asChild>
          <Link href="/dashboard/bookings">View My Bookings</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href="/book">Book Another Service</Link>
        </Button>
      </div>
    </div>
  );
}
