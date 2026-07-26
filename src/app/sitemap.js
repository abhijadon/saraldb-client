export default function sitemap() {
  const baseUrl = "https://www.saraldb.com";

  const publicRoutes = [
    "",
    "/pricing",
    "/docs",
    "/blog",
    "/support",
    "/contact",
    "/login",
  ];

  return publicRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === "" || route === "/blog" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/pricing" || route === "/docs" ? 0.9 : 0.8,
  }));
}
