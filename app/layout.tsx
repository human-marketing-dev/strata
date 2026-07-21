import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "STRATA Desarrollos — Capas de valor, construidas para perdurar",
  description:
    "STRATA (antes TREVALDE) es una desarrolladora inmobiliaria fundada por arquitectos. Diez años desarrollando proyectos de alto valor en residencial, industrial y hospitalidad, del diseño a la operación.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
