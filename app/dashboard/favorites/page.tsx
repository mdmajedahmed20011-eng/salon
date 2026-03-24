import { StarRating } from "@/components/shared/StarRating";
import { stylists } from "@/lib/demo-data";

export default function DashboardFavoritesPage() {
  return (
    <div className="premium-card p-8">
      <p className="section-label">Favorites</p>
      <h1 className="text-5xl">Artists you come back to</h1>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {stylists.slice(0, 4).map((stylist) => (
          <div
            key={stylist.id}
            className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5"
          >
            <div className="text-2xl">{stylist.name}</div>
            <p className="mt-2 text-sm uppercase tracking-[0.14em] text-gold-300">{stylist.title}</p>
            <StarRating className="mt-4" rating={stylist.rating} />
          </div>
        ))}
      </div>
    </div>
  );
}
