import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});


export const metadata: Metadata = {
  title: "Hale Textile Studio — Luxury Fabric & Wallpaper Showroom | Honolulu, Hawaii",
  description: "Hawaii's home fabric library. Luxury fabrics, wallpaper collections, and custom home accessories at Hub Coworking, Kaka'ako, Honolulu. Open to designers and homeowners.",
  metadataBase: new URL("https://haletextilestudio.com"),
  openGraph: {
    title: "Hale Textile Studio — Luxury Fabric & Wallpaper Showroom | Honolulu, Hawaii",
    description: "Hawaii's home fabric library. Honolulu's luxury fabric showroom — fabrics, wallpaper, and custom accessories.",
    type: "website",
    url: "https://haletextilestudio.com",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${GeistSans.variable}`}>
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
