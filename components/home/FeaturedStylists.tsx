"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { Button } from "@/components/shared/Button";
import { motion } from "@/components/shared/Motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { StarRating } from "@/components/shared/StarRating";
import { stylists } from "@/lib/demo-data";
import { buildBlurDataURL, sectionMotion } from "@/lib/utils";

export function FeaturedStylists() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  function scrollByDirection(direction: "next" | "prev") {
    const container = scrollerRef.current;

    if (!container) {
      return;
    }

    const delta = direction === "next" ? 320 : -320;
    container.scrollBy({ left: delta, behavior: "smooth" });
  }

  return (
    <motion.section className="container-shell py-24" {...sectionMotion}>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          description="Meet the artists trusted for refined transformations, elevated rituals, and repeat-worthy results."
          label="Meet the artists"
          title="Our Master Stylists"
        />
        <div className="hidden gap-3 sm:flex">
          <Button aria-label="Previous stylists" onClick={() => scrollByDirection("prev")} variant="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button aria-label="Next stylists" onClick={() => scrollByDirection("next")} variant="icon">
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 scrollbar-none sm:gap-6" ref={scrollerRef}>
        {stylists.map((stylist, index) => (
          <motion.article
            key={stylist.id}
            className="group premium-card min-w-[82vw] max-w-[82vw] snap-start sm:min-w-[280px] sm:max-w-[280px]"
            initial={{ opacity: 0, y: 40 }}
            transition={{ delay: index * 0.08, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, boxShadow: "0 20px 60px rgba(212,160,23,0.2)" }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="relative h-[250px] overflow-hidden">
              <Image
                alt={stylist.name}
                blurDataURL={buildBlurDataURL("111111")}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                fill
                placeholder="blur"
                sizes="280px"
                src={stylist.avatar}
              />
            </div>
            <div className="space-y-4 p-5">
              <div>
                <h3 className="text-3xl">{stylist.name}</h3>
                <p className="mt-1 text-sm uppercase tracking-[0.15em] text-gold-300">{stylist.title}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {stylist.specialties.slice(0, 2).map((specialty) => (
                  <span
                    key={specialty}
                    className="rounded-full border border-gold-400/20 bg-gold-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-gold-200"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
              <StarRating rating={stylist.rating} />
              <p className="text-xs uppercase tracking-[0.15em] text-text-secondary">
                {stylist.reviewCount} verified reviews
              </p>
              <Button asChild className="w-full opacity-100 lg:opacity-0 lg:transition-opacity lg:duration-300 lg:group-hover:opacity-100">
                <Link href={`/stylists/${stylist.slug}`}>Book Now</Link>
              </Button>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
