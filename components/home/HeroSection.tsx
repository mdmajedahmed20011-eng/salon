"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/shared/Button";
import { motion } from "@/components/shared/Motion";
import { buildBlurDataURL, heroMotion } from "@/lib/utils";

const stats = [
  { value: "2,400+", label: "Happy clients" },
  { value: "15+", label: "Expert stylists" },
  { value: "8", label: "Years of excellence" },
  { value: "98%", label: "Satisfaction rate" },
];

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-80px)] items-end overflow-hidden">
      <Image
        alt="Luxury salon interior"
        blurDataURL={buildBlurDataURL("111111")}
        className="absolute inset-0 h-full w-full animate-hero-zoom object-cover"
        fill
        placeholder="blur"
        priority
        sizes="100vw"
        src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1800&q=80"
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="absolute inset-0 luxury-grid opacity-30" />
      <div className="container-shell relative z-10 flex w-full flex-col justify-center py-14 md:py-20">
        <div className="max-w-4xl">
          <motion.p {...heroMotion(0)} className="section-label">
            Award-winning salon and spa
          </motion.p>
          <motion.h1 {...heroMotion(0.05)} className="hero-display max-w-3xl text-balance">
            Where Beauty Becomes Art
          </motion.h1>
          <motion.p
            {...heroMotion(0.2)}
            className="mt-6 max-w-2xl text-lg font-light leading-8 text-text-secondary sm:text-xl"
          >
            Experience luxury hair, skin, and wellness treatments crafted by world-class artists.
          </motion.p>
          <motion.div {...heroMotion(0.4)} className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/book">Book Appointment</Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link href="/services">View Our Services</Link>
            </Button>
          </motion.div>
        </div>
        <motion.div
          {...heroMotion(0.6)}
          className="glass-panel mt-14 grid grid-cols-2 gap-3 px-4 py-4 sm:mt-16 sm:gap-4 sm:px-6 sm:py-6 lg:grid-cols-4 lg:px-10"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="relative rounded-[22px] border border-white/5 bg-black/15 p-4 text-center sm:p-5 lg:border-0 lg:bg-transparent lg:p-0 lg:text-left"
            >
              {index > 0 ? (
                <div className="absolute left-0 top-1/2 hidden h-10 w-px -translate-y-1/2 bg-gold-400/20 lg:block" />
              ) : null}
              <div className="text-2xl font-semibold text-gold-300 sm:text-3xl">{stat.value}</div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.18em] text-text-secondary sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
