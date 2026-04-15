// ─────────────────────────────────────────────────────────
//  components/ui/Button.jsx
//  Reusable button with two variants: "primary" | "ghost"
// ─────────────────────────────────────────────────────────

const STYLES = {
  primary: {
    base: {
      background: "var(--grad-primary)",
      color: "#fff",
      border: "none",
      boxShadow: "0 6px 24px rgba(10,110,180,0.30)",
    },
    hover: {
      transform: "translateY(-2px)",
      boxShadow: "0 12px 36px rgba(10,110,180,0.40)",
    },
  },
  ghost: {
    base: {
      background: "rgba(255,255,255,0.12)",
      color: "#fff",
      border: "1px solid rgba(255,255,255,0.30)",
      backdropFilter: "blur(8px)",
    },
    hover: { background: "rgba(255,255,255,0.22)" },
  },
  outline: {
    base: {
      background: "var(--bg)",
      color: "var(--text-dark)",
      border: "1px solid var(--border-light)",
    },
    hover: { background: "#e8f0fa" },
  },
};

export default function Button({
  children,
  variant = "primary",
  onClick,
  href,
  target,
  rel,
  style = {},
}) {
  const v = STYLES[variant] || STYLES.primary;

  const shared = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderRadius: "var(--radius-btn)",
    padding: "13px 32px",
    fontFamily: "var(--font-body)",
    fontWeight: 600,
    fontSize: 15,
    cursor: "pointer",
    transition: "all 0.22s ease",
    ...v.base,
    ...style,
  };

  const handleEnter = (e) => Object.assign(e.currentTarget.style, v.hover);
  const handleLeave = (e) => Object.assign(e.currentTarget.style, v.base);

  if (href) {
    return (
      <a href={href} target={target} rel={rel} style={shared}
        onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} style={shared}
      onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      {children}
    </button>
  );
}
