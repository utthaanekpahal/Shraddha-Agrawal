// ────────────────────────────────────────────
//  hooks/useIntersection.js
//  Fires once when element enters the viewport
// ────────────────────────────────────────────
import { useState, useEffect } from "react";

export function useIntersection(ref, threshold = 0.15) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return visible;
}
