import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/shared/Button";
import { PageHero } from "@/components/shared/PageHero";
import { serviceCategories, services } from "@/lib/demo-data";
import { buildBlurDataURL, formatCurrency } from "@/lib/utils";

export default function ServiceDetailPage({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const service = services.find(
    (item) => item.categorySlug === params.category && item.slug === params.slug,
  );

  if (!service) {
    notFound();
  }

  const category = serviceCategories.find((item) => item.id === service.categoryId);

  return (
    <>
      <PageHero
        description={service.description}
        eyebrow={category?.name ?? "Service detail"}
        title={service.name}
      />
      <section className="container-shell pb-24">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="premium-card overflow-hidden">
            <div className="relative h-[420px]">
              <Image
                alt={service.name}
                blurDataURL={buildBlurDataURL("121212")}
                className="object-cover"
                fill
                placeholder="blur"
                sizes="(max-width: 1024px) 100vw, 60vw"
                src={service.image}
              />
            </div>
          </div>
          <div className="premium-card p-8">
            <div className="text-sm uppercase tracking-[0.16em] text-gold-300">
              {service.duration} minute experience
            </div>
            <div className="mt-4 text-4xl font-semibold text-gold-300">
              {formatCurrency(service.basePrice)}
            </div>
            <p className="mt-6 text-base leading-8 text-text-secondary">{service.description}</p>
            <div className="mt-8 space-y-3">
              {service.features.map((feature) => (
                <div
                  key={feature}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-text-secondary"
                >
                  {feature}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/book">Book this service</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href={`/services/${service.categorySlug}`}>Explore category</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
