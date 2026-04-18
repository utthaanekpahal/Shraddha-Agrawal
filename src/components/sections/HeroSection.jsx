// ────────────────────────────────────────────────────────
//  components/sections/HeroSection.jsx
//  Full-viewport animated hero banner with doctor card.
// ────────────────────────────────────────────────────────
import Button from "../ui/Button";
import { DOCTOR } from "../../data/constants";

const PILLS = ["📍 Raipur, CG", "🏥 DKS Super Speciality Hospital", "🎓 DNB Guide", "⭐ 20+ Yrs"];

export default function HeroSection({ setActive }) {
  return (
    <section style={{
      minHeight: "100vh",
      position: "relative",
      overflow: "hidden",
      background: "var(--grad-hero)",
      display: "flex",
      alignItems: "center",
    }}>
      {/* ── Decorative blobs ── */}
      <Blob style={{ top: -80, right: -80, width: 400, height: 400, background: "rgba(43,182,115,0.15)" }} />
      <Blob style={{ bottom: -100, left: -100, width: 500, height: 500, background: "rgba(10,110,180,0.20)" }} />
      <Blob style={{ top: "30%", left: "40%", width: 200, height: 200, background: "rgba(255,255,255,0.05)" }} />

      {/* ── Grid overlay ── */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />

      {/* ── Content ── */}
      <div style={{
        width: "100%", maxWidth: "var(--max-w)",
        margin: "0 auto", padding: "120px 5% 80px",
        display: "flex", alignItems: "center", gap: 60, flexWrap: "wrap",
        position: "relative", zIndex: 1,
      }}>
        {/* Left: text */}
        <div style={{ flex: "1 1 400px", color: "#fff" }}>
          <AvailableBadge />

          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
            fontWeight: 700, lineHeight: 1.15, marginBottom: 12,
            animation: "fadeInUp 0.7s ease 0.1s both",
          }}>
            {DOCTOR.name.split(" ")[0]} {DOCTOR.name.split(" ")[1]}<br />
            <span style={{ background: "var(--grad-text)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {DOCTOR.name.split(" ").slice(2).join(" ")}
            </span>
          </h1>

          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.8)", marginBottom: 20, fontWeight: 500, animation: "fadeInUp 0.7s ease 0.2s both" }}>
            Senior Anaesthesiologist · 20+ Years Experience · DNB Guide
          </p>

          <p style={{
            fontSize: 16, color: "rgba(255,255,255,0.7)", lineHeight: 1.75,
            maxWidth: 520, marginBottom: 36,
            animation: "fadeInUp 0.7s ease 0.3s both",
          }}>
            Providing expert perioperative care, critical care support and advanced
            anaesthesia techniques — ensuring patient safety, comfort and the best
            surgical outcomes.
          </p>

          {/* CTA buttons */}
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", animation: "fadeInUp 0.7s ease 0.4s both" }}>
            <Button onClick={() => setActive("Appointment")}>📅 Book Appointment</Button>
            <Button variant="ghost" onClick={() => setActive("About")}>👩‍⚕️ Learn More</Button>
          </div>

          {/* Pills */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 36, animation: "fadeInUp 0.7s ease 0.5s both" }}>
            {PILLS.map(tag => (
              <span key={tag} style={{
                background: "rgba(255,255,255,0.10)",
                border: "1px solid rgba(255,255,255,0.20)",
                borderRadius: 20, padding: "5px 14px",
                fontSize: 13, color: "rgba(255,255,255,0.85)",
              }}>{tag}</span>
            ))}
          </div>
        </div>

        {/* Right: Doctor card */}
        <div style={{ flex: "1 1 300px", display: "flex", justifyContent: "center", animation: "fadeInRight 0.8s ease 0.3s both" }}>
          <DoctorCard />
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div style={{
        position: "absolute", bottom: 30, left: "50%",
        transform: "translateX(-50%)",
        color: "rgba(255,255,255,0.5)", fontSize: 12, textAlign: "center",
        animation: "bounce 2s infinite",
      }}>
        <div>scroll</div>
        <div style={{ fontSize: 20, marginTop: 4 }}>↓</div>
      </div>

      <style>{`
        @keyframes fadeInUp   { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        @keyframes fadeInRight{ from { opacity:0; transform:translateX(40px); } to { opacity:1; transform:translateX(0); } }
        @keyframes bounce     { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(-10px)} }
      `}</style>
    </section>
  );
}

/* ── Sub-components ── */

function Blob({ style }) {
  return (
    <div style={{ position: "absolute", borderRadius: "50%", filter: "blur(60px)", ...style }} />
  );
}

function AvailableBadge() {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)",
      borderRadius: 24, padding: "6px 18px", marginBottom: 24,
      border: "1px solid rgba(255,255,255,0.20)",
      animation: "fadeInDown 0.6s ease",
    }}>
      <span style={{ color: "var(--accent)", fontSize: 13 }}>●</span>
      <span style={{ fontSize: 13, letterSpacing: 1 }}>AVAILABLE FOR CONSULTATION</span>
      <style>{`@keyframes fadeInDown { from { opacity:0; transform:translateY(-20px); } to { opacity:1; transform:translateY(0); } }`}</style>
    </div>
  );
}

function DoctorCard() {
  const grid = [["20+","Years Exp."],["5000+","Surgeries"],["2","Hospitals"],["DNB","Guide"]];
  return (
    <div style={{
      width: 320,
      background: "rgba(255,255,255,0.08)", backdropFilter: "blur(20px)",
      borderRadius: 28, border: "1px solid rgba(255,255,255,0.20)",
      padding: 32, textAlign: "center",
      boxShadow: "0 32px 80px rgba(0,0,0,0.30)",
    }}>
      <div style={{
        width: 140, height: 140, borderRadius: "50%", margin: "0 auto 20px",
        background: "var(--grad-primary)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 70, boxShadow: "0 16px 48px rgba(0,0,0,0.30)",
        border: "4px solid rgba(255,255,255,0.30)",
      }}>👩‍⚕️</div>
      <p style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 4 }}>
        {DOCTOR.name}
      </p>
      <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", marginBottom: 20 }}>
        {DOCTOR.qualifications}
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {grid.map(([v, l]) => (
          <div key={l} style={{ background: "rgba(255,255,255,0.08)", borderRadius: 14, padding: "12px 8px" }}>
            <p style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, color: "var(--accent)" }}>{v}</p>
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.6)" }}>{l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
