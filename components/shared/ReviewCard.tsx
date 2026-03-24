import { StarRating } from "@/components/shared/StarRating";

interface ReviewCardProps {
  name: string;
  body: string;
  rating: number;
}

export function ReviewCard({ name, body, rating }: ReviewCardProps) {
  return (
    <article className="premium-card p-6">
      <StarRating rating={rating} />
      <p className="mt-5 font-heading text-2xl italic leading-9">"{body}"</p>
      <div className="mt-5 text-sm uppercase tracking-[0.14em] text-text-secondary">{name}</div>
    </article>
  );
}
