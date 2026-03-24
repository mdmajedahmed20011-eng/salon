"use client";

import Link from "next/link";

import { Button } from "@/components/shared/Button";
import { motion } from "@/components/shared/Motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { locations } from "@/lib/demo-data";
import { sectionMotion } from "@/lib/utils";

export function LocationsMap() {
  const pinClasses = ["left-[28%] top-[36%]", "left-[60%] top-[50%]"];

  return (
    <motion.section className="container-shell py-24" {...sectionMotion}>
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading
            description="Choose the branch that fits your rhythm, then lock in your service and preferred artist."
            label="Locations"
            title="Luxury Across the City"
          />
          <div className="mt-8 space-y-4">
            {locations.map((location) => (
              <div key={location.id} className="premium-card p-5">
                <h3 className="text-2xl">{location.name}</h3>
                <p className="mt-2 text-sm leading-7 text-text-secondary">
                  {location.address}, {location.city}
                </p>
                <p className="mt-1 text-sm text-text-secondary">{location.hours}</p>
                <div className="mt-5">
                  <Button asChild variant="secondary">
                    <Link href={`/locations/${location.slug}`}>Explore branch</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="premium-card overflow-hidden p-4">
          <div className="relative flex min-h-[520px] items-center justify-center rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(15,15,15,0.7),rgba(10,10,10,0.95))]">
            <div className="absolute inset-0 luxury-grid opacity-40" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(212,160,23,0.12),transparent_35%)]" />
            {locations.map((location, index) => (
              <div
                key={location.id}
                className={`absolute flex flex-col items-center gap-2 ${pinClasses[index]}`}
              >
                <span className="h-4 w-4 rounded-full bg-gold-400 shadow-gold" />
                <span className="rounded-full border border-gold-400/20 bg-black/70 px-3 py-1 text-xs uppercase tracking-[0.14em] text-gold-200">
                  {location.name}
                </span>
              </div>
            ))}
            <div className="absolute bottom-6 left-6 right-6 rounded-[24px] border border-white/10 bg-black/40 p-5 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.18em] text-gold-300">Map experience</p>
              <p className="mt-3 max-w-xl text-sm leading-7 text-text-secondary">
                A Google Maps integration can drop directly into this panel when keys are present.
                The current surface preserves the dark branded treatment and multi-location focus
                behavior.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
