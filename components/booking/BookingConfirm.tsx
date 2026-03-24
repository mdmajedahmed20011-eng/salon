"use client";

import Link from "next/link";

import { BookingStatusBadge } from "@/components/shared/BookingStatusBadge";
import { Button } from "@/components/shared/Button";
import { CouponInput } from "@/components/forms/CouponInput";
import { useBooking } from "@/hooks/useBooking";
import { useBookingStore } from "@/store/bookingStore";

export function BookingConfirm() {
  const { booking, selectedLocation, selectedServices, selectedStylist, subtotal, stylistModifier, discount, pointsDiscount, tax, formattedTotal } =
    useBooking();
  const { setCouponCode, setNotes, setUsePoints } = useBookingStore();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-5xl">Confirm and pay</h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-text-secondary">
          Review your services, apply any available savings, and move through a polished checkout.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div className="space-y-6">
          <div className="premium-card p-6">
            <h2 className="text-3xl">Order summary</h2>
            <div className="mt-6 space-y-4">
              {selectedServices.map((service) => (
                <div
                  key={service.id}
                  className="flex items-center justify-between gap-4 rounded-[24px] border border-white/10 bg-white/[0.03] px-4 py-4"
                >
                  <div>
                    <div className="text-lg">{service.name}</div>
                    <div className="text-sm text-text-secondary">{service.duration} min</div>
                  </div>
                  <div className="text-sm text-gold-300">{service.basePrice} BDT</div>
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
                <div className="text-xs uppercase tracking-[0.14em] text-text-secondary">
                  Stylist
                </div>
                <div className="mt-2 text-lg">{selectedStylist?.name ?? "Not selected"}</div>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
                <div className="text-xs uppercase tracking-[0.14em] text-text-secondary">
                  Location
                </div>
                <div className="mt-2 text-lg">{selectedLocation?.name ?? "Not selected"}</div>
              </div>
            </div>
          </div>

          <div className="premium-card p-6">
            <h2 className="text-3xl">Savings and preferences</h2>
            <div className="mt-6">
              <CouponInput onApply={(code) => setCouponCode(code)} />
            </div>
            <label className="mt-6 flex items-center gap-3 rounded-[24px] border border-white/10 bg-white/[0.03] p-4 text-sm text-text-secondary">
              <input
                className="h-4 w-4 accent-gold-400"
                onChange={(event) => setUsePoints(event.target.checked)}
                type="checkbox"
              />
              Use 500 points for a 50 BDT discount
            </label>
            <textarea
              className="mt-6 min-h-32 w-full rounded-[24px] border border-white/10 bg-background-tertiary px-4 py-4 text-text-primary outline-none transition focus:border-gold-400/60 focus:ring-2 focus:ring-gold-400/30"
              onChange={(event) => setNotes(event.target.value)}
              placeholder="Special requests or notes for your stylist"
              value={booking.notes}
            />
          </div>
        </div>

        <div className="premium-card p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl">Payment</h2>
            <BookingStatusBadge status="PENDING" />
          </div>
          <div className="mt-6 rounded-[28px] border border-white/10 bg-black/30 p-5">
            <div className="text-sm uppercase tracking-[0.16em] text-text-secondary">
              Secure card element
            </div>
            <div className="mt-5 h-16 rounded-[20px] border border-white/10 bg-white/[0.03]" />
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="h-12 rounded-[20px] border border-white/10 bg-white/[0.03]" />
              <div className="h-12 rounded-[20px] border border-white/10 bg-white/[0.03]" />
            </div>
          </div>
          <div className="mt-6 space-y-3 text-sm text-text-secondary">
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span>{subtotal} BDT</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Stylist modifier</span>
              <span>{stylistModifier} BDT</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Coupon discount</span>
              <span>- {discount} BDT</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Loyalty points</span>
              <span>- {pointsDiscount} BDT</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Tax</span>
              <span>{tax} BDT</span>
            </div>
            <div className="border-t border-white/10 pt-4">
              <div className="flex items-center justify-between text-lg font-semibold text-gold-300">
                <span>Total</span>
                <span>{formattedTotal}</span>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <Button asChild className="w-full">
              <Link href="/book/success">Confirm and Pay</Link>
            </Button>
          </div>
          <p className="mt-4 text-xs leading-6 text-text-secondary">
            By booking you agree to our cancellation policy and reminder notifications.
          </p>
        </div>
      </div>
    </div>
  );
}
