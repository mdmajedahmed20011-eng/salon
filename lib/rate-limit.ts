const requests = new Map<string, { count: number; resetAt: number }>();

export function checkRateLimit(identifier: string, limit = 100, windowMs = 60_000) {
  const now = Date.now();
  const current = requests.get(identifier);

  if (!current || current.resetAt < now) {
    requests.set(identifier, { count: 1, resetAt: now + windowMs });
    return { success: true, remaining: limit - 1 };
  }

  if (current.count >= limit) {
    return { success: false, remaining: 0, resetAt: current.resetAt };
  }

  current.count += 1;
  requests.set(identifier, current);

  return { success: true, remaining: limit - current.count };
}
