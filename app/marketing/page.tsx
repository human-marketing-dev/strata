import type { Metadata } from "next";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { Portfolio } from "@/components/sections/Portfolio";
import { ModelSection } from "@/components/sections/ModelSection";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { SiteFooter } from "@/components/sections/SiteFooter";

export const metadata: Metadata = {
  title: "STRATA Desarrollos — Capas de valor, construidas para perdurar",
};

export default function MarketingHome() {
  return (
    <>
      <div id="top" />
      <SiteHeader />
      <Hero />
      <Portfolio />
      <ModelSection />
      <ContactCTA />
      <SiteFooter />
    </>
  );
}
