"use client";

import { Eye, Flower2, Gem, HandMetal, Scissors, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { motion } from "@/components/shared/Motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { serviceCategories } from "@/lib/demo-data";
import { buildBlurDataURL, sectionMotion } from "@/lib/utils";

const iconMap = {
  scissors: Scissors,
  sparkles: Sparkles,
  gem: Gem,
  "flower-2": Flower2,
  "hand-metal": HandMetal,
  eye: Eye,
} as const;

export function ServiceCategories() {
  return (
    <motion.section className="container-shell py-24" {...sectionMotion}>
      <SectionHeading
        description="From editorial hair and skin therapy to bridal beauty and restorative spa journeys, every service is built around precision and presence."
        label="Our expertise"
        title="Indulge in Every Luxury"
      />
      <div className="mt-12 grid gap-4 overflow-x-auto pb-2 scrollbar-none sm:grid-cols-2 lg:grid-cols-6">
        {serviceCategories.map((category, index) => {
          const Icon = iconMap[category.icon as keyof typeof iconMap] ?? Sparkles;

          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Link
                className="group premium-card block h-[280px] min-w-[220px] overflow-hidden border-white/5"
                href={`/services/${category.slug}`}
              >
                <div className="relative h-full">
                  <Image
                    alt={category.name}
                    blurDataURL={buildBlurDataURL("151515")}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    fill
                    placeholder="blur"
                    sizes="(max-width: 1024px) 50vw, 16vw"
                    src={category.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/90" />
                  <div className="absolute inset-x-5 bottom-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-400/30 bg-black/40 text-gold-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-heading text-3xl">{category.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-text-secondary">{category.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
