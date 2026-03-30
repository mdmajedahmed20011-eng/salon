import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { promotions } from "@/lib/demo-data";

export default function AdminPromotionsPage() {
  return (
    <div className="space-y-8">
      <AdminPageHeader
        badges={["3 active campaigns", "Welcome offer converting", "VIP spa upsell live"]}
        description="Monitor offer health, align messaging with brand positioning, and keep expiry windows visible."
        label="Promotions"
        title="Coupons and campaign management"
      />
      <div className="space-y-4">
        {promotions.map((promotion) => (
          <div
            key={promotion.id}
            className="premium-card p-5"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="text-2xl">{promotion.title}</div>
                <p className="mt-3 text-sm leading-7 text-text-secondary">{promotion.description}</p>
              </div>
              <div className="rounded-full border border-gold-400/20 bg-gold-400/10 px-3 py-2 text-xs uppercase tracking-[0.14em] text-gold-200">
                {promotion.code}
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-text-secondary">
                {promotion.badge}
              </span>
              <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-text-secondary">
                Expires {promotion.expiresAt}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
