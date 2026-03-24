"use client";

import { Sparkles, UploadCloud } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/shared/Button";
import { PageHero } from "@/components/shared/PageHero";

const demoRecommendations = [
  {
    title: "Soft contour layers",
    description: "A face-framing layered cut that lengthens the profile and softens the jawline.",
  },
  {
    title: "Rich mocha gloss",
    description: "A dimensional brunette tone with light-reflective gloss to brighten complexion.",
  },
  {
    title: "Barrier glow facial",
    description: "A hydration treatment to support luminosity before any major hair transformation.",
  },
];

export default function AIAdvisorPage() {
  const [hasResult, setHasResult] = useState(false);

  return (
    <>
      <PageHero
        description="Upload a face photo and get polished hairstyle, color, and treatment suggestions shaped around your features."
        eyebrow="AI style consultant"
        title="Your Personal AI Beauty Advisor"
      />
      <section className="container-shell pb-24">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="premium-card p-8">
            <div className="rounded-[28px] border border-dashed border-gold-400/30 bg-gold-400/5 p-10 text-center">
              <UploadCloud className="mx-auto h-12 w-12 text-gold-300" />
              <h2 className="mt-6 text-3xl">Upload a photo</h2>
              <p className="mt-4 text-sm leading-7 text-text-secondary">
                Drag and drop or choose an image. The final API route can forward a base64 payload to
                OpenAI Vision when your key is available.
              </p>
              <div className="mt-8 flex justify-center">
                <Button onClick={() => setHasResult(true)}>Generate Recommendations</Button>
              </div>
            </div>
          </div>
          <div className="premium-card p-8">
            {hasResult ? (
              <>
                <div className="rounded-full border border-gold-400/20 bg-gold-400/10 px-4 py-2 text-sm uppercase tracking-[0.15em] text-gold-200">
                  Oval face shape detected
                </div>
                <div className="mt-6 grid gap-4">
                  {demoRecommendations.map((recommendation) => (
                    <article
                      key={recommendation.title}
                      className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-2xl">{recommendation.title}</h3>
                          <p className="mt-3 text-sm leading-7 text-text-secondary">
                            {recommendation.description}
                          </p>
                        </div>
                        <Sparkles className="h-5 w-5 text-gold-300" />
                      </div>
                      <div className="mt-5">
                        <Button asChild variant="secondary">
                          <Link href="/book">Book this service</Link>
                        </Button>
                      </div>
                    </article>
                  ))}
                </div>
              </>
            ) : (
              <div className="grid min-h-[360px] place-items-center text-center">
                <div>
                  <p className="section-label justify-center">Awaiting upload</p>
                  <h2 className="text-4xl">Results will appear here</h2>
                  <p className="mt-4 max-w-md text-sm leading-7 text-text-secondary">
                    The production route returns structured JSON with face shape, hairstyles, color
                    directions, and treatment suggestions.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
