"use client";

/* STRATA marketing site — sticky header: transparent over the hero, frosts on scroll. */
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

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 var(--space-8)",
        height: scrolled ? "68px" : "84px",
        background: scrolled ? "rgba(251,249,244,0.86)" : "transparent",
        backdropFilter: scrolled ? "saturate(120%) blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "saturate(120%) blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border-hair)" : "1px solid transparent",
        transition: "all var(--dur-base) var(--ease-out)",
      }}
    >
      <a href="#top" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/logos/strata-mark-charcoal.png" alt="STRATA" style={{ height: "34px", width: "auto" }} />
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "20px",
            letterSpacing: "0.04em",
            color: "var(--text-strong)",
          }}
        >
          STRATA
        </span>
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
              color: "var(--text-body)",
              textDecoration: "none",
            }}
          >
            {l}
          </a>
        ))}
        <Button size="sm" variant="primary" href="#contacto" rightIcon={<Icon name="arrow-right" size={14} />}>
          Agendar visita
        </Button>
      </nav>
    </header>
  );
}
