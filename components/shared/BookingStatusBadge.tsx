import type { BookingStatus } from "@/types";
import { cn } from "@/lib/utils";

const styles: Record<BookingStatus, string> = {
  PENDING: "border border-warning/30 bg-warning/10 text-warning",
  CONFIRMED: "border border-info/30 bg-info/10 text-info",
  IN_PROGRESS: "border border-gold-400/30 bg-gold-400/10 text-gold-300",
  COMPLETED: "border border-success/30 bg-success/10 text-success",
  CANCELLED: "border border-error/30 bg-error/10 text-error",
  NO_SHOW: "border border-neutral-400/30 bg-neutral-400/10 text-neutral-200",
  RESCHEDULED: "border border-rose-400/30 bg-rose-400/10 text-rose-400",
};

interface BookingStatusBadgeProps {
  status: BookingStatus;
  className?: string;
}

export function BookingStatusBadge({ status, className }: BookingStatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]",
        styles[status],
        className,
      )}
    >
      {status.replaceAll("_", " ")}
    </span>
  );
}
