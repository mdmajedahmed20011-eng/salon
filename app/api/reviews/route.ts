import { NextResponse } from "next/server";
import { z } from "zod";

import { testimonials } from "@/lib/demo-data";
import { enforceRateLimit, handleApiError } from "@/lib/api";

const reviewSchema = z.object({
  rating: z.number().min(1).max(5),
  body: z.string().min(20),
});

export async function GET(request: Request) {
  const rateLimitResponse = enforceRateLimit(request);

  if (rateLimitResponse) {
    return rateLimitResponse;
  }

  return NextResponse.json({ data: testimonials }, { status: 200 });
}

export async function POST(request: Request) {
  const rateLimitResponse = enforceRateLimit(request);

  if (rateLimitResponse) {
    return rateLimitResponse;
  }

  try {
    const body = await request.json();
    const review = reviewSchema.parse(body);

    return NextResponse.json(
      {
        data: {
          id: `review-${Date.now()}`,
          ...review,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    return handleApiError(error);
  }
}
