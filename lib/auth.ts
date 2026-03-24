import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth, { type NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import Resend from "next-auth/providers/resend";
import type { Provider } from "next-auth/providers";
import { z } from "zod";

import { prisma } from "@/lib/prisma";

const credentialsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const providers: Provider[] = [
  Credentials({
    credentials: {
      email: {},
      password: {},
    },
    async authorize(credentials) {
      const parsed = credentialsSchema.safeParse(credentials);

      if (!parsed.success) {
        return null;
      }

      const email = parsed.data.email.toLowerCase();

      return {
        id: email,
        email,
        name: email.includes("admin") ? "Luxe Admin" : "Luxe Client",
        role: email.includes("admin") ? "ADMIN" : "CUSTOMER",
      };
    },
  }),
];

if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  providers.push(
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  );
}

if (process.env.RESEND_API_KEY && process.env.EMAIL_FROM && process.env.DATABASE_URL) {
  providers.push(
    Resend({
      apiKey: process.env.RESEND_API_KEY,
      from: process.env.EMAIL_FROM,
    }),
  );
}

const authConfig = {
  adapter: process.env.DATABASE_URL ? PrismaAdapter(prisma) : undefined,
  pages: {
    signIn: "/auth/login",
    verifyRequest: "/auth/verify-email",
  },
  session: {
    strategy: "jwt",
  },
  providers,
  callbacks: {
    async jwt({ token, user }) {
      if (user?.role) {
        token.role = user.role;
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as string;
        session.user.id = token.sub as string;
      }

      return session;
    },
    authorized({ auth, request }) {
      const { pathname } = request.nextUrl;
      const isLoggedIn = Boolean(auth?.user);
      const role = auth?.user?.role;
      const isAdminEmail = auth?.user?.email?.toLowerCase().includes("admin");
      const protectedUserRoute =
        pathname.startsWith("/dashboard") ||
        pathname.startsWith("/book/confirm") ||
        pathname.startsWith("/book/success");

      if (protectedUserRoute && !isLoggedIn) {
        return false;
      }

      if (pathname.startsWith("/admin")) {
        return role === "ADMIN" || role === "SUPER_ADMIN" || Boolean(isAdminEmail);
      }

      return true;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);
