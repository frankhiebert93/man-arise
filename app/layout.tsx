import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";

const display = Oswald({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Man Arise | Men's Ministry — Cuauhtémoc",
  description:
    "A brotherhood forging stronger men through Faith, Family, Fitness, and Finance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={display.variable}>
      <body>{children}</body>
    </html>
  );
}
