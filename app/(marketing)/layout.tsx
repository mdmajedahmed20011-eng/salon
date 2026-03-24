import type { ReactNode } from "react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AIChatbot } from "@/components/shared/AIChatbot";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background-primary">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
      <AIChatbot />
    </div>
  );
}
