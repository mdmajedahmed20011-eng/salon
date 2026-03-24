import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/shared/Button";
import { PageHero } from "@/components/shared/PageHero";
import { serviceCategories, services } from "@/lib/demo-data";
import { buildBlurDataURL, formatCurrency } from "@/lib/utils";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        description="Explore signature services across hair, skin, makeup, spa, nails, and brows, all crafted with premium products and a highly personalized finish."
        eyebrow="Service menu"
        title="A Complete Luxury Beauty Portfolio"
      />
      <section className="container-shell pb-24">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.id} className="premium-card overflow-hidden">
              <div className="relative h-64">
                <Image
                  alt={service.name}
                  blurDataURL={buildBlurDataURL("141414")}
                  className="object-cover"
                  fill
                  placeholder="blur"
                  sizes="(max-width: 1280px) 50vw, 33vw"
                  src={service.image}
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-gold-400/20 bg-gold-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-gold-200">
                    {serviceCategories.find((category) => category.id === service.categoryId)?.name}
                  </span>
                  <span className="text-sm text-text-secondary">{service.duration} min</span>
                </div>
                <h2 className="mt-4 text-3xl">{service.name}</h2>
                <p className="mt-4 text-sm leading-7 text-text-secondary">{service.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.features.slice(0, 3).map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.14em] text-text-secondary"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between gap-3">
                  <div className="text-xl font-semibold text-gold-300">
                    {formatCurrency(service.basePrice)}
                  </div>
                  <Button asChild variant="secondary">
                    <Link href={`/services/${service.categorySlug}/${service.slug}`}>View details</Link>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
