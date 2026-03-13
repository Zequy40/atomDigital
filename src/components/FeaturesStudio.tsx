import { useState } from "react";
import { Bot, Check, Instagram, MessageSquare, Send, Users } from "lucide-react";
import { motion } from "framer-motion";
import StudioPageNav from "./StudioPageNav";
import type { Locale } from "../lib/site-locale";

type Feature = {
  icon: typeof Bot;
  title: string;
  description: string;
  bullets: string[];
  outcome: string;
};

type Plan = {
  name: string;
  price: string;
  period: string;
  secondaryPrice?: string;
  description: string;
  features: string[];
  popular?: boolean;
};

type FeaturesStudioProps = {
  locale: Locale;
};

const CONTACT_FORM_ACTION = "https://n8n.atomdigital.cloud/webhook/form-contacto";
const THANK_YOU_PATH: Record<Locale, string> = {
  es: "/gracias",
  en: "/en/thank-you",
};

const robotFloat = {
  animate: { y: [0, -10, 0] },
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const },
};

const content: Record<
  Locale,
  {
    heroSub: string;
    instagramLabel: string;
    aboutLabel: string;
    aboutTitle: string;
    aboutTitleAccent: string;
    aboutBodyOne: string;
    aboutBodyTwo: string;
    stats: { value: string; meta: string }[];
    featuresLabel: string;
    featuresTitle: string;
    featuresBody: string;
    featureItems: Feature[];
    pricingLabel: string;
    pricingTitle: string;
    pricingBody: string;
    plans: Plan[];
    popularPill: string;
    planCta: string;
    contactLabel: string;
    contactTitle: string;
    contactBody: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    messagePlaceholder: string;
    contactButton: string;
    contactSending: string;
    contactError: string;
    contactSubject: string;
    footer: string;
  }
