/* STRATA marketing site — full-bleed hero with a vertical protection gradient. */
import React from "react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";

export function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "92vh",
        display: "flex",
        alignItems: "flex-end",
        overflow: "hidden",
        marginTop: "-84px",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/imagery/hero-tower.jpg"
        alt="STRATA — Tonalá 15"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(16,32,24,0.55) 0%, rgba(16,32,24,0.15) 38%, rgba(16,32,24,0.82) 100%)",
        }}
      />
      <div style={{ position: "relative", width: "100%", padding: "0 var(--space-8) var(--space-10)" }}>
        <div style={{ maxWidth: "var(--container-page)", margin: "0 auto" }}>
        <div style={{ maxWidth: "1000px" }}>
        <Eyebrow tone="onDark" rule style={{ marginBottom: "var(--space-5)" }}>
          Desarrolladora · Fundada por arquitectos
        </Eyebrow>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(48px, 7vw, 88px)",
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            color: "var(--neutral-0)",
            margin: "0 0 var(--space-5)",
            textWrap: "balance",
          }}
        >
          Capas de valor,
          <br />
          construidas para perdurar.
        </h1>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "20px",
            lineHeight: 1.5,
            color: "rgba(244,240,232,0.88)",
            maxWidth: "560px",
            margin: "0 0 var(--space-7)",
          }}
        >
          Diez años desarrollando proyectos de alto valor —del diseño arquitectónico a la operación— en residencial,
          industrial y hospitalidad.
        </p>
        <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
          <Button variant="inverse" size="lg" href="#portafolio" rightIcon={<Icon name="arrow-right" size={16} />}>
            Conoce el portafolio
          </Button>
          <Button
            variant="ghost"
            size="lg"
            href="#modelo"
            style={{ color: "var(--neutral-0)", boxShadow: "inset 0 0 0 1px rgba(244,240,232,0.4)" }}
          >
            As we evolve, spaces should too
          </Button>
        </div>
        </div>
        </div>
      </div>
    </section>
  );
}
