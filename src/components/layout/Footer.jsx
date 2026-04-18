// ────────────────────────────────────────────
//  components/layout/Footer.jsx
// ────────────────────────────────────────────
import { NAV_LINKS, HOSPITALS } from "../../data/constants";

export default function Footer({ setActive }) {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "var(--primary-dark)", color: "#fff", padding: "56px 5% 32px" }}>
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>

        {/* ── Grid ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40, marginBottom: 48 }}>

          {/* Brand */}
          <div>
            <p style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, marginBottom: 8 }}>
              Dr. Shraddha Agrawal
            </p>
            <p style={{ fontSize: 13, color: "var(--accent)", marginBottom: 16, letterSpacing: 1 }}>
              SENIOR ANAESTHESIOLOGIST
            </p>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
              20+ years of dedicated clinical expertise in anaesthesia, critical care, and surgical support in Raipur.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p style={{ fontSize: 14, fontWeight: 700, marginBottom: 16, letterSpacing: 1, color: "rgba(255,255,255,0.6)", textTransform: "uppercase" }}>Quick Links</p>
            {NAV_LINKS.map(link => (
              <button
                key={link}
                onClick={() => setActive(link)}
                style={{ display: "block", background: "none", border: "none", fontFamily: "var(--font-body)", fontSize: 14, color: "rgba(255,255,255,0.65)", padding: "4px 0", transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = "var(--accent)"}
                onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.65)"}
              >{link}</button>
            ))}
          </div>

          {/* Hospitals */}
          <div>
            <p style={{ fontSize: 14, fontWeight: 700, marginBottom: 16, letterSpacing: 1, color: "rgba(255,255,255,0.6)", textTransform: "uppercase" }}>Hospitals</p>
            {HOSPITALS.map(h => (
              <p key={h.name} style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", marginBottom: 8, lineHeight: 1.5 }}>{h.name}</p>
            ))}
          </div>

          {/* Location */}
          <div>
            <p style={{ fontSize: 14, fontWeight: 700, marginBottom: 16, letterSpacing: 1, color: "rgba(255,255,255,0.6)", textTransform: "uppercase" }}>Location</p>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}>
              📍 Pachpedi Naka, Near Lalpur,<br />
              Dhamtari Road, Raipur – 492001,<br />
              Chhattisgarh, India
            </p>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 24, textAlign: "center" }}>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>
            © {year} Dr. Shraddha Agrawal. All rights reserved. · Raipur, Chhattisgarh
          </p>
        </div>
      </div>
    </footer>
  );
}
