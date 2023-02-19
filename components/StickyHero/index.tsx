"use client";

import { useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { Playfair_Display } from "@next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function StickyHero() {
  const overlayRef = useRef();
  const coverRef = useRef();

  const opacityMin = 0;
  const opacityMax = 0.6;
  const windowHeight = window.outerHeight;

  const onScroll = useCallback((event) => {
    const overlayRect = overlayRef.current?.getBoundingClientRect();

    const upperBound = windowHeight - overlayRect.height;

    if (overlayRect.y < windowHeight) {
      const percentage = 1 - (overlayRect.y - upperBound) / upperBound;

      // console.log(opacityMax * percentage);

      const opacity = Math.min(opacityMax * percentage, opacityMax);

      window.requestAnimationFrame(() => {
        coverRef.current.style.opacity = opacity;
      });
    }

    /*
      when overlayY < window.innerHeight
    */
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {};
  }, []);

  return (
    <div className="relative">
      <div className="h-screen sticky top-0 z-10">
        <Image src="/splash2.jpg" fill alt={""} className="object-cover z-10" />
      </div>
      <div
        ref={coverRef}
        className="absolute inset-0 bg-black z-20 opacity-0"
      ></div>
      <div
        ref={overlayRef}
        className="px-8 min-h-[50vh] relative z-30 sticky-fix text-white"
      >
        <h2 className={`${playfair.className} text-4xl mb-6`}>
          Timeless Luxury
        </h2>
        <p>Discover our collection of vintage inspired handmade watch cases</p>
      </div>
    </div>
  );
}
