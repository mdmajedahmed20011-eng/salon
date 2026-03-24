"use client";

import { locations, services, stylists } from "@/lib/demo-data";
import { formatCurrency } from "@/lib/utils";
import { useBookingStore } from "@/store/bookingStore";

export function useBooking() {
  const booking = useBookingStore();
  const selectedServices = services.filter((service) => booking.serviceIds.includes(service.id));
  const selectedLocation = locations.find((location) => location.id === booking.locationId);
  const selectedStylist = stylists.find((stylist) => stylist.id === booking.stylistId);
  const subtotal = selectedServices.reduce((sum, service) => sum + service.basePrice, 0);
  const totalDuration = selectedServices.reduce((sum, service) => sum + service.duration, 0);
  const stylistModifier = selectedStylist?.priceModifier ?? 0;
  const discount = booking.couponCode ? 500 : 0;
  const pointsDiscount = booking.usePoints ? 50 : 0;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + stylistModifier + tax - discount - pointsDiscount;

  return {
    booking,
    selectedServices,
    selectedLocation,
    selectedStylist,
    subtotal,
    totalDuration,
    stylistModifier,
    discount,
    pointsDiscount,
    tax,
    total,
    formattedTotal: formatCurrency(Math.max(total, 0)),
  };
}
