"use client";

import { useEffect } from "react";

interface ScrollSpyProps {
  sectionIds: string[];
  onActiveChange: (id: string) => void;
}

export function ScrollSpy({ sectionIds, onActiveChange }: ScrollSpyProps) {
  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const updateActive = () => {
      const marker = window.innerHeight * 0.32;
      let active = "";

      for (const el of elements) {
        const { top, bottom } = el.getBoundingClientRect();
        if (top <= marker && bottom > marker) {
          active = el.id;
          break;
        }
      }

      if (!active) {
        for (const el of elements) {
          if (el.getBoundingClientRect().top <= marker) {
            active = el.id;
          }
        }
      }

      onActiveChange(active);
    };

    updateActive();

    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [sectionIds, onActiveChange]);

  return null;
}
