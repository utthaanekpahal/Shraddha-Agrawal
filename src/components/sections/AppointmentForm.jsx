// ─────────────────────────────────────────────────────────
//  components/sections/AppointmentForm.jsx
//  Booking form + WhatsApp button with success state.
// ─────────────────────────────────────────────────────────
import { useState } from "react";
import { DOCTOR } from "../../data/constants";
import Button from "../ui/Button";
import AnimatedSection from "../ui/AnimatedSection";

const FIELDS = [
  { label: "Full Name *",      name: "name",  type: "text",  placeholder: "Your full name" },
  { label: "Phone Number *",   name: "phone", type: "tel",   placeholder: "+91 XXXXX XXXXX" },
  { label: "Email Address",    name: "email", type: "email", placeholder: "your@email.com" },
  { label: "Preferred Date",   name: "date",  type: "date",  placeholder: "" },
];

const INITIAL = { name: "", phone: "", email: "", date: "", msg: "" };

export default function AppointmentForm() {
  const [form, setForm] = useState(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = () => {
    if (!form.name || !form.phone) { alert("Please fill in your name and phone number."); return; }
    setSubmitted(true);
  };

  const waMsg = encodeURIComponent(`Hi, I want to book an appointment with Dr. Shraddha Agrawal.\nName: ${form.name || "—"}\nPhone: ${form.phone || "—"}`);
  const waHref = `https://wa.me/${DOCTOR.whatsapp}?text=${waMsg}`;

  if (submitted) return <SuccessState name={form.name} onReset={() => { setSubmitted(false); setForm(INITIAL); }} />;

  return (
    <AnimatedSection>
      <div style={{
        background: "var(--white)", borderRadius: 28, padding: 48,
        boxShadow: "var(--shadow-md)", border: "1px solid var(--border)",
        maxWidth: 700, margin: "0 auto",
      }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "var(--text-dark)", fontWeight: 700, marginBottom: 32 }}>
          Contact Form
        </h2>

        {FIELDS.map(f => (
          <div key={f.name} style={{ marginBottom: 20 }}>
            <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#374151", marginBottom: 8 }}>
              {f.label}
            </label>
            <input
              name={f.name} type={f.type} placeholder={f.placeholder}
              value={form[f.name]} onChange={handleChange}
              style={{
                width: "100%", padding: "13px 16px", borderRadius: 12,
                border: "1.5px solid var(--border-light)",
                fontSize: 15, color: "var(--text-dark)", outline: "none",
                background: "#fafafa", boxSizing: "border-box",
                transition: "border-color 0.2s",
              }}
              onFocus={e => e.target.style.borderColor = "var(--primary)"}
              onBlur={e => e.target.style.borderColor = "var(--border-light)"}
            />
          </div>
        ))}

        {/* Message */}
        <div style={{ marginBottom: 28 }}>
          <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#374151", marginBottom: 8 }}>
            Message / Reason for 
          </label>
          <textarea
            name="msg" value={form.msg} onChange={handleChange} rows={4}
            placeholder="Briefly describe your concern or procedure..."
            style={{
              width: "100%", padding: "13px 16px", borderRadius: 12,
              border: "1.5px solid var(--border-light)",
              fontSize: 15, color: "var(--text-dark)", outline: "none",
              resize: "vertical", background: "#fafafa", boxSizing: "border-box",
              transition: "border-color 0.2s",
            }}
            onFocus={e => e.target.style.borderColor = "var(--primary)"}
            onBlur={e => e.target.style.borderColor = "var(--border-light)"}
          />
        </div>

        {/* Actions */}
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <Button onClick={handleSubmit} style={{ flex: 1 }}>📅 Submit Request</Button>
          <Button href={waHref} target="_blank" rel="noopener noreferrer"
            style={{ flex: 1, background: "#25D366", boxShadow: "0 6px 24px rgba(37,211,102,0.35)" }}>
            💬 WhatsApp Booking
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}

function SuccessState({ name, onReset }) {
  return (
    <AnimatedSection>
      <div style={{ textAlign: "center", padding: 60 }}>
        <div style={{ fontSize: 72, marginBottom: 20 }}>✅</div>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: 28, color: "var(--text-dark)", marginBottom: 12 }}>
          Request Received!
        </h2>
        <p style={{ color: "var(--text-muted)", fontSize: 16, marginBottom: 28 }}>
          Thank you, {name}. We'll contact you shortly to confirm your appointment.
        </p>
        <Button onClick={onReset}>Book Another</Button>
      </div>
    </AnimatedSection>
  );
}
