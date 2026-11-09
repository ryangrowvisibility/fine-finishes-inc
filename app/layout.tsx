import type { Metadata } from "next";
import { Red_Hat_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const head = Red_Hat_Display({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-head-src" });
const body = Source_Sans_3({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-body-src" });

export const metadata: Metadata = {
  title: "Fine Finishes Inc | Painting Contractor in Sacramento, CA | (916) 502-6228",
  description:
    "Licensed Sacramento painting contractor, CSLB #979454. Interior and exterior painting, limewash, Roman clay, plaster finishes and cabinet painting. Rated 5.0 on Google. Call (916) 502-6228.",
  openGraph: {
    title: "Fine Finishes Inc | Painting Contractor in Sacramento, CA",
    description: "Interior and exterior painting, limewash, Roman clay and cabinet painting. CSLB #979454. Call (916) 502-6228.",
    type: "website",
    images: ["/images/p9.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US" className={`${head.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
