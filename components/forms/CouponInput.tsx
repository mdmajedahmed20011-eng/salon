"use client";

import { useState } from "react";

import { Button } from "@/components/shared/Button";

interface CouponInputProps {
  onApply: (value: string) => void;
}

export function CouponInput({ onApply }: CouponInputProps) {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <input
        className="w-full rounded-md border border-white/10 bg-background-tertiary px-4 py-3 text-text-primary outline-none transition focus:border-gold-400/60 focus:ring-2 focus:ring-gold-400/30"
        onChange={(event) => setValue(event.target.value)}
        placeholder="Enter promo code"
        value={value}
      />
      <Button onClick={() => onApply(value)} type="button" variant="secondary">
        Apply
      </Button>
    </div>
  );
}
