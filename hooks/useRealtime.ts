"use client";

import { useEffect, useState } from "react";

export function useRealtime() {
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setConnected(true), 300);

    return () => window.clearTimeout(timer);
  }, []);

  return { connected };
}
