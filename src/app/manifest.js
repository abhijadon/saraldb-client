export default function manifest() {
  return {
    name: "SaralDB - Sub-Millisecond Distributed NoSQL Database",
    short_name: "SaralDB",
    description: "Next-generation distributed document database engine with native JSON, live socket subscriptions, and built-in Admin Studio.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f172a",
    theme_color: "#0f172a",
    icons: [
      {
        src: "/favicon-for-app/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/favicon-for-app/icon1.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
  };
}
