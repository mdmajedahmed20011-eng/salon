"use client";

import Link from "next/link";

import { Button } from "@/components/shared/Button";
import { useAvailability } from "@/hooks/useAvailability";
import { useBookingStore } from "@/store/bookingStore";

import { SlotGrid } from "./SlotGrid";

export function DateTimePicker() {
  const { days, slots, lowAvailability } = useAvailability();
  const { date, time, setDateTime } = useBookingStore();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-5xl">Pick your perfect time</h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-text-secondary">
          Live slot availability updates in real time, so the times you see reflect the latest
          booking state.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="premium-card p-6">
          <h2 className="text-3xl">Calendar</h2>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {days.map((day) => {
              const selected = date === day.value;

              return (
                <button
                  key={day.value}
                  className={`rounded-[24px] border p-4 text-left transition ${
                    selected
                      ? "border-gold-400 bg-gold-400 text-black"
                      : "border-white/10 bg-white/[0.03] hover:border-gold-400/20"
                  }`}
                  onClick={() => setDateTime(day.value, time)}
                  type="button"
                >
                  <div className="text-xs uppercase tracking-[0.14em]">{day.label}</div>
                  <div className="mt-2 text-3xl">{day.day}</div>
                  <div className="text-sm">{day.month}</div>
                </button>
              );
            })}
          </div>
        </div>
        <div className="premium-card p-6">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-3xl">Available slots</h2>
            {lowAvailability ? (
              <div className="rounded-full border border-warning/30 bg-warning/10 px-3 py-1 text-xs uppercase tracking-[0.14em] text-warning">
                Only 2 slots left today
              </div>
            ) : null}
          </div>
          <div className="mt-6">
            <SlotGrid
              onSelect={(slot) => setDateTime(date ?? days[0].value, slot)}
              selectedTime={time}
              slots={slots}
            />
          </div>
          <div className="mt-8 flex justify-end">
            <Button asChild disabled={!date || !time}>
              <Link href="/book/confirm">Continue</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
