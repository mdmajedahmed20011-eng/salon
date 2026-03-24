import { NextResponse } from "next/server";
import { ZodError } from "zod";

import { checkRateLimit } from "@/lib/rate-limit";

export function getRequestIdentifier(request: Request) {
  return request.headers.get("x-forwarded-for") ?? request.headers.get("x-real-ip") ?? "local";
}

export function enforceRateLimit(request: Request) {
  const identifier = getRequestIdentifier(request);
  const result = checkRateLimit(identifier);

  if (!result.success) {
    return NextResponse.json(
      { error: "Too many requests. Please try again shortly." },
      { status: 429 },
    );
  }

  return null;
}

export function handleApiError(error: unknown) {
  if (error instanceof ZodError) {
    return NextResponse.json(
      {
        error: "Validation error",
        details: error.flatten(),
      },
      { status: 400 },
    );
  }

  console.error(error);

  return NextResponse.json(
    { error: "Something went wrong while processing this request." },
    { status: 500 },
  );
}
