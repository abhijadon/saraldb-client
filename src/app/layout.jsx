import { Montserrat } from "next/font/google";
import { AppProviders } from "@/context";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.saraldb.com"),
  title: {
    default: "SaralDB - Sub-Millisecond Distributed NoSQL Database Engine",
    template: "%s | SaralDB",
  },
  description: "Next-generation distributed document database engine with native JSON, live socket subscriptions, and built-in Admin Studio.",
  alternates: {
    canonical: "https://www.saraldb.com",
  },
  openGraph: {
    title: "SaralDB - Sub-Millisecond Distributed NoSQL Database",
    description: "Next-generation distributed document database engine with native JSON, live socket subscriptions, and built-in Admin Studio.",
    url: "https://www.saraldb.com",
    siteName: "SaralDB",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaralDB - Sub-Millisecond Distributed NoSQL Database",
    description: "Next-generation distributed document database engine with native JSON, live socket subscriptions, and built-in Admin Studio.",
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
  "description": "Next-generation distributed document database engine with native JSON, live socket subscriptions, and built-in Admin Studio."
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`dark ${montserrat.variable} ${montserrat.className} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className={`${montserrat.className} min-h-full flex flex-col`}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
