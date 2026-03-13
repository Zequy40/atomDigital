import {
  Check,
  CircleDollarSign,
  Clock3,
  Instagram,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import StudioPageNav from "./StudioPageNav";
import type { Locale } from "../lib/site-locale";

type Plan = {
  name: string;
  price: string;
  period: string;
  secondaryPrice?: string;
  description: string;
  features: string[];
  popular?: boolean;
};

type Highlight = {
  icon: typeof Rocket;
  title: string;
  description: string;
};

type PricingStudioProps = {
  locale: Locale;
};

const BOOKING_URL = "https://calendly.com/atomdigitalassistant/30min";

const robotFloat = {
  animate: { y: [0, -10, 0] },
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const },
};

const content: Record<
  Locale,
  {
    heroLabel: string;
    heroTitle: string;
    heroTitleAccent: string;
    heroBody: string;
    heroStats: { value: string; label: string }[];
    instagramLabel: string;
    serviceLabel: string;
    serviceTitle: string;
    serviceBody: string;
    highlights: Highlight[];
    plansLabel: string;
    plansTitle: string;
    plansBody: string;
    note: string;
    plans: Plan[];
    popularPill: string;
    contactCta: string;
    footer: string;
  }
> = {
  es: {
    heroLabel: "PRECIOS",
    heroTitle: "Precios pensados para un",
    heroTitleAccent: " crecimiento medible",
    heroBody:
      "Elige el plan de ATOM que encaja con tu equipo, tus canales y el nivel de automatización que necesitas hoy sin perder margen para crecer mañana.",
    heroStats: [
      { value: "14 días", label: "Onboarding piloto" },
      { value: "< 1 semana", label: "Tiempo medio de salida" },
      { value: "24/7", label: "Cobertura IA" },
    ],
    instagramLabel: "Instagram de atomassistant",
    serviceLabel: "SERVICIO",
    serviceTitle: "Qué incluye el servicio",
    serviceBody:
      "Estas son las capacidades clave incluidas en el servicio para desplegar ATOM con claridad desde el primer día.",
    highlights: [
      {
        icon: Rocket,
        title: "Lanzamiento sin fricción",
        description:
          "Empieza con un alcance claro, onboarding guiado y una puesta en marcha rápida en tus canales prioritarios.",
      },
      {
        icon: CircleDollarSign,
        title: "Pago por impacto real",
        description:
          "Cada plan está pensado según adopción, escala del equipo y madurez operativa, sin costes ocultos.",
      },
      {
        icon: ShieldCheck,
        title: "Escala con confianza",
        description:
          "La seguridad, el soporte y la gobernanza crecen contigo para que el precio acompañe tus necesidades reales.",
      },
    ],
    plansLabel: "PLANES",
    plansTitle: "Elige el plan que encaja con tu modelo actual",
    plansBody:
      "Empieza ligero, avanza rápido y amplía solo cuando el volumen, los canales o la gobernanza lo requieran.",
    note: "Precios generales orientativos. Starter incluye hasta 1200 leads y Pro hasta 2500 leads. El precio puede variar según la empresa.",
    plans: [
      {
        name: "Starter",
        price: "500€",
        period: " montaje",
        secondaryPrice: "+ 350€/mes mantenimiento",
        description: "Para lanzar una automatización clave y mantenerla funcionando sin fricción.",
        features: [
          "Hasta 1200 leads",
          "1 sistema automatizado",
          "Configuración y puesta en marcha",
          "Mantenimiento mensual",
          "Ajustes básicos continuos",
          "Soporte por email",
        ],
      },
      {
        name: "Pro",
        price: "1600€",
        period: " montaje",
        secondaryPrice: "+ 500€/mes",
        description: "Para empresas en crecimiento que quieren captación, seguimiento y fidelización conectados.",
        features: [
          "Hasta 2500 leads",
          "Captación, seguimiento y fidelización",
          "Integraciones y automatizaciones conectadas",
          "Optimización continua",
          "Soporte prioritario",
          "Reporting mensual",
        ],
        popular: true,
      },
      {
        name: "Enterprise",
        price: "A medida",
        period: "",
        description: "Para operaciones complejas con compliance y flujos a medida.",
        features: [
          "Conversaciones ilimitadas",
          "Set up completo",
          "Equipo de éxito dedicado",
          "Acceso completo a API",
          "SSO y controles de compliance",
          "Integraciones personalizadas",
        ],
      },
    ],
    popularPill: "MÁS POPULAR",
    contactCta: "Contactar",
    footer: "© 2026 ATOM. Todos los derechos reservados.",
  },
  en: {
    heroLabel: "PRICING",
    heroTitle: "Pricing Built for",
    heroTitleAccent: " Measurable Growth",
    heroBody:
      "Choose the right ATOM plan for your team, your channels, and the level of automation you need today without losing headroom for tomorrow.",
    heroStats: [
      { value: "14 days", label: "Pilot onboarding" },
      { value: "< 1 week", label: "Go-live average" },
      { value: "24/7", label: "AI coverage" },
    ],
    instagramLabel: "Instagram de atomassistant",
    serviceLabel: "SERVICE",
    serviceTitle: "What the service includes",
    serviceBody:
      "These are the key capabilities included in the service so you can deploy ATOM with clarity from day one.",
    highlights: [
      {
        icon: Rocket,
        title: "Launch without friction",
        description:
          "Start with a clear pilot scope, guided onboarding, and fast deployment across your key customer channels.",
      },
      {
        icon: CircleDollarSign,
        title: "Pay for business impact",
        description:
          "Every tier is designed around adoption, team scale, and operational maturity instead of hidden implementation costs.",
      },
      {
        icon: ShieldCheck,
        title: "Scale with confidence",
        description:
          "Security, support, and governance expand with you so pricing stays aligned to real operational needs.",
      },
    ],
    plansLabel: "PLANS",
    plansTitle: "Choose the tier that matches your current operating model",
    plansBody:
      "Start lean, move fast, and upgrade only when conversation volume, channels, or governance requirements demand it.",
    note: "General guide pricing. Starter includes up to 1200 leads and Pro up to 2500 leads. Pricing may vary depending on the company.",
    plans: [
      {
        name: "Starter",
        price: "500€",
        period: " setup",
        secondaryPrice: "+ 350€/mo maintenance",
        description: "For launching one key automation and keeping it running smoothly.",
        features: [
          "Up to 1200 leads",
          "1 automated system",
          "Setup and launch",
          "Monthly maintenance",
          "Ongoing basic adjustments",
          "Email support",
        ],
      },
      {
        name: "Pro",
        price: "1600€",
        period: " setup",
        secondaryPrice: "+ 500€/mo",
        description: "For growing companies that want acquisition, follow-up, and retention working together.",
        features: [
          "Up to 2500 leads",
          "Acquisition, follow-up, and retention",
          "Connected integrations and automations",
          "Continuous optimization",
          "Priority support",
          "Monthly reporting",
        ],
        popular: true,
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "For complex operations with compliance and bespoke workflows.",
        features: [
          "Unlimited conversations",
          "Full setup",
          "Dedicated success team",
          "Full API access",
          "SSO and compliance controls",
          "Custom integrations",
        ],
      },
    ],
    popularPill: "MOST POPULAR",
    contactCta: "Contact",
    footer: "© 2026 ATOM. All rights reserved.",
  },
};