> = {
  es: {
    heroSub: "TU ASISTENTE PERSONAL",
    instagramLabel: "Instagram de atomassistant",
    aboutLabel: "QUIÉNES SOMOS",
    aboutTitle: "Construimos el futuro de la",
    aboutTitleAccent: " inteligencia de cliente",
    aboutBodyOne:
      "ATOM ofrece chatbots con IA de nivel empresarial que entienden a tus clientes, automatizan el soporte y aumentan las conversiones 24/7 en todos tus canales.",
    aboutBodyTwo:
      "Nacimos con la misión de democratizar la atención al cliente impulsada por IA y hoy ayudamos a más de 500 empresas, procesando más de 10 millones de conversaciones cada mes.",
    stats: [
      { value: "10M+", meta: "CONVERSACIONES/MES" },
      { value: "500+", meta: "CLIENTES EMPRESARIALES" },
      { value: "99.9%", meta: "SLA DE DISPONIBILIDAD" },
      { value: "40%", meta: "REDUCCIÓN DE COSTES" },
    ],
    featuresLabel: "CARACTERÍSTICAS",
    featuresTitle: "Sistemas de IA para crecer con orden",
    featuresBody:
      "Tres sistemas pensados para captar, hacer seguimiento y fidelizar sin depender de procesos manuales.",
    featureItems: [
      {
        icon: Bot,
        title: "Sistema de Captación de Leads",
        description: "IA que automatiza la captación de clientes",
        bullets: [
          "Anuncios optimizados con IA",
          "Formularios inteligentes",
          "Lead magnets automáticos",
          "Campañas de captación constante",
        ],
        outcome: 'De "esperar que lleguen clientes" a "atraer clientes mientras duermes"',
      },
      {
        icon: MessageSquare,
        title: "Seguimientos Automáticos",
        description: "El dinero está en el seguimiento",
        bullets: [
          "Recordatorios automáticos",
          "Base de datos inteligente",
          "Determinar cuándo hablar al lead",
          "Recordar automáticamente",
        ],
        outcome: 'De "olvidar hacer seguimiento" a "seguimiento perfecto siempre"',
      },
      {
        icon: Users,
        title: "Sistema de Fidelización",
        description: "IA que cuida clientes y aumenta retención",
        bullets: [
          "Felicitaciones automáticas (cumpleaños)",
          "Encuestas de satisfacción",
          "Seguimiento post-compra",
          "Programa de referidos",
        ],
        outcome: 'De "clientes se van" a "clientes que vuelven y recomiendan"',
      },
    ],
    pricingLabel: "PRECIOS",
    pricingTitle: "Precios simples y transparentes",
    pricingBody: "Precios generales orientativos, con puesta en marcha, mantenimiento mensual y ajuste según cada empresa.",
    plans: [
      {
        name: "Starter",
        price: "500€",
        period: " montaje",
        secondaryPrice: "+ 350€/mes mantenimiento",
        description: "Perfecto para lanzar una automatización clave y mantenerla funcionando.",
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
        description: "Para empresas que quieren captación, seguimiento y fidelización trabajando juntos.",
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
        description: "Para operaciones de gran escala",
        features: [
          "Conversaciones ilimitadas",
          "Set up completo",
          "Soporte dedicado",
          "Acceso completo a API",
          "SSO y cumplimiento",
          "Integraciones personalizadas",
        ],
      },
    ],
    popularPill: "MÁS POPULAR",
    planCta: "Empezar",
    contactLabel: "CONTACTO",
    contactTitle: "Construyamos algo increíble",
    contactBody:
      "¿Listo para transformar tu experiencia de cliente? Escríbenos y te mostraremos lo que ATOM puede hacer.",
    namePlaceholder: "Tu nombre",
    emailPlaceholder: "Tu correo",
    phonePlaceholder: "Tu teléfono",
    messagePlaceholder: "Cuéntanos sobre tu proyecto",
    contactButton: "Enviar mensaje",
    contactSending: "Enviando...",
    contactError: "No se pudo enviar el mensaje. Inténtalo de nuevo en unos segundos.",
    contactSubject: "Nuevo lead desde ATOM Digital",
    footer: "© 2026 ATOM. Todos los derechos reservados.",
  },
  en: {
    heroSub: "YOUR PERSONAL ASSISTANT",
    instagramLabel: "Instagram de atomassistant",
    aboutLabel: "WHO ARE WE",
    aboutTitle: "We Build the Future of",
    aboutTitleAccent: " Customer Intelligence",
    aboutBodyOne:
      "ATOM delivers enterprise-grade AI chatbots that understand your customers, automate support, and drive conversions-24/7, across every channel.",
    aboutBodyTwo:
      "Founded with a mission to democratize AI-powered customer engagement, we serve 500+ businesses worldwide, processing over 10 million conversations every month.",
    stats: [
      { value: "10M+", meta: "CONVERSATIONS/MO" },
      { value: "500+", meta: "ENTERPRISE CLIENTS" },
      { value: "99.9%", meta: "UPTIME SLA" },
      { value: "40%", meta: "COST REDUCTION" },
    ],
    featuresLabel: "FEATURES",
    featuresTitle: "AI Systems That Scale With You",
    featuresBody:
      "Three systems designed to attract, follow up, and retain clients without relying on manual work.",
    featureItems: [
      {
        icon: Bot,
        title: "Lead Generation System",
        description: "AI that automates client acquisition",
        bullets: [
          "AI-optimized ads",
          "Smart forms",
          "Automated lead magnets",
          "Always-on acquisition campaigns",
        ],
        outcome: 'From "waiting for clients to arrive" to "attracting clients while you sleep"',
      },
      {
        icon: MessageSquare,
        title: "Automated Follow-Ups",
        description: "The money is in the follow-up",
        bullets: [
          "Automated reminders",
          "Smart database",
          "Know when to talk to the lead",
          "Automatic follow-up memory",
        ],
        outcome: 'From "forgetting to follow up" to "perfect follow-up every time"',
      },
      {
        icon: Users,
        title: "Retention System",
        description: "AI that cares for customers and increases retention",
        bullets: [
          "Automated birthday messages",
          "Satisfaction surveys",
          "Post-purchase follow-up",
          "Referral program",
        ],
        outcome: 'From "customers leave" to "customers return and refer"',
      },
    ],
    pricingLabel: "PRICING",
    pricingTitle: "Simple, Transparent Pricing",
    pricingBody: "General guide pricing with setup, monthly maintenance, and room to adapt to each company.",
    plans: [
      {
        name: "Starter",
        price: "500€",
        period: " setup",
        secondaryPrice: "+ 350€/mo maintenance",
        description: "Perfect for launching one key automation and keeping it running smoothly.",
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
        description: "For businesses that want acquisition, follow-up, and retention working together.",
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
        description: "For large-scale operations",
        features: [
          "Unlimited conversations",
          "Full setup",
          "Dedicated support",
          "Full API access",
          "SSO & compliance",
          "Custom integrations",
        ],
      },
    ],
    popularPill: "MOST POPULAR",
    planCta: "Get Started",
    contactLabel: "CONTACT",
    contactTitle: "Let's Build Something Amazing",
    contactBody:
      "Ready to transform your customer experience? Get in touch and we'll show you what ATOM can do.",
    namePlaceholder: "Your name",
    emailPlaceholder: "Your email",
    phonePlaceholder: "Your phone",
    messagePlaceholder: "Tell us about your project",
    contactButton: "Send Message",
    contactSending: "Sending...",
    contactError: "We couldn't send your message. Please try again in a few seconds.",
    contactSubject: "New lead from ATOM Digital",
    footer: "© 2026 ATOM. All rights reserved.",
  },
};

