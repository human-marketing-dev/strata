/* STRATA marketing site — integral model + investor stat strip (forest panel). */
import React from "react";
import { Stat } from "@/components/ui/Stat";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";

const STEPS = [
  { n: "01", icon: "map-pin", t: "Tierra", d: "Identificación y due diligence de suelo con potencial de plusvalía." },
  { n: "02", icon: "compass", t: "Diseño", d: "Arquitectura propia: cada proyecto nace en el estudio." },
  { n: "03", icon: "building", t: "Construcción", d: "Ejecución y control de obra bajo estándares medibles." },
  { n: "04", icon: "layers", t: "Operación", d: "Comercialización y operación del activo en el largo plazo." },
];

export function ModelSection() {
  return (
    <section
      id="modelo"
      style={{
        background: "var(--surface-brand)",
        color: "var(--text-on-dark)",
        padding: "var(--section-y) var(--space-8)",
      }}
    >
      <div style={{ maxWidth: "var(--container-page)", margin: "0 auto" }}>
        <div style={{ maxWidth: "680px", marginBottom: "var(--space-9)" }}>
          <Eyebrow tone="onDark" rule style={{ marginBottom: "var(--space-4)" }}>
            Modelo integral
          </Eyebrow>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(32px,4vw,52px)",
              letterSpacing: "-0.02em",
              margin: "0 0 var(--space-4)",
              lineHeight: 1.05,
            }}
          >
            De la tierra a la operación, bajo un mismo techo.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "19px",
              lineHeight: 1.6,
              color: "var(--text-on-dark-muted)",
              margin: 0,
            }}
          >
            Controlamos cada capa de la cadena de valor. Eso nos permite proteger el diseño, los tiempos y el retorno
            —proyecto tras proyecto.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 0,
            borderTop: "1px solid var(--border-on-dark)",
          }}
        >
          {STEPS.map((s, i) => (
            <div
              key={s.n}
              style={{
                padding: "var(--space-6) var(--space-5) var(--space-6) 0",
                borderRight: i < 3 ? "1px solid var(--border-on-dark)" : "none",
                paddingLeft: i > 0 ? "var(--space-5)" : 0,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "var(--space-6)",
                }}
              >
                <Icon name={s.icon} size={28} color="var(--wood-300)" stroke={1.4} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "rgba(244,240,232,0.5)" }}>
                  {s.n}
                </span>
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "22px", margin: "0 0 10px" }}>
                {s.t}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "15px",
                  lineHeight: 1.55,
                  color: "var(--text-on-dark-muted)",
                  margin: 0,
                }}
              >
                {s.d}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "var(--space-6)",
            marginTop: "var(--space-10)",
            paddingTop: "var(--space-8)",
            borderTop: "1px solid var(--border-on-dark)",
          }}
        >
          <Stat value="10+" label="Años" sublabel="de trayectoria" tone="inverse" />
          <Stat value="4" label="Segmentos" sublabel="de inversión" tone="inverse" />
          <Stat value="320K m²" label="Desarrollados" sublabel="acumulados" tone="inverse" />
          <Stat value="100%" label="Diseño propio" sublabel="in-house" tone="inverse" />
        </div>
      </div>
    </section>
  );
}
