"use client";

import { Quote } from "lucide-react";

import { motion } from "@/components/shared/Motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { StarRating } from "@/components/shared/StarRating";
import { testimonials } from "@/lib/demo-data";
import { sectionMotion } from "@/lib/utils";

const firstRow = [...testimonials, ...testimonials];
const secondRow = [...testimonials.slice().reverse(), ...testimonials.slice().reverse()];

function TestimonialStrip({ items, reverse = false }: { items: typeof testimonials; reverse?: boolean }) {
  return (
    <div className="overflow-hidden">
      <div className={`flex min-w-max gap-6 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {items.map((testimonial, index) => (
          <article
            key={`${testimonial.id}-${index}`}
            className="premium-card w-[340px] flex-none p-6 hover:border-gold-400/20"
          >
            <Quote className="h-8 w-8 text-gold-300" />
            <p className="mt-5 font-heading text-2xl italic leading-9 text-text-primary">
              "{testimonial.quote}"
            </p>
            <div className="mt-6 flex items-center justify-between">
              <div>
                <div className="text-base font-semibold">{testimonial.name}</div>
                <div className="text-xs uppercase tracking-[0.14em] text-text-secondary">
                  {testimonial.treatment}
                </div>
              </div>
              <div className="rounded-full border border-success/30 bg-success/10 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-success">
                Verified
              </div>
            </div>
            <StarRating className="mt-4" rating={testimonial.rating} />
          </article>
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <motion.section className="overflow-hidden py-24" {...sectionMotion}>
      <div className="container-shell">
        <SectionHeading
          align="center"
          description="A steady stream of five-star reviews from guests who care about both the result and the feeling of getting there."
          label="Client love"
          title="What Our Clients Say"
        />
      </div>
      <div className="mt-12 space-y-6">
        <TestimonialStrip items={firstRow} />
        <TestimonialStrip items={secondRow} reverse />
      </div>
    </motion.section>
  );
}
