import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/shared/Button";
import { PageHero } from "@/components/shared/PageHero";
import { StarRating } from "@/components/shared/StarRating";
import { stylists } from "@/lib/demo-data";
import { buildBlurDataURL } from "@/lib/utils";

export default function StylistProfilePage({ params }: { params: { slug: string } }) {
  const stylist = stylists.find((item) => item.slug === params.slug);

  if (!stylist) {
    notFound();
  }

  return (
    <>
      <PageHero
        description={stylist.bio}
        eyebrow={stylist.title}
        title={stylist.name}
      />
      <section className="container-shell pb-24">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="premium-card overflow-hidden">
            <div className="relative h-[520px]">
              <Image
                alt={stylist.name}
                blurDataURL={buildBlurDataURL("111111")}
                className="object-cover"
                fill
                placeholder="blur"
                sizes="(max-width: 1024px) 100vw, 45vw"
                src={stylist.avatar}
              />
            </div>
          </div>
          <div className="premium-card p-8">
            <StarRating rating={stylist.rating} />
            <p className="mt-6 text-base leading-8 text-text-secondary">{stylist.bio}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm uppercase tracking-[0.16em] text-gold-300">Experience</p>
                <div className="mt-3 text-3xl">{stylist.experience} years</div>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm uppercase tracking-[0.16em] text-gold-300">Price modifier</p>
                <div className="mt-3 text-3xl">+ {stylist.priceModifier} BDT</div>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {stylist.specialties.map((specialty) => (
                <span
                  key={specialty}
                  className="rounded-full border border-gold-400/20 bg-gold-400/10 px-3 py-1 text-xs uppercase tracking-[0.14em] text-gold-200"
                >
                  {specialty}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/book/stylist">Book with this stylist</Link>
              </Button>
              {stylist.instagramUrl ? (
                <Button asChild variant="secondary">
                  <Link href={stylist.instagramUrl}>Instagram</Link>
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
