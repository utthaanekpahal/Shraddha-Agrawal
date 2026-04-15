// ──────────────────────────────────────────────────────
//  components/sections/StatsBar.jsx
//  Animated counter row triggered on scroll entry.
// ──────────────────────────────────────────────────────
import { useState, useEffect, useRef } from "react";
import { STATS } from "../../data/constants";
import { useIntersection } from "../../hooks/useIntersection";

export default function StatsBar() {
  const ref = useRef(null);
  const visible = useIntersection(ref, 0.3);
  const [counts, setCounts] = useState(() =>
    Object.fromEntries(STATS.map(s => [s.key, 0]))
  );

  useEffect(() => {
    if (!visible) return;
    STATS.forEach(({ key, target }) => {
      const step = target / 60;
      let current = 0;
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
        if (current >= target) clearInterval(timer);
      }, 20);
    });
  }, [visible]);

  return (
    <div ref={ref} style={{
      background: "var(--white)", padding: "48px 5%",
      boxShadow: "0 4px 40px rgba(10,110,180,0.08)",
    }}>
      <div style={{
        maxWidth: "var(--max-w)", margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: 32,
      }}>
        {STATS.map(s => (
          <div key={s.key} style={{ textAlign: "center" }}>
            <div style={{ fontSize: 32, marginBottom: 8 }}>{s.icon}</div>
            <div style={{
              fontFamily: "var(--font-display)", fontSize: 42, fontWeight: 700,
              color: "var(--primary)", lineHeight: 1,
            }}>
              {counts[s.key].toLocaleString()}{s.suffix}
            </div>
            <div style={{ fontSize: 14, color: "var(--text-muted)", marginTop: 6 }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
