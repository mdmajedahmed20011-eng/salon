import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/shared/Button";
import { PageHero } from "@/components/shared/PageHero";
import { locations } from "@/lib/demo-data";
import { buildBlurDataURL } from "@/lib/utils";

export default function LocationsPage() {
  return (
    <>
      <PageHero
        description="Visit our city locations designed with the same warm, cinematic luxury language as the brand itself."
        eyebrow="Our branches"
        title="Two Flagship Destinations in Dhaka"
      />
      <section className="container-shell pb-24">
        <div className="grid gap-6 lg:grid-cols-2">
          {locations.map((location) => (
            <article key={location.id} className="premium-card overflow-hidden">
              <div className="relative h-72">
                <Image
                  alt={location.name}
                  blurDataURL={buildBlurDataURL("111111")}
                  className="object-cover"
                  fill
                  placeholder="blur"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  src={location.heroImage}
                />
              </div>
              <div className="p-6">
                <h2 className="text-3xl">{location.name}</h2>
                <p className="mt-3 text-sm leading-7 text-text-secondary">
                  {location.address}, {location.city}
                </p>
                <div className="mt-4 text-sm uppercase tracking-[0.15em] text-gold-300">
                  {location.hours}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild>
                    <Link href={`/locations/${location.slug}`}>View branch</Link>
                  </Button>
                  <Button asChild variant="secondary">
                    <Link href="/book">Book here</Link>
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