export default function PricingStudio({ locale }: PricingStudioProps) {
  const copy = content[locale];

  return (
    <main className="features-page pricing-page">
      <section id="hero" className="hero section">
        <div className="aurora aurora-main" aria-hidden="true" />
        <div className="container">
          <StudioPageNav active="pricing" locale={locale} />

          <div className="hero-inner">
            <div className="hero-left">
              <p className="label">{copy.heroLabel}</p>
              <h2>
                {copy.heroTitle}
                <span>{copy.heroTitleAccent}</span>
              </h2>
              <p className="body-lg limited hero-copy">{copy.heroBody}</p>

              <div className="hero-metrics">
                {copy.heroStats.map((stat) => (
                  <article key={stat.label} className="hero-metric-card">
                    <p className="value">{stat.value}</p>
                    <p className="meta">{stat.label}</p>
                  </article>
                ))}
              </div>

              <a
                className="hero-social"
                href="https://www.instagram.com/atomassistant/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={copy.instagramLabel}
              >
                <Instagram size={20} />
                <span>@atomassistant</span>
              </a>
            </div>

            <div className="hero-right">
              <motion.img src="/robot-pricing.png" alt="ATOM Pricing Robot" className="hero-robot" {...robotFloat} />
            </div>
          </div>
        </div>
      </section>

      <section id="service" className="section">
        <div className="aurora aurora-subtle" aria-hidden="true" />
        <div className="container">
          <div className="section-head">
            <div>
              <p className="label">{copy.serviceLabel}</p>
              <h2>{copy.serviceTitle}</h2>
              <p className="body-lg limited">{copy.serviceBody}</p>
            </div>
            <motion.img src="/robot-features.png" alt="Service features" className="section-robot" {...robotFloat} />
          </div>

          <div className="pricing-intro-grid">
            {copy.highlights.map((highlight) => (
              <article key={highlight.title} className="feature-card pricing-intro-card">
                <div className="feature-icon">
                  <highlight.icon size={22} />
                </div>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="section">
        <div className="aurora aurora-main soft" aria-hidden="true" />
        <div className="container">
          <div className="section-head">
            <motion.img
              src="/robot-about.png"
              alt="Pricing plans"
              className="section-robot section-robot-left"
              {...robotFloat}
            />
            <div>
              <p className="label">{copy.plansLabel}</p>
              <h2>{copy.plansTitle}</h2>
              <p className="body-lg limited">{copy.plansBody}</p>
            </div>
          </div>

          <div className="pricing-note">
            <Clock3 size={18} />
            <span>{copy.note}</span>
          </div>

          <div className="plan-grid">
            {copy.plans.map((plan) => (
              <article key={plan.name} className={`plan-card ${plan.popular ? "popular" : ""}`}>
                {plan.popular && <p className="pill">{copy.popularPill}</p>}
                <h3>{plan.name}</h3>
                <p className="plan-desc">{plan.description}</p>
                <p className="plan-price">
                  <span>{plan.price}</span>
                  {plan.period}
                </p>
                {plan.secondaryPrice && <p className="plan-price-secondary">{plan.secondaryPrice}</p>}
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Check size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  className={`plan-btn ${plan.popular ? "plan-btn-popular" : ""}`}
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {copy.contactCta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-row">
          <div className="foot-brand">
            <img src="/ATOM.svg" alt="ATOM" className="foot-wordmark" />
          </div>
          <p>{copy.footer}</p>
        </div>
      </footer>
    </main>
  );
}
