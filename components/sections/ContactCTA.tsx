"use client";

/* STRATA marketing site — contact CTA with form (Input + Button). */
import React from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";

const CONTACT: Array<[string, string]> = [
  ["phone", "+52 33 1234 5678"],
  ["mail", "inversion@strata.mx"],
  ["map-pin", "Av. Américas 1500, Guadalajara"],
];

export function ContactCTA() {
  const [sent, setSent] = React.useState(false);

  return (
    <section id="contacto" style={{ background: "var(--bg-page)", padding: "var(--section-y) var(--space-8)" }}>
      <div
        style={{
          maxWidth: "var(--container-page)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 0.9fr)",
          gap: "var(--space-10)",
          alignItems: "start",
        }}
      >
        <div>
          <Eyebrow rule style={{ marginBottom: "var(--space-4)" }}>
            Contacto · Inversión
          </Eyebrow>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(30px,3.6vw,46px)",
              letterSpacing: "-0.02em",
              color: "var(--text-strong)",
              margin: "0 0 var(--space-4)",
              lineHeight: 1.05,
              textWrap: "balance",
            }}
          >
            Hablemos de tu próximo proyecto.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "18px",
              lineHeight: 1.6,
              color: "var(--text-body)",
              maxWidth: "440px",
              margin: "0 0 var(--space-7)",
            }}
          >
            Agenda una visita a Tonalá 15 o solicita el dossier de inversión. Te respondemos en menos de 24 horas.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            {CONTACT.map(([ic, tx]) => (
              <div key={tx} style={{ display: "flex", alignItems: "center", gap: "12px", color: "var(--text-body)" }}>
                <Icon name={ic} size={18} color="var(--text-brand)" />
                <span style={{ fontFamily: "var(--font-serif)", fontSize: "16px" }}>{tx}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            background: "var(--surface)",
            boxShadow: "inset 0 0 0 1px var(--border-hair), var(--shadow-md)",
            borderRadius: "var(--radius-sm)",
            padding: "var(--space-7)",
          }}
        >
          {sent ? (
            <div
              style={{
                minHeight: "320px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "12px",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "999px",
                  background: "var(--green-50)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon name="arrow-right" size={22} color="var(--green-700)" />
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "24px", color: "var(--text-strong)", margin: 0 }}>
                Gracias.
              </h3>
              <p style={{ fontFamily: "var(--font-serif)", fontSize: "16px", color: "var(--text-muted)", margin: 0 }}>
                Un asesor de STRATA te contactará en breve.
              </p>
            </div>
          ) : (
            <form
              style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <Input label="Nombre" name="nombre" placeholder="Tu nombre completo" />
              <Input label="Correo" name="correo" type="email" placeholder="tu@correo.com" />
              <Input label="Proyecto de interés" name="proyecto" placeholder="Tonalá 15" />
              <Input label="Mensaje" name="mensaje" as="textarea" placeholder="Cuéntanos qué buscas…" />
              <Button variant="primary" size="lg" fullWidth onClick={() => setSent(true)} rightIcon={<Icon name="arrow-right" size={16} />}>
                Enviar solicitud
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
