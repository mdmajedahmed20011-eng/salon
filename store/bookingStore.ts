"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface BookingState {
  locationId: string;
  serviceIds: string[];
  stylistId?: string;
  date?: string;
  time?: string;
  couponCode?: string;
  usePoints: boolean;
  notes: string;
  setLocation: (locationId: string) => void;
  toggleService: (serviceId: string) => void;
  setStylist: (stylistId: string) => void;
  setDateTime: (date: string, time?: string) => void;
  setCouponCode: (code: string) => void;
  setUsePoints: (usePoints: boolean) => void;
  setNotes: (notes: string) => void;
  reset: () => void;
}

const initialState = {
  locationId: "loc-gulshan",
  serviceIds: [],
  stylistId: undefined,
  date: undefined,
  time: undefined,
  couponCode: undefined,
  usePoints: false,
  notes: "",
};

export const useBookingStore = create<BookingState>()(
  persist(
    (set) => ({
      ...initialState,
      setLocation: (locationId) => set({ locationId }),
      toggleService: (serviceId) =>
        set((state) => ({
          serviceIds: state.serviceIds.includes(serviceId)
            ? state.serviceIds.filter((id) => id !== serviceId)
            : [...state.serviceIds, serviceId],
        })),
      setStylist: (stylistId) => set({ stylistId }),
      setDateTime: (date, time) => set({ date, time }),
      setCouponCode: (couponCode) => set({ couponCode }),
      setUsePoints: (usePoints) => set({ usePoints }),
      setNotes: (notes) => set({ notes }),
      reset: () => set(initialState),
    }),
    {
      name: "luxesalon-booking",
    },
  ),
);
