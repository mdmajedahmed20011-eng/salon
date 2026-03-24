import { notFound } from "next/navigation";

import { PageHero } from "@/components/shared/PageHero";
import { serviceCategories, services } from "@/lib/demo-data";
import { formatCurrency } from "@/lib/utils";

export default function ServicesByCategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = serviceCategories.find((item) => item.slug === params.category);

  if (!category) {
    notFound();
  }

  const categoryServices = services.filter((service) => service.categorySlug === category.slug);

  return (
    <>
      <PageHero
        description={category.description}
        eyebrow="Service category"
        title={category.name}
      />
      <section className="container-shell pb-24">
        <div className="grid gap-4 lg:grid-cols-2">
          {categoryServices.map((service) => (
            <div key={service.id} className="premium-card p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-3xl">{service.name}</h2>
                  <p className="mt-3 text-sm leading-7 text-text-secondary">{service.description}</p>
                </div>
                <div className="rounded-full border border-gold-400/20 bg-gold-400/10 px-4 py-2 text-sm text-gold-200">
                  {service.duration} min
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div className="text-lg font-semibold text-gold-300">
                  {formatCurrency(service.basePrice)}
                </div>
                <a
                  className="text-sm uppercase tracking-[0.14em] text-text-secondary transition-colors hover:text-text-primary"
                  href={`/services/${category.slug}/${service.slug}`}
                >
                  View details
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
