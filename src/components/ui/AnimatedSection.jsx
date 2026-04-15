// ───────────────────────────────────────────────────────
//  components/ui/AnimatedSection.jsx
//  Wraps children in a scroll-triggered fade-up reveal.
//  Props:
//    delay   – seconds before animation starts (default 0)
//    style   – additional inline styles on the wrapper div
// ───────────────────────────────────────────────────────
import { useRef } from "react";
import { useIntersection } from "../../hooks/useIntersection";

export default function AnimatedSection({ children, delay = 0, style = {}, className = "" }) {
  const ref = useRef(null);
  const visible = useIntersection(ref);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
