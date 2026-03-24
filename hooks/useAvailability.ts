"use client";

import { addDays, format } from "date-fns";
import { useMemo } from "react";

import { availableSlots } from "@/lib/demo-data";

export function useAvailability() {
  const days = useMemo(
    () =>
      Array.from({ length: 10 }).map((_, index) => {
        const date = addDays(new Date(), index);

        return {
          value: format(date, "yyyy-MM-dd"),
          label: format(date, "EEE"),
          day: format(date, "d"),
          month: format(date, "MMM"),
        };
      }),
    [],
  );

  return {
    days,
    slots: availableSlots,
    isLoading: false,
    lowAvailability: availableSlots.length < 3,
  };
}
