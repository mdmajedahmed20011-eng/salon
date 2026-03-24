"use client";

import { createElement, forwardRef } from "react";

import type { ComponentType, ReactNode } from "react";

type PrimitiveTag = keyof JSX.IntrinsicElements;

const motionOnlyProps = new Set([
  "animate",
  "exit",
  "initial",
  "transition",
  "viewport",
  "whileHover",
  "whileInView",
  "whileTap",
]);

function createMotionComponent(tag: PrimitiveTag) {
  return forwardRef<HTMLElement, Record<string, unknown>>(function MotionPrimitive(props, ref) {
    const sanitizedProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !motionOnlyProps.has(key)),
    );

    return createElement(tag, { ...sanitizedProps, ref });
  });
}

export const motion = new Proxy(
  {},
  {
    get(_, tag: string) {
      return createMotionComponent(tag as PrimitiveTag);
    },
  },
) as Record<string, ComponentType<Record<string, unknown>>>;

export function AnimatePresence({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
