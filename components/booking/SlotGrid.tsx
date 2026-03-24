"use client";

interface SlotGridProps {
  selectedTime?: string;
  slots: string[];
  onSelect: (slot: string) => void;
}

export function SlotGrid({ selectedTime, slots, onSelect }: SlotGridProps) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {slots.map((slot) => {
        const selected = selectedTime === slot;

        return (
          <button
            key={slot}
            className={`rounded-full border px-4 py-3 text-sm font-medium transition ${
              selected
                ? "border-gold-400 bg-gold-400 text-black"
                : "border-white/10 bg-white/[0.03] text-text-primary hover:border-gold-400/20"
            }`}
            onClick={() => onSelect(slot)}
            type="button"
          >
            {slot}
          </button>
        );
      })}
    </div>
  );
}
