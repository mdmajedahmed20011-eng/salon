"use client";

import Link from "next/link";

import { Button } from "@/components/shared/Button";
import { motion } from "@/components/shared/Motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { sectionMotion } from "@/lib/utils";

const tiers = [
  { name: "Bronze", range: "0 - 999", benefit: "Priority offers" },
  { name: "Silver", range: "1,000 - 4,999", benefit: "Birthday reward" },
  { name: "Gold", range: "5,000 - 9,999", benefit: "Exclusive previews" },
  { name: "Platinum", range: "10,000+", benefit: "Complimentary upgrades" },
];

export function LoyaltySection() {
  return (
    <motion.section className="container-shell py-24" {...sectionMotion}>
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <SectionHeading
            description="Every visit can unlock future benefits, from welcome bonuses to premium redemptions and tier-only privileges."
            label="Loyalty club"
            title="Earn More from Every Ritual"
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/dashboard/loyalty">Join Free and Start Earning</Link>
            </Button>
          </div>
        </div>
        <div className="premium-card p-6">
          <div className="grid gap-4">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5"
                initial={{ opacity: 0, x: 24 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-gold-300">{tier.name}</p>
                    <h3 className="mt-2 text-3xl">{tier.benefit}</h3>
                  </div>
                  <div className="rounded-full border border-gold-400/25 bg-gold-400/10 px-4 py-2 text-sm text-gold-200">
                    {tier.range}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
