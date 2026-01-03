import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/shared/footer/Footer";
import { ThemeProvider } from "next-themes";
import { IpProvider } from "@/providers/IpProvider";
import { GoogleTagManager } from "@next/third-parties/google";
import { CountdownProvider } from "@/context/CountdownContext";
import Script from "next/script";

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
        url: `https://www.hostfame.com/assets/og/hostfame-og.png`,
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
    <html lang="en" className={`${urbanist.variable}`} data-theme="light" suppressHydrationWarning>
      <body className={`${urbanist.className} antialiased  text-text`} suppressHydrationWarning>
        <Script
          id="force-light-theme"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  // Force light mode immediately
                  localStorage.setItem('app-theme', 'light');
                  localStorage.setItem('app-theme-mirror', 'light');
                  document.documentElement.setAttribute('data-theme', 'light');
                  document.documentElement.classList.remove('dark');
                  document.documentElement.style.colorScheme = 'light';
                  
                  // Continuously enforce light mode
                  setInterval(function() {
                    document.documentElement.setAttribute('data-theme', 'light');
                    document.documentElement.classList.remove('dark');
                    document.documentElement.style.colorScheme = 'light';
                  }, 100);
                  
                  // Override any theme changes
                  const observer = new MutationObserver(function(mutations) {
                    mutations.forEach(function(mutation) {
                      if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
                        if (document.documentElement.getAttribute('data-theme') !== 'light') {
                          document.documentElement.setAttribute('data-theme', 'light');
                        }
                      }
                      if (document.documentElement.classList.contains('dark')) {
                        document.documentElement.classList.remove('dark');
                      }
                    });
                  });
                  observer.observe(document.documentElement, {
                    attributes: true,
                    attributeFilter: ['data-theme', 'class']
                  });
                } catch (e) {}
              })();
            `,
          }}
        />
        <GoogleTagManager gtmId="GTM-KR6LVVNW" />
        <ThemeProvider
          attribute={"data-theme"}
          defaultTheme="light"
          forcedTheme="light"
          enableSystem={false}
          storageKey="app-theme"
          disableTransitionOnChange
        >
          <IpProvider>
            <CountdownProvider>
              {children}
              <Footer />
            </CountdownProvider>
          </IpProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
