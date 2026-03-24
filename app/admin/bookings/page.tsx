import { BookingCalendar } from "@/components/admin/BookingCalendar";

export default function AdminBookingsPage() {
  return (
    <div className="space-y-8">
      <div className="premium-card p-8">
        <p className="section-label">Bookings</p>
        <h1 className="text-5xl">Calendar and list views</h1>
      </div>
      <BookingCalendar />
    </div>
  );
}
