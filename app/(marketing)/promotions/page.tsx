import Link from "next/link";

import { Button } from "@/components/shared/Button";
import { PageHero } from "@/components/shared/PageHero";
import { promotions } from "@/lib/demo-data";

export default function PromotionsPage() {
  return (
    <>
      <PageHero
        description="Browse current salon offers, new guest promotions, and limited-edition seasonal rituals."
        eyebrow="Promotions"
        title="Premium Offers Worth Booking Around"
      />
      <section className="container-shell pb-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {promotions.map((promotion) => (
            <article key={promotion.id} className="premium-card p-6">
              <div className="rounded-full border border-gold-400/20 bg-gold-400/10 px-3 py-1 text-xs uppercase tracking-[0.14em] text-gold-200">
                {promotion.badge}
              </div>
              <h2 className="mt-5 text-3xl">{promotion.title}</h2>
              <p className="mt-4 text-sm leading-7 text-text-secondary">{promotion.description}</p>
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm">
                Code: <span className="font-semibold text-gold-300">{promotion.code}</span>
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.15em] text-text-secondary">
                Valid until {promotion.expiresAt}
              </p>
              <div className="mt-6">
                <Button asChild className="w-full">
                  <Link href="/book/confirm">Apply at checkout</Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
