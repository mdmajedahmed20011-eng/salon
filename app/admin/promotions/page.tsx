import { promotions } from "@/lib/demo-data";

export default function AdminPromotionsPage() {
  return (
    <div className="premium-card p-8">
      <p className="section-label">Promotions</p>
      <h1 className="text-5xl">Coupons and campaign management</h1>
      <div className="mt-8 space-y-4">
        {promotions.map((promotion) => (
          <div
            key={promotion.id}
            className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5"
          >
            <div className="text-2xl">{promotion.title}</div>
            <p className="mt-3 text-sm leading-7 text-text-secondary">{promotion.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
