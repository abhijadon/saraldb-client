import { Montserrat } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { AppProviders } from "@/context";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "800"],
  display: "swap",
  preload: true,
});

export const metadata = {
  metadataBase: new URL("https://www.saraldb.com"),
  alternates: {
    canonical: "https://www.saraldb.com",
  },
  icons: {
    icon: [
      { url: "/favicon-for-app/favicon.ico" },
      { url: "/favicon-for-app/icon1.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-for-app/icon0.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon-for-app/favicon.ico",
    apple: [
      { url: "/favicon-for-app/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/favicon-for-app/manifest.json",
  appleWebApp: {
    title: "SaralDB",
    statusBarStyle: "black-translucent",
    capable: true,
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "SaralDB",
  "operatingSystem": "All",
  "applicationCategory": "DeveloperApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "author": {
    "@type": "Person",
    "name": "Abhishek Jadon"
  },
  "description": "Flow-Based Unified State Engine combining document storage, caching, and streaming."
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`dark ${montserrat.variable} ${montserrat.className} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CMFJ9SKK7J"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-CMFJ9SKK7J');
          `}
        </Script>
      </head>
      <body className={`${montserrat.className} min-h-full flex flex-col`}>
        <AppProviders>{children}</AppProviders>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}