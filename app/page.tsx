import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { Metadata } from "next";
import { LandingScroll } from "@/components/landing/LandingScroll";

export const metadata: Metadata = {
  title: "STRATA · Portafolio de proyectos 2026",
  description:
    "Portafolio de proyectos STRATA (antes TREVALDE): desarrollos de alto valor en residencial, industrial y hospitalidad, del diseño arquitectónico a la operación.",
};

// The landing is the exact design from `landing/` — the self-contained STRATA
// "Portafolio de proyectos" export, with its assets rewritten to /assets/landing.
// Read at build time so the markup/styles stay byte-faithful to the source.
const landingCss = readFileSync(join(process.cwd(), "landing", "styles.css"), "utf-8");
const landingBody = readFileSync(join(process.cwd(), "landing", "body.html"), "utf-8");

export default function Home() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: landingCss }} />
      <div dangerouslySetInnerHTML={{ __html: landingBody }} />
      <LandingScroll />
    </>
  );
}
