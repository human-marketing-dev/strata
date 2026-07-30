/* STRATA marketing site — portfolio grid (Card + Badge). */
import React from "react";
import { Card } from "@/components/ui/Card";
import { Badge, type BadgeProps } from "@/components/ui/Badge";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";

interface Project {
  name: string;
  place: string;
  type: string;
  img: string;
  badge: string;
  tone: NonNullable<BadgeProps["tone"]>;
}

const PROJECTS: Project[] = [
  { name: "Tonalá 15", place: "Guadalajara, JAL", type: "Residencial vertical", img: "/assets/imagery/tonala-facade.jpg", badge: "Preventa", tone: "brand" },
  { name: "Bosque Real", place: "Zapopan, JAL", type: "Vivienda horizontal", img: "/assets/imagery/vegetation.jpg", badge: "En obra", tone: "forest" },
  { name: "Nave Industrial Norte", place: "El Salto, JAL", type: "Industrial", img: "/assets/imagery/aerial.jpg", badge: "Entregado", tone: "outline" },
  { name: "Casa Madera", place: "Tlajomulco, JAL", type: "Hospitalidad", img: "/assets/imagery/hospitality.jpg", badge: "Preventa", tone: "brand" },
  { name: "Atrio Lofts", place: "Guadalajara, JAL", type: "Residencial vertical", img: "/assets/imagery/interior-wood.jpg", badge: "En obra", tone: "forest" },
  { name: "Distrito Verde", place: "Zapopan, JAL", type: "Uso mixto", img: "/assets/imagery/amenities.jpg", badge: "Próximamente", tone: "wood" },
];

export function Portfolio() {
  return (
    <section id="portafolio" style={{ background: "var(--bg-page)", padding: "var(--section-y) var(--space-8)" }}>
      <div style={{ maxWidth: "var(--container-page)", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "var(--space-8)",
            gap: "var(--space-6)",
            flexWrap: "wrap",
          }}
        >
          <div>
            <Eyebrow rule style={{ marginBottom: "var(--space-3)" }}>
              Portafolio · 2026
            </Eyebrow>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "clamp(32px,4vw,52px)",
                letterSpacing: "-0.02em",
                color: "var(--text-strong)",
                margin: 0,
                maxWidth: "640px",
                lineHeight: 1.05,
              }}
            >
              Cuatro segmentos, un mismo estándar.
            </h2>
          </div>
          <a
            href="#portafolio"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: "12px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--text-brand)",
              textDecoration: "none",
              paddingBottom: "8px",
            }}
          >
            Ver todos <Icon name="arrow-up-right" size={15} color="var(--text-brand)" />
          </a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))", gap: "var(--space-5)" }}>
          {PROJECTS.map((p) => (
            <Card key={p.name} media={p.img} mediaAlt={p.name} mediaHeight={240} interactive href="#contacto">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px" }}>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "22px",
                      letterSpacing: "-0.02em",
                      color: "var(--text-strong)",
                      margin: "0 0 6px",
                    }}
                  >
                    {p.name}
                  </h3>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--text-muted)" }}>
                    <Icon name="map-pin" size={14} color="var(--text-muted)" />
                    <span style={{ fontFamily: "var(--font-serif)", fontSize: "14px" }}>{p.place}</span>
                  </div>
                </div>
                <Badge tone={p.tone}>{p.badge}</Badge>
              </div>
              <div
                style={{
                  marginTop: "var(--space-4)",
                  paddingTop: "var(--space-4)",
                  borderTop: "1px solid var(--border-hair)",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                  fontSize: "11px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--text-accent)",
                }}
              >
                {p.type}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
