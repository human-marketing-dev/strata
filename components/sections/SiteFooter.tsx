/* STRATA marketing site — dark footer with logo, link columns, and legal line. */
import React from "react";
import { Icon } from "@/components/ui/Icon";

const COLUMNS: Array<[string, string[]]> = [
  ["Portafolio", ["Residencial vertical", "Vivienda horizontal", "Industrial", "Hospitalidad"]],
  ["Compañía", ["Nosotros", "Modelo integral", "Equipo", "Prensa"]],
  ["Inversión", ["Oportunidades", "Dossier 2026", "Contacto"]],
];

export function SiteFooter() {
  return (
    <footer
      style={{
        background: "var(--neutral-900)",
        color: "var(--text-on-dark)",
        padding: "var(--space-10) var(--space-8) var(--space-6)",
      }}
    >
      <div style={{ maxWidth: "var(--container-page)", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr repeat(3, 1fr)",
            gap: "var(--space-8)",
            paddingBottom: "var(--space-9)",
            borderBottom: "1px solid var(--border-on-dark)",
          }}
        >
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/logos/strata-horizontal-white.png"
              alt="STRATA Desarrollos"
              style={{ height: "48px", width: "auto", marginBottom: "var(--space-5)" }}
            />
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "17px",
                color: "var(--wood-300)",
                margin: 0,
                maxWidth: "300px",
              }}
            >
              As we evolve, spaces should too.
            </p>
          </div>
          {COLUMNS.map(([h, items]) => (
            <div key={h}>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                  fontSize: "11px",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "rgba(244,240,232,0.5)",
                  marginBottom: "var(--space-4)",
                }}
              >
                {h}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                {items.map((it) => (
                  <a
                    key={it}
                    href="#contacto"
                    style={{ fontFamily: "var(--font-serif)", fontSize: "15px", color: "var(--text-on-dark-muted)", textDecoration: "none" }}
                  >
                    {it}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "var(--space-5)",
            flexWrap: "wrap",
            gap: "var(--space-4)",
          }}
        >
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "rgba(244,240,232,0.45)" }}>
            © 2026 STRATA, S.A. de C.V. · Antes TREVALDE
          </span>
          <div style={{ display: "flex", gap: "var(--space-4)" }}>
            <a href="#" aria-label="Instagram" style={{ color: "var(--text-on-dark-muted)" }}>
              <Icon name="instagram" size={18} color="currentColor" />
            </a>
            <a href="#" aria-label="LinkedIn" style={{ color: "var(--text-on-dark-muted)" }}>
              <Icon name="linkedin" size={18} color="currentColor" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
