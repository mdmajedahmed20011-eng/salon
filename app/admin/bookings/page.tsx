import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { BookingCalendar } from "@/components/admin/BookingCalendar";

export default function AdminBookingsPage() {
  return (
    <div className="space-y-8">
      <AdminPageHeader
        badges={["12 arrivals before 2 PM", "4 reschedule requests", "Realtime sync active"]}
        description="Manage the live appointment board, monitor arrivals, and handle schedule changes without losing context."
        label="Bookings"
        title="Calendar and list views"
      />
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { label: "Confirmed today", value: "48" },
          { label: "Pending approval", value: "6" },
          { label: "Reschedules", value: "4" },
        ].map((item) => (
          <div key={item.label} className="premium-card p-5">
            <div className="text-xs uppercase tracking-[0.14em] text-text-secondary">
              {item.label}
            </div>
            <div className="mt-3 text-3xl">{item.value}</div>
          </div>
        ))}
      </div>
      <BookingCalendar />
    </div>
  );
}
