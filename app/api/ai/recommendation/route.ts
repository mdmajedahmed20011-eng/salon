import { NextResponse } from "next/server";
import { z } from "zod";

import { enforceRateLimit, handleApiError } from "@/lib/api";

const recommendationSchema = z.object({
  image: z.string().min(1),
});

export async function POST(request: Request) {
  const rateLimitResponse = enforceRateLimit(request);

  if (rateLimitResponse) {
    return rateLimitResponse;
  }

  try {
    const body = await request.json();
    recommendationSchema.parse(body);

    return NextResponse.json(
      {
        data: {
          faceShape: "oval",
          hairstyleRecommendations: [
            "Soft contour layers",
            "Polished long bob",
            "Crown volume blowout",
          ],
          colorRecommendations: ["Rich mocha gloss", "Warm espresso dimension"],
          treatmentRecommendations: ["Barrier glow facial", "Scalp renewal ritual"],
        },
      },
      { status: 200 },
    );
  } catch (error) {
    return handleApiError(error);
  }
}
