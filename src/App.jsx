// ─────────────────────────────────────────────────────────
//  App.jsx  –  Root component / simple client-side router
// ─────────────────────────────────────────────────────────
import { useState } from "react";

// Layout
import Navbar         from "./components/layout/Navbar";
import Footer         from "./components/layout/Footer";
import WhatsAppButton from "./components/layout/WhatsAppButton";

// Pages
import Home        from "./pages/Home";
import About       from "./pages/About";
import Services    from "./pages/Services";
import Hospitals   from "./pages/Hospitals";
import Connect from "./pages/Appointment";
import Contact     from "./pages/Contact";

// Global styles
import "./styles/globals.css";

const PAGES = { Home, About, Services, Hospitals, Connect, Contact };

export default function App() {
  const [activePage, setActivePage] = useState("Home");

  /** Navigate + scroll to top */
  const navigate = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const Page = PAGES[activePage] || Home;

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Navbar active={activePage} setActive={navigate} />

      <main>
        <Page setActive={navigate} />
      </main>

      <Footer setActive={navigate} />

      <WhatsAppButton />
    </div>
  );
}
