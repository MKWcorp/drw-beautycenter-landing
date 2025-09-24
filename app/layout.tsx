import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kemitraan DRW Beauty Center",
  description: "Landing page konversi kemitraan Beauty Center DRW Skincare."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}