// ────────────────────────────────────────────────────
//  components/layout/Navbar.jsx
//  Transparent → frosted-glass sticky navigation bar.
//  Fixed scroll + multi-section behavior
// ────────────────────────────────────────────────────

import { useState, useEffect } from "react";
import { NAV_LINKS } from "../../data/constants";
import Button from "../ui/Button";

export default function Navbar({ active, setActive }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = active === "Home";

  // ✅ Handle scroll (ONLY once)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);

    window.addEventListener("scroll", onScroll);
    onScroll(); // ✅ set initial state correctly

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ✅ Recalculate when page changes
  useEffect(() => {
    setScrolled(window.scrollY > 60);
  }, [active]);

  // ✅ Navigation handler
  const navigate = (page) => {
    setActive(page);
    setMenuOpen(false);

    // Reset scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ✅ Navbar style logic
  const navStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    height: "var(--nav-h)",
    padding: "0 5%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    background: (!isHome || scrolled)
      ? "rgba(255,255,255,0.97)"
      : "transparent",

    backdropFilter: (!isHome || scrolled)
      ? "blur(12px)"
      : "none",

    boxShadow: (!isHome || scrolled)
      ? "0 2px 32px rgba(10,110,180,0.10)"
      : "none",

    transition: "all 0.4s ease",
  };

  const textColor = (!isHome || scrolled)
    ? "var(--text-dark)"
    : "#fff";

  return (
    <>
      <nav style={navStyle}>
        
        {/* ── Logo ── */}
        <button
          onClick={() => navigate("Home")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            background: "none",
            border: "none"
          }}
        >
          <div style={{
            width: 38,
            height: 38,
            borderRadius: "50%",
            background: "var(--grad-primary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18,
            flexShrink: 0,
          }}>
            👩‍⚕️
          </div>

          <div style={{ textAlign: "left" }}>
            <div style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 15,
              color: textColor,
              lineHeight: 1.1
            }}>
              Dr. Shraddha Agrawal
            </div>

            <div style={{
              fontSize: 10,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              color: (!isHome || scrolled)
                ? "var(--primary)"
                : "rgba(255,255,255,0.8)"
            }}>
              Anaesthesiologist
            </div>
          </div>
        </button>

        {/* ── Desktop Nav ── */}
        <div
          className="desktop-nav"
          style={{ display: "flex", gap: 8, alignItems: "center" }}
        >
          {NAV_LINKS.map(link => (
            <button
              key={link}
              onClick={() => navigate(link)}
              style={{
                background: active === link
                  ? "var(--grad-primary)"
                  : "transparent",

                color: active === link
                  ? "#fff"
                  : textColor,

                border: "none",
                borderRadius: 24,
                padding: "7px 18px",
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                fontSize: 13.5,
                transition: "all 0.25s",
              }}
            >
              {link}
            </button>
          ))}

          <Button
            onClick={() => navigate("Appointment")}
            style={{ padding: "9px 22px", fontSize: 13.5 }}
          >
            Book Now
          </Button>
        </div>

        {/* ── Hamburger ── */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(m => !m)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            fontSize: 24,
            color: textColor
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* ── Mobile Drawer ── */}
      {menuOpen && (
        <div style={{
          position: "fixed",
          top: "var(--nav-h)",
          left: 0,
          right: 0,
          zIndex: 999,
          background: "rgba(255,255,255,0.98)",
          backdropFilter: "blur(12px)",
          padding: "20px 5%",
          display: "flex",
          flexDirection: "column",
          gap: 8,
          boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
        }}>
          {NAV_LINKS.map(link => (
            <button
              key={link}
              onClick={() => navigate(link)}
              style={{
                background: active === link
                  ? "var(--grad-primary)"
                  : "transparent",

                color: active === link
                  ? "#fff"
                  : "var(--text-dark)",

                border: "1px solid",
                borderColor: active === link
                  ? "transparent"
                  : "var(--border-light)",

                borderRadius: 12,
                padding: "12px 20px",
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                fontSize: 15,
                textAlign: "left",
              }}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </>
  );
}