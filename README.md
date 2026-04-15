# Dr. Shraddha Agrawal – Medical Website

A production-grade, fully responsive React website for Dr. Shraddha Agrawal,  
Senior Anaesthesiologist, Raipur.

---

## 📁 Project Structure

```
dr-shraddha-website/
├── index.html                        ← HTML entry point
├── vite.config.js                    ← Vite bundler config
├── package.json
└── src/
    ├── main.jsx                      ← React root mount
    ├── App.jsx                       ← Root component + client-side router
    │
    ├── data/
    │   └── constants.js              ← ⭐ ALL site content lives here
    │
    ├── styles/
    │   └── globals.css               ← CSS variables, resets, utilities
    │
    ├── hooks/
    │   └── useIntersection.js        ← Scroll-intersection observer hook
    │
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.jsx            ← Sticky transparent → frosted nav
    │   │   ├── Footer.jsx            ← 4-column footer
    │   │   └── WhatsAppButton.jsx    ← Fixed floating WhatsApp CTA
    │   │
    │   ├── ui/                       ← Reusable primitives
    │   │   ├── AnimatedSection.jsx   ← Scroll-triggered fade-up wrapper
    │   │   ├── Button.jsx            ← primary / ghost / outline variants
    │   │   ├── PageHero.jsx          ← Dark gradient page banner
    │   │   └── SectionHeader.jsx    ← Centered tag + title + subtitle
    │   │
    │   └── sections/                 ← Page-level sections
    │       ├── HeroSection.jsx       ← Full-viewport home hero
    │       ├── StatsBar.jsx          ← Animated stat counters
    │       ├── ServicesGrid.jsx      ← Service cards grid
    │       ├── WhyChooseSection.jsx  ← USP dark-gradient grid
    │       ├── CTABanner.jsx         ← Home call-to-action strip
    │       ├── FAQSection.jsx        ← Accordion FAQ
    │       └── AppointmentForm.jsx   ← Booking form + WhatsApp
    │
    └── pages/
        ├── Home.jsx                  ← Assembles home sections
        ├── About.jsx                 ← Doctor bio, education, specializations
        ├── Services.jsx              ← Full services + FAQ
        ├── Hospitals.jsx             ← Hospital cards + map CTA
        ├── Appointment.jsx           ← Booking form page
        └── Contact.jsx               ← Contact cards + LinkedIn
```

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server  (opens at http://localhost:5173)
npm run dev

# 3. Production build
npm run build

# 4. Preview production build locally
npm run preview
```

---

## ✏️ How to Update Content

**All website text, links, and data live in one file:**

```
src/data/constants.js
```

| What to update              | Key in constants.js   |
|-----------------------------|-----------------------|
| Doctor name / phone / email | `DOCTOR`              |
| WhatsApp number             | `DOCTOR.whatsapp`     |
| Navigation links            | `NAV_LINKS`           |
| Services list               | `SERVICES`            |
| Hospital details            | `HOSPITALS`           |
| Stat counters               | `STATS`               |
| FAQ questions               | `FAQS`                |
| Education timeline          | `EDUCATION`           |
| Specializations tags        | `SPECIALIZATIONS`     |
| Why-choose cards            | `WHY_CHOOSE`          |
| Contact info cards          | `CONTACT_CARDS`       |

---

## 🎨 How to Change Theme Colors

All colors are CSS variables in `src/styles/globals.css`:

```css
:root {
  --primary:      #0A6EB4;   /* Medical blue  */
  --secondary:    #2BB673;   /* Health green  */
  --primary-dark: #0A2540;   /* Dark navy     */
  --accent:       #7ee8a2;   /* Mint accent   */
}
```

Change these four variables and the entire site updates instantly.

---

## 📦 Tech Stack

| Tool        | Purpose                  |
|-------------|--------------------------|
| React 18    | UI framework             |
| Vite 5      | Dev server + bundler     |
| CSS Variables | Theming system         |
| Google Fonts | Playfair Display + DM Sans |

No external UI libraries — pure React + CSS.

---

## 📝 Pending Content (fill before launch)

- [ ] Replace `DOCTOR.phone` with real phone number  
- [ ] Replace `DOCTOR.whatsapp` with real WhatsApp number  
- [ ] Replace `DOCTOR.email` with real email  
- [ ] Add exact MBBS college + year in `EDUCATION`  
- [ ] Confirm MD / DA / DNB exact qualification in `DOCTOR.qualifications`  
- [ ] Upload professional HD photo (replace emoji in `HeroSection.jsx` + `About.jsx`)  
- [ ] Add Medical Council registration number  
- [ ] Add real consultation timings in `CONTACT_CARDS`  
- [ ] Update LinkedIn URL in `DOCTOR.linkedin`  
