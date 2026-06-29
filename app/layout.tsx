import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Validación de Credencial | CONALEC",
  description: "Página pública provisional para validación de credenciales CONALEC.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
