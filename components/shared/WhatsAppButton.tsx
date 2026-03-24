import Link from "next/link";

export function WhatsAppButton() {
  return (
    <Link
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-lg font-semibold text-white shadow-xl transition-transform duration-200 hover:scale-105 md:bottom-6 md:right-24"
      href="https://wa.me/8801700000000"
      target="_blank"
    >
      WA
    </Link>
  );
}
