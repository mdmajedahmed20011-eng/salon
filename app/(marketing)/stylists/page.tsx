import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/shared/Button";
import { PageHero } from "@/components/shared/PageHero";
import { StarRating } from "@/components/shared/StarRating";
import { stylists } from "@/lib/demo-data";
import { buildBlurDataURL } from "@/lib/utils";

export default function StylistsPage() {
  return (
    <>
      <PageHero
        description="Our artists combine technical mastery with the kind of calm, intuitive consultation that turns visits into rituals."
        eyebrow="Talent roster"
        title="Meet the Stylists Behind the Signature Finish"
      />
      <section className="container-shell pb-24">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stylists.map((stylist) => (
            <article key={stylist.id} className="premium-card overflow-hidden">
              <div className="relative h-72">
                <Image
                  alt={stylist.name}
                  blurDataURL={buildBlurDataURL("111111")}
                  className="object-cover"
                  fill
                  placeholder="blur"
                  sizes="(max-width: 1280px) 50vw, 25vw"
                  src={stylist.avatar}
                />
              </div>
              <div className="space-y-4 p-6">
                <div>
                  <h2 className="text-3xl">{stylist.name}</h2>
                  <p className="mt-1 text-sm uppercase tracking-[0.14em] text-gold-300">
                    {stylist.title}
                  </p>
                </div>
                <StarRating rating={stylist.rating} />
                <p className="text-sm leading-7 text-text-secondary">{stylist.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {stylist.specialties.slice(0, 3).map((specialty) => (
                    <span
                      key={specialty}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.14em] text-text-secondary"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
                <Button asChild className="w-full">
                  <Link href={`/stylists/${stylist.slug}`}>View profile</Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
