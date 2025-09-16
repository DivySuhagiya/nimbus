"use client";

import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type FadeInProps = {
  children: React.ReactNode;
  vars?: gsap.TweenVars;
  start?: string;
  className?: string;
  targetChildren?: boolean;
  scrub?: boolean | number;
};

export function FadeIn({
  children,
  className,
  start = "top 50%",
  targetChildren = false,
  vars = {},
  scrub = 2,
}: FadeInProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const target = targetChildren
      ? containerRef.current?.children
      : containerRef.current;

    if (!target) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.set(target, {
        opacity: 0,
        y: 60,
      });

      // Create ScrollTrigger config conditionally
      const scrollTriggerConfig: any = {
        trigger: containerRef.current,
        start,
        end: "bottom 50%",
      };

      // Only add scrub if it's not false
      if (scrub !== false) {
        scrollTriggerConfig.scrub = scrub;
      }

      gsap.to(target, {
        duration: 0.8,
        opacity: 1,
        ease: "power3.out",
        y: 0,
        stagger: 0.2,
        ...vars,
        scrollTrigger: scrollTriggerConfig,
      });
    });
  });

  return (
    <div ref={containerRef} className={clsx(className)}>
      {children}
    </div>
  );
}
