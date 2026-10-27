// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Configurando a fonte Inter
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EfraimCrs",
  description: "Analista e Desenvolvedor, QA, Geotecnologia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      {/* Aqui aplicamos a fonte Inter, o fundo #0C1015 e o texto base branco (#FFFFFF) */}
      <body className={`${inter.className} bg-[#0C1015] text-[#FFFFFF] antialiased`}>
        {children}
      </body>
    </html>
  );
}