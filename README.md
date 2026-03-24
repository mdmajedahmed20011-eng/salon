# LuxeSalon

Luxury salon booking platform built with Next.js 14, TypeScript, Tailwind CSS, Prisma, NextAuth, and a premium multi-page UI for marketing, booking, dashboard, and admin flows.

## Stack

- Next.js 14 App Router
- TypeScript strict mode
- Tailwind CSS
- Prisma + PostgreSQL
- NextAuth v5
- Zustand
- Recharts

## Local Run

1. Install dependencies:

```bash
npm install
```

2. Copy env values:

```bash
cp .env.local.example .env.local
```

3. Generate Prisma client:

```bash
npx prisma generate
```

4. Start dev server:

```bash
npm run dev
```

Open `http://localhost:3000`

## Production Build

```bash
npm run build
```

The project currently builds successfully for production.

## Admin Login

- URL: `/admin`
- Login URL: `/auth/login`
- Demo admin email: `admin@luxesalon.com`
- Demo admin password: `Admin123!`

## GitHub Upload

1. Create a new GitHub repository.
2. Inside this project folder run:

```bash
git init
git add .
git commit -m "Initial LuxeSalon production-ready setup"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

## Vercel Deploy

1. Go to [Vercel](https://vercel.com/)
2. Import your GitHub repository
3. Framework preset: `Next.js`
4. Add the required environment variables from `.env.local.example`
5. Deploy

## Required Environment Variables

These should be added in Vercel Project Settings -> Environment Variables:

- `NEXT_PUBLIC_APP_URL`
- `NEXTAUTH_URL`
- `NEXTAUTH_SECRET`
- `DATABASE_URL`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `RESEND_API_KEY`
- `EMAIL_FROM`
- `STRIPE_PUBLISHABLE_KEY`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `TWILIO_ACCOUNT_SID`
- `TWILIO_AUTH_TOKEN`
- `TWILIO_PHONE_NUMBER`
- `TWILIO_WHATSAPP_NUMBER`
- `OPENAI_API_KEY`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`

## Notes Before Real Launch

- Current admin credentials are demo-friendly for local/staging use.
- Stripe, Twilio, Resend, OpenAI, and Supabase routes are scaffolded and ready for real secrets.
- If you plan to use a live database, run Prisma migrations or `prisma db push` against your production database before launch.
