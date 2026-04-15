// ────────────────────────────────────────────────
//  components/layout/WhatsAppButton.jsx
//  Fixed floating WhatsApp CTA button (bottom-right)
// ────────────────────────────────────────────────
import { DOCTOR } from "../../data/constants";

export default function WhatsAppButton() {
  const msg = encodeURIComponent("Hi, I want to book an appointment with Dr. Shraddha Agrawal");
  const href = `https://wa.me/${DOCTOR.whatsapp}?text=${msg}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title="Chat on WhatsApp"
      style={{
        position: "fixed", bottom: 28, right: 28, zIndex: 9999,
        width: 56, height: 56, borderRadius: "50%",
        background: "#25D366", color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 28, boxShadow: "0 8px 32px rgba(37,211,102,0.45)",
        transition: "transform 0.22s ease",
      }}
      onMouseEnter={e => e.currentTarget.style.transform = "scale(1.12)"}
      onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
    >
      💬
    </a>
  );
}
