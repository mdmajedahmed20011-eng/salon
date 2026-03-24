import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/shared/Button";
import { PageHero } from "@/components/shared/PageHero";
import { locations } from "@/lib/demo-data";
import { buildBlurDataURL } from "@/lib/utils";

export default function LocationDetailPage({ params }: { params: { slug: string } }) {
  const location = locations.find((item) => item.slug === params.slug);

  if (!location) {
    notFound();
  }

  return (
    <>
      <PageHero
        description={`${location.address}, ${location.city}. Reach us at ${location.phone} or ${location.email}.`}
        eyebrow="Location detail"
        title={location.name}
      />
      <section className="container-shell pb-24">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="premium-card overflow-hidden">
            <div className="relative h-[420px]">
              <Image
                alt={location.name}
                blurDataURL={buildBlurDataURL("121212")}
                className="object-cover"
                fill
                placeholder="blur"
                sizes="(max-width: 1024px) 100vw, 60vw"
                src={location.heroImage}
              />
            </div>
          </div>
          <div className="premium-card p-8">
            <div className="space-y-5 text-sm leading-7 text-text-secondary">
              <p>
                <span className="text-gold-300">Address:</span> {location.address}, {location.city}
              </p>
              <p>
                <span className="text-gold-300">Hours:</span> {location.hours}
              </p>
              <p>
                <span className="text-gold-300">Phone:</span> {location.phone}
              </p>
              <p>
                <span className="text-gold-300">Email:</span> {location.email}
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/book">Book this branch</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/locations">All locations</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
