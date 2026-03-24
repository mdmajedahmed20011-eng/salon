"use client";

import Link from "next/link";

import { Button } from "@/components/shared/Button";
import { motion } from "@/components/shared/Motion";
import { sectionMotion } from "@/lib/utils";

export function AIAdvisorCTA() {
  const particleClasses = [
    "left-[12%] top-[12%] [animation-delay:0s]",
    "left-[34%] top-[12%] [animation-delay:0.15s]",
    "left-[56%] top-[12%] [animation-delay:0.3s]",
    "left-[78%] top-[12%] [animation-delay:0.45s]",
    "left-[12%] top-[30%] [animation-delay:0.6s]",
    "left-[34%] top-[30%] [animation-delay:0.75s]",
    "left-[56%] top-[30%] [animation-delay:0.9s]",
    "left-[78%] top-[30%] [animation-delay:1.05s]",
    "left-[12%] top-[48%] [animation-delay:1.2s]",
    "left-[34%] top-[48%] [animation-delay:1.35s]",
    "left-[56%] top-[48%] [animation-delay:1.5s]",
    "left-[78%] top-[48%] [animation-delay:1.65s]",
    "left-[12%] top-[66%] [animation-delay:1.8s]",
    "left-[34%] top-[66%] [animation-delay:1.95s]",
    "left-[56%] top-[66%] [animation-delay:2.1s]",
    "left-[78%] top-[66%] [animation-delay:2.25s]",
  ];

  return (
    <motion.section className="container-shell py-24" {...sectionMotion}>
      <div className="premium-card overflow-hidden bg-radial-premium px-8 py-12 lg:px-12 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="section-label">AI advisor</p>
            <h2 className="section-heading max-w-3xl">Discover Your Perfect Look with AI</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-text-secondary">
              Upload your photo and let our AI recommend the right hairstyle, color direction, and
              treatment path for your features and lifestyle.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/ai-advisor">Try AI Advisor</Link>
              </Button>
            </div>
          </div>
          <div className="relative min-h-[260px] overflow-hidden rounded-[28px] border border-gold-400/15 bg-black/30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,160,23,0.28),transparent_55%)] opacity-70" />
            {particleClasses.map((particleClass, index) => (
              <span
                key={index}
                className={`absolute h-2 w-2 animate-float rounded-full bg-gold-300/50 ${particleClass}`}
              />
            ))}
            <div className="absolute inset-x-8 inset-y-10 rounded-[24px] border border-white/10 bg-white/5 backdrop-blur">
              <div className="grid h-full place-items-center text-center">
                <div>
                  <div className="mx-auto mb-4 h-20 w-20 rounded-full border border-gold-400/30 bg-gold-400/10" />
                  <p className="text-sm uppercase tracking-[0.18em] text-gold-200">
                    Neural beauty canvas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