export default function FeaturesStudio({ locale }: FeaturesStudioProps) {
  const copy = content[locale];
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const message = String(formData.get("message") ?? "");
    const payload = JSON.stringify({
  Nombre: name,
  Email: email,
  Telefono: phone,
  Mensaje: message,
  Locale: locale,
});

    try {
      const response = await fetch(CONTACT_FORM_ACTION, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: payload,
});

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      form.reset();
      window.location.assign(THANK_YOU_PATH[locale]);
    } catch {
      setSubmitError(copy.contactError);
      setIsSubmitting(false);
    }
  }

  return (
    <main className="features-page">
      <section id="hero" className="hero section">
        <div className="aurora aurora-main" aria-hidden="true" />
        <div className="container">
          <StudioPageNav active="features" locale={locale} />

          <div className="hero-inner">
            <div className="hero-left">
              <img src="/ATOM.svg" alt="ATOM" className="hero-wordmark" />
              <p className="hero-sub">{copy.heroSub}</p>

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
              <motion.img src="/robot-hero.png" alt="ATOM Robot" className="hero-robot" {...robotFloat} />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="aurora aurora-subtle" aria-hidden="true" />
        <div className="container">
          <p className="label">{copy.aboutLabel}</p>
          <h2>
            {copy.aboutTitle}
            <span>{copy.aboutTitleAccent}</span>
          </h2>

          <div className="about-grid">
            <motion.img src="/robot-about.png" alt="About ATOM" className="about-robot" {...robotFloat} />
            <div>
              <p className="body-lg">{copy.aboutBodyOne}</p>
              <p className="body-lg">{copy.aboutBodyTwo}</p>
            </div>
            <div className="stats-grid">
              {copy.stats.map((stat) => (
                <article key={stat.meta} className="stat-card">
                  <p className="value">{stat.value}</p>
                  <p className="meta">{stat.meta}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="section">
        <div className="aurora aurora-main soft" aria-hidden="true" />
        <div className="container">
          <div className="section-head">
            <div>
              <p className="label">{copy.featuresLabel}</p>
              <h2>{copy.featuresTitle}</h2>
              <p className="body-lg limited">{copy.featuresBody}</p>
            </div>
            <motion.img src="/robot-features.png" alt="Feature Overview" className="section-robot" {...robotFloat} />
          </div>

          <div className="feature-grid">
            {copy.featureItems.map((feature) => (
              <article key={feature.title} className="feature-card">
                <div className="feature-icon">
                  <feature.icon size={22} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <ul className="feature-list">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet}>
                      <Check size={16} />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <p className="feature-outcome">{feature.outcome}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="aurora aurora-main soft" aria-hidden="true" />
        <div className="container contact-wrap">
          <motion.img src="/robot-contact.png" alt="Contact Robot" className="contact-robot" {...robotFloat} />
          <p className="label centered">{copy.contactLabel}</p>
          <h2 className="centered">{copy.contactTitle}</h2>
          <p className="body-lg centered contact-copy">{copy.contactBody}</p>

          <form className="contact-form" action={CONTACT_FORM_ACTION} method="POST" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder={copy.namePlaceholder} required />
            <input type="email" name="email" placeholder={copy.emailPlaceholder} required />
            <input type="tel" name="phone" placeholder={copy.phonePlaceholder} />
            <textarea rows={4} name="message" placeholder={copy.messagePlaceholder} required />
            {submitError && <p className="contact-error">{submitError}</p>}
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? copy.contactSending : copy.contactButton} <Send size={16} />
            </button>
          </form>
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
