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
  title: {
    default: "SaralDB - Sub-Millisecond Distributed NoSQL Database Engine",
    template: "%s | SaralDB",
  },
  description: "Next-generation distributed document database engine with native JSON, live socket subscriptions, and built-in Admin Studio.",
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

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`dark ${montserrat.variable} ${montserrat.className} h-full antialiased`}
    >
      <body className={`${montserrat.className} min-h-full flex flex-col`}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
