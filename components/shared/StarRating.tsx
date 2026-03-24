import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  className?: string;
}

export function StarRating({ rating, className }: StarRatingProps) {
  return (
    <div className={cn("flex items-center gap-1 text-gold-400", className)}>
      {Array.from({ length: 5 }).map((_, index) => {
        const active = rating >= index + 1 || (rating > index && rating < index + 1);

        return (
          <Star
            key={index}
            className={cn("h-4 w-4", active ? "fill-current" : "text-white/20")}
          />
        );
      })}
      <span className="ml-2 text-sm text-text-secondary">{rating.toFixed(1)}</span>
    </div>
  );
}
