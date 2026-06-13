import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Groovetop Dog App — UX Case Study · Raymond Merrill II",
  description:
    "An award-recognized WGU UX prototype refined into Groovetop DS v1 — a documented design system and scalable mobile app concept study by Raymond Merrill II.",
  openGraph: {
    title: "Groovetop Dog App — UX Case Study",
    description:
      "Mobile dog adoption experience transformed from an academic prototype into a structured design system with 68 tokens, 5 component sets, and 452 token bindings.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
