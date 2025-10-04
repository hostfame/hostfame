import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { ThemeProvider } from "next-themes";
import { IpProvider } from "@/providers/IpProvider";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "Hostfame",
  description: "A hosting platform.",
  openGraph: {
    images: [
      {
        url: `https://www.hostfame.com/assets/og/og-main.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${urbanist.variable}`}>
      <body className={`${urbanist.className} antialiased  text-text`}>
        <ThemeProvider
          attribute={"data-theme"}
          defaultTheme="light"
          storageKey="app-theme"
          disableTransitionOnChange
        >
          <IpProvider>
            <Navbar />
            {children}
            <Footer />
          </IpProvider>
        </ThemeProvider>

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KR6LVVNW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      </body>
    </html>
  );
}
