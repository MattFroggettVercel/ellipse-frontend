"use client";

import { useEffect, useCallback } from "react";

export default function StickyHero() {
  const onScroll = useCallback((event) => {
    console.log("fds");
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {};
  }, []);

  return <></>;
}
