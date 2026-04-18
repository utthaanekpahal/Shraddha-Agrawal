// ─────────────────────────────────────────────
//  constants.js  –  All site-wide static data
//  Edit this file to update content site-wide
// ─────────────────────────────────────────────

export const DOCTOR = {
  name: "Dr. Shraddha Agrawal",
  title: "Senior Anaesthesiologist",
  qualifications: "MD Anaesthesiology",
  experience: "20+",
  phone: "919827407526",         // ← replace with real number
  whatsapp: "919827407526",      // ← replace with real number
  email: "doctor@example.com",   // ← replace with real email
  linkedin: "https://www.linkedin.com/in/dr-shraddha-agrawal-a65549170?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  location: "Raipur, Chhattisgarh",
  address: "C/o MMI Narayana Multispeciality Hospital, Pachpedi Naka, Near Lalpur, Dhamtari Road, Raipur – 492001, Chhattisgarh",
};

export const NAV_LINKS = ["Home", "About", "Services", "Hospitals", "Connect", "Contact"];

export const SERVICES = [
  {
    icon: "🫁",
    title: "General Anaesthesia",
    desc: "Safe, precise administration for major and complex surgical procedures with complete monitoring.",
  },
  {
    icon: "💉",
    title: "Regional Anaesthesia",
    desc: "Expert spinal and epidural techniques ensuring pain-free procedures with faster recovery.",
  },
  {
    icon: "🏥",
    title: "Critical Care Support",
    desc: "Advanced ICU monitoring and life-support management for high-dependency patients.",
  },
  {
    icon: "⚕️",
    title: "High-Risk Surgery",
    desc: "Specialized anaesthesia protocols for complex, multi-system surgical patients.",
  },
  {
    icon: "🚨",
    title: "Emergency Anaesthesia",
    desc: "Immediate expert response for trauma cases and time-critical surgical emergencies.",
  },
  {
    icon: "🧠",
    title: "Pain Management",
    desc: "Evidence-based perioperative and chronic pain management strategies for patient comfort.",
  },
];

export const HOSPITALS = [
  {
    name: "MMI Narayana Multispeciality Hospital",
    location: "Pachpedi Naka, Raipur – 492001",
    type: "Corporate Hospital",
    desc: "State-of-the-art infrastructure with advanced OT suites, cardiac, neuro and orthopedic surgical facilities.",
    color: "#0A6EB4",
    icon: "🏥",
    mapsUrl: "https://maps.google.com/?q=MMI+Narayana+Multispeciality+Hospital+Raipur",
  },
  {
    name: "DKS Super Speciality Hospital",
    location: "Raipur, Chhattisgarh",
    type: "Government Super Speciality",
    desc: "Premier government super-speciality institution providing advanced tertiary care across multiple disciplines.",
    color: "#2BB673",
    icon: "🏛️",
    mapsUrl: "https://maps.google.com/?q=DKS+Super+Speciality+Hospital+Raipur",
  },
];

export const STATS = [
  { key: "exp",  target: 20,   suffix: "+",  label: "Years Experience",      icon: "⏰" },
  { key: "surg", target: 5000, suffix: "+",  label: "Surgeries Assisted",    icon: "🩺" },
  { key: "hosp", target: 2,    suffix: "",   label: "Premier Hospitals",     icon: "🏥" },
  { key: "pg",   target: 100,  suffix: "+",  label: "Students Mentored",     icon: "🎓" },
];

export const FAQS = [
  {
    q: "Is anaesthesia safe?",
    a: "Modern anaesthesia is extremely safe. With over 20+ years of experience and rigorous pre-operative assessment, Dr. Agrawal ensures every patient receives the safest possible care tailored to their medical profile.",
  },
  {
    q: "Will I feel pain during surgery?",
    a: "No. Whether general or regional anaesthesia is used, complete pain relief is achieved. Dr. Agrawal carefully selects and monitors the right technique for each procedure.",
  },
  {
    q: "How long does anaesthesia last?",
    a: "Duration is precisely calibrated to the procedure length. You'll be continuously monitored throughout and recovery is managed until you're fully alert and stable.",
  },
  {
    q: "What are the side effects?",
    a: "Mild nausea or grogginess may occur post-operatively. A thorough pre-anaesthesia evaluation minimizes any risks and a personalized plan is made for each patient.",
  },
];

export const EDUCATION = [
  {
    year: "1999 – 2002",
    degree: "Postgraduate Training — Anaesthesiology",
    college: "Gandhi Medical College, Bhopal",
  },
  {
    year: "Before 1999",
    degree: "MBBS",
    college: "Medical College (details to be updated)",
  },
];

export const SPECIALIZATIONS = [
  "General Anaesthesia",
  "Regional Anaesthesia",
  "Critical Care",
  "High-Risk Surgery",
  "ICU Sedation",
  "Obstetric Anaesthesia",
  "Pain Management",
  "Emergency Anaesthesia",
];

export const WHY_CHOOSE = [
  { icon: "✔", title: "20+ Years Clinical Experience", desc: "Extensive hands-on experience across diverse surgical specialties." },
  { icon: "🎓", title: "PG Teacher & DNB Guide", desc: "Actively shaping the next generation of anaesthesiologists." },
  { icon: "🏥", title: "Top Hospital Affiliations", desc: "Practicing at both corporate and government super-speciality centres." },
  { icon: "❤️", title: "Patient-First Approach", desc: "Every decision is driven by patient safety and comfort." },
  { icon: "⚡", title: "High-Risk Case Expertise", desc: "Specialized in complex, multi-organ, and emergency cases." },
  { icon: "📊", title: "Evidence-Based Practice", desc: "Protocols grounded in latest anaesthesia research and guidelines." },
];

export const CONTACT_CARDS = [
  { icon: "📍", title: "Address",              color: "#0A6EB4", detail: "MMI Narayana Multispeciality Hospital,\nPachpedi Naka, Near Lalpur,\nDhamtari Road, Raipur – 492001, CG" },
  { icon: "📞", title: "Phone",                color: "#2BB673", detail: "Contact number to be updated.\nPlease visit the hospital directly." },
  { icon: "📧", title: "Email",                color: "#7c3aed", detail: "Email address to be updated.\nAppointments via WhatsApp available." },
  { icon: "⏰", title: "Consultation Hours",   color: "#f59e0b", detail: "MMI Narayana: Mon–Sat\nDKS Hospital: As per schedule\nEmergencies: 24/7" },
];
