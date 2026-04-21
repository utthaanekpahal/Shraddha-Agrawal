// ─────────────────────────────────────────
//  pages/Appointment.jsx
// ─────────────────────────────────────────
import PageHero        from "../components/ui/PageHero";
import AppointmentForm from "../components/sections/AppointmentForm";

export default function Appointment() {
  return (
    <div style={{ paddingTop: 70 }}>
      <PageHero
        tag="CONSULTATION"
        title="Lets Connect"
        subtitle="Connect with Dr. Shraddha Agrawal at your convenience."
      />
      <div style={{ padding: "72px 5%" }}>
        <AppointmentForm />
      </div>
    </div>
  );
}
