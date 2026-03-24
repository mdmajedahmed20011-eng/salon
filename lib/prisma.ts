import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma: PrismaClient | null = process.env.DATABASE_URL
  ? global.prisma ??
    new PrismaClient({
      log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
    })
  : null;

if (process.env.NODE_ENV !== "production" && prisma) {
  global.prisma = prisma;
}
