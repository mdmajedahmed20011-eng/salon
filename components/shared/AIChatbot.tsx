"use client";

import { Bot, SendHorizonal, Sparkles, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { Button } from "@/components/shared/Button";
import { AnimatePresence, motion } from "@/components/shared/Motion";
import { faqQuickReplies } from "@/lib/demo-data";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  role: "assistant" | "user";
  content: string;
}

const initialMessage: Message = {
  id: "intro",
  role: "assistant",
  content:
    "Welcome to LuxeSalon. I can help you explore services, understand pricing, and guide you to the booking flow.",
};

export function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([initialMessage]);

  useEffect(() => {
    const saved = window.localStorage.getItem("luxesalon-chat");

    if (saved) {
      setMessages(JSON.parse(saved) as Message[]);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("luxesalon-chat", JSON.stringify(messages));
  }, [messages]);

  const canSend = useMemo(() => input.trim().length > 0, [input]);

  function appendMessage(content: string, role: Message["role"]) {
    setMessages((current) => [
      ...current,
      { id: `${role}-${Date.now()}-${Math.random()}`, role, content },
    ]);
  }

  async function handleSend(nextContent?: string) {
    const content = (nextContent ?? input).trim();

    if (!content) {
      return;
    }

    appendMessage(content, "user");
    setInput("");

    const cannedReply =
      content.toLowerCase().includes("book")
        ? "The quickest route is our booking flow at /book. You can choose a service, stylist, time, and confirm payment in one flow."
        : content.toLowerCase().includes("hour")
          ? "Our Gulshan branch runs from 09:00 to 21:00, and Dhanmondi runs from 10:00 to 22:00."
          : "I can help with services, salon hours, promotions, and booking guidance. If you want a live reservation, head to /book.";

    window.setTimeout(() => {
      appendMessage(cannedReply, "assistant");
    }, 500);
  }

  return (
    <>
      <button
        aria-label="Open AI chat assistant"
        className="fixed bottom-5 right-20 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gold-400 text-black shadow-gold transition-transform duration-200 hover:scale-105 md:bottom-6 md:right-6"
        onClick={() => setOpen(true)}
        type="button"
      >
        <Bot className="h-6 w-6" />
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            className="fixed inset-0 z-50 flex items-end justify-end bg-black/60 p-3 backdrop-blur-sm md:inset-auto md:bottom-24 md:right-6 md:bg-transparent md:p-0"
            exit={{ opacity: 0, scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.92 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            <div className="flex h-[min(84vh,560px)] w-full max-w-[380px] flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#0f0f0f] shadow-xl">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.14em] text-gold-300">
                    LuxeBot
                  </div>
                  <p className="mt-1 text-sm text-text-secondary">
                    Premium concierge for bookings and salon questions
                  </p>
                </div>
                <Button aria-label="Close chat" onClick={() => setOpen(false)} variant="icon">
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex-1 space-y-4 overflow-y-auto px-4 py-5">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "max-w-[88%] rounded-[20px] px-4 py-3 text-sm leading-6",
                      message.role === "assistant"
                        ? "bg-white/5 text-text-primary"
                        : "ml-auto bg-gold-400 text-black",
                    )}
                  >
                    {message.content}
                  </div>
                ))}
                <div className="flex flex-wrap gap-2">
                  {faqQuickReplies.map((reply) => (
                    <button
                      key={reply}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-text-secondary transition-colors hover:border-gold-400/30 hover:text-text-primary"
                      onClick={() => handleSend(reply)}
                      type="button"
                    >
                      <Sparkles className="mr-1 inline h-3 w-3" />
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
              <div className="border-t border-white/10 p-4">
                <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  <input
                    className="flex-1 bg-transparent text-sm text-text-primary outline-none placeholder:text-text-muted"
                    onChange={(event) => setInput(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        void handleSend();
                      }
                    }}
                    placeholder="Ask LuxeBot anything"
                    value={input}
                  />
                  <button
                    aria-label="Send message"
                    className="rounded-full bg-gold-400 p-2 text-black disabled:opacity-40"
                    disabled={!canSend}
                    onClick={() => void handleSend()}
                    type="button"
                  >
                    <SendHorizonal className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
