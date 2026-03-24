"use client";

import { motion } from "@/components/shared/Motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { sectionMotion } from "@/lib/utils";

const steps = [
  {
    step: "01",
    title: "Choose Service",
    description: "Explore signature treatments, packages, and premium add-ons.",
  },
  {
    step: "02",
    title: "Select Stylist",
    description: "Pick a master artist or let us assign the best available specialist.",
  },
  {
    step: "03",
    title: "Pick a Time",
    description: "See live availability with real-time slot updates and date flexibility.",
  },
  {
    step: "04",
    title: "Relax and Enjoy",
    description: "Confirm payment, receive reminders, and arrive ready for your ritual.",
  },
];

export function HowItWorks() {
  return (
    <motion.section className="container-shell py-24" {...sectionMotion}>
      <SectionHeading
        align="center"
        description="From first click to final confirmation, the journey is designed to feel calm, guided, and premium."
        label="Booking process"
        title="Your Luxury Experience Awaits"
      />
      <div className="relative mt-14 grid gap-8 lg:grid-cols-4">
        <div className="absolute left-[12.5%] right-[12.5%] top-6 hidden border-t border-dashed border-gold-400/30 lg:block" />
        {steps.map((item, index) => (
          <motion.div
            key={item.step}
            className="relative text-center"
            initial={{ opacity: 0, y: 30 }}
            transition={{ delay: index * 0.12, duration: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold-400/40 bg-gold-400/10 text-sm font-semibold text-gold-300">
              {item.step}
            </div>
            <h3 className="mt-6 text-3xl">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-text-secondary">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
