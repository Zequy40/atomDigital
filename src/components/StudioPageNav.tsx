import { getLocalizedPath, type Locale } from "../lib/site-locale";

type PageKey = "features" | "pricing" | "whoare";

type NavItem = {
  key: PageKey;
  label: string;
  href: string;
};

type StudioPageNavProps = {
  active: PageKey;
  locale: Locale;
};

const navLabels = {
  es: {
    features: "Características",
    pricing: "Precios",
    whoare: "Quiénes somos",
  },
  en: {
    features: "Features",
    pricing: "Pricing",
    whoare: "Who are",
  },
};

export default function StudioPageNav({ active, locale }: StudioPageNavProps) {
  const currentLabels = navLabels[locale];
  const navItems: NavItem[] = [
    { key: "features", label: currentLabels.features, href: getLocalizedPath(locale, "features") },
    { key: "pricing", label: currentLabels.pricing, href: getLocalizedPath(locale, "pricing") },
    { key: "whoare", label: currentLabels.whoare, href: getLocalizedPath(locale, "whoare") },
  ];

  return (
    <nav className="page-nav" aria-label="Primary">
      <a className="page-nav-brand" href={getLocalizedPath(locale, "home")}>
        <img src="/ATOM.svg" alt="ATOM" />
      </a>

      <div className="page-nav-controls">
        <div className="page-nav-links">
          {navItems.map((item) => (
            <a
              key={item.key}
              className={`page-nav-link ${item.key === active ? "active" : ""}`}
              href={item.href}
              aria-current={item.key === active ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="page-nav-lang" aria-label="Language switcher">
          <a
            className={`page-nav-lang-link ${locale === "es" ? "active" : ""}`}
            href={getLocalizedPath("es", active)}
            aria-current={locale === "es" ? "page" : undefined}
          >
            ES
          </a>
          <a
            className={`page-nav-lang-link ${locale === "en" ? "active" : ""}`}
            href={getLocalizedPath("en", active)}
            aria-current={locale === "en" ? "page" : undefined}
          >
            EN
          </a>
        </div>
      </div>
    </nav>
  );
}
