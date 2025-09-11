import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/shared/footer/Footer";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "Hostnin",
  description: "A hosting platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${urbanist.variable}`}>
      <body
        className={`${urbanist.className} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
