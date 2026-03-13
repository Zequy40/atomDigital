export type Locale = "es" | "en";
export type PublicPageKey = "home" | "features" | "pricing" | "whoare";

const basePaths: Record<PublicPageKey, string> = {
  home: "/",
  features: "/features",
  pricing: "/pricing",
  whoare: "/who-are",
};

export function getLocalizedPath(locale: Locale, page: PublicPageKey) {
  const basePath = basePaths[page];

  if (locale === "en") {
    return page === "home" ? "/en" : `/en${basePath}`;
  }

  return basePath;
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "es" ? "en" : "es";
}
