"use client";

/* STRATA marketing site — sticky header: transparent (white lockup + white nav)
   over the dark hero, frosts to a cream bar (black lockup + dark nav) on scroll. */
import React from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

const LINKS = ["Portafolio", "Modelo", "Nosotros", "Contacto"];

export function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkColor = scrolled ? "var(--text-body)" : "var(--neutral-0)";

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        height: scrolled ? "68px" : "84px",
        padding: "0 var(--space-8)",
        background: scrolled ? "rgba(251,249,244,0.86)" : "transparent",
        backdropFilter: scrolled ? "saturate(120%) blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "saturate(120%) blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border-hair)" : "1px solid transparent",
        transition: "all var(--dur-base) var(--ease-out)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container-page)",
          height: "100%",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
      <a href="#top" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={scrolled ? "/assets/logos/strata-horizontal-black.png" : "/assets/logos/strata-horizontal-white.png"}
          alt="STRATA Desarrollos"
          style={{ height: scrolled ? "26px" : "30px", width: "auto", transition: "height var(--dur-base) var(--ease-out)" }}
        />
      </a>
      <nav style={{ display: "flex", alignItems: "center", gap: "var(--space-7)" }}>
        {LINKS.map((l) => (
          <a
            key={l}
            href={"#" + l.toLowerCase()}
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: "12px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: linkColor,
              textDecoration: "none",
              transition: "color var(--dur-base) var(--ease-out)",
            }}
          >
            {l}
          </a>
        ))}
        <Button size="sm" variant="primary" href="#contacto" rightIcon={<Icon name="arrow-right" size={14} />}>
          Agendar visita
        </Button>
      </nav>
      </div>
    </header>
  );
}
