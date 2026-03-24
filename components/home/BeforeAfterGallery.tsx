"use client";

import Image from "next/image";

import { motion } from "@/components/shared/Motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { beforeAfterGallery } from "@/lib/demo-data";
import { buildBlurDataURL, sectionMotion } from "@/lib/utils";

export function BeforeAfterGallery() {
  return (
    <motion.section className="container-shell py-24" {...sectionMotion}>
      <SectionHeading
        align="center"
        description="Swipe through real transformations from guests who trusted us with their signature moments."
        label="Transformations"
        title="Real Results, Real Beauty"
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {beforeAfterGallery.map((item, index) => (
          <motion.div
            key={item.id}
            className="premium-card overflow-hidden p-4"
            initial={{ opacity: 0, y: 30 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <div className="mb-3 text-xs uppercase tracking-[0.14em] text-text-secondary">
                  Before
                </div>
                <div className="relative h-72 overflow-hidden rounded-[24px]">
                  <Image
                    alt={`${item.title} before`}
                    blurDataURL={buildBlurDataURL("111111")}
                    className="object-cover"
                    fill
                    placeholder="blur"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    src={item.before}
                  />
                </div>
              </div>
              <div>
                <div className="mb-3 text-xs uppercase tracking-[0.14em] text-gold-300">After</div>
                <div className="relative h-72 overflow-hidden rounded-[24px]">
                  <Image
                    alt={`${item.title} after`}
                    blurDataURL={buildBlurDataURL("111111")}
                    className="object-cover"
                    fill
                    placeholder="blur"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    src={item.after}
                  />
                </div>
              </div>
            </div>
            <div className="px-2 pb-2 pt-5">
              <h3 className="text-2xl">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
