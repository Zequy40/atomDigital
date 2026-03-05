import {
  ArrowRight,
  BarChart3,
  Bot,
  Check,
  ChevronRight,
  Instagram,
  MessageSquare,
  Send,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

type Feature = {
  icon: typeof Bot;
  title: string;
  description: string;
};

type Plan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
};

const featureItems: Feature[] = [
  {
    icon: Bot,
    title: "Intelligent AI Agents",
    description:
      "Deploy sophisticated chatbots that understand context and deliver human-like conversations.",
  },
  {
    icon: MessageSquare,
    title: "Omnichannel Support",
    description:
      "Connect with customers across web, mobile, and social platforms seamlessly.",
  },
  {
    icon: Zap,
    title: "Instant Deployment",
    description:
      "Launch your AI chatbot in minutes with our no-code setup and integration tools.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-grade encryption and compliance with GDPR, SOC 2, and HIPAA standards.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Gain insights from every interaction with real-time dashboards and reporting.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Empower your team with shared workflows, handoffs, and unified customer views.",
  },
];

const plans: Plan[] = [
  {
    name: "Starter",
    price: "$29",
    period: "/mo",
    description: "Perfect for small teams getting started",
    features: ["1,000 conversations/mo", "1 AI Agent", "Email support", "Basic analytics"],
  },
  {
    name: "Pro",
    price: "$99",
    period: "/mo",
    description: "For growing businesses that need more",
    features: [
      "10,000 conversations/mo",
      "5 AI Agents",
      "Priority support",
      "Advanced analytics",
      "Custom branding",
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
      "Unlimited agents",
      "Dedicated support",
      "Full API access",
      "SSO & compliance",
      "Custom integrations",
    ],
  },
];

const navItems = [
  { label: "WHO ARE WE", target: "about" },
  { label: "PRICING", target: "pricing" },
  { label: "FEATURES", target: "features" },
  { label: "CONTACT", target: "contact" },
];

const robotFloat = {
  animate: { y: [0, -10, 0] },
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const },
};

export default function FeaturesStudio() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="features-page">
      <section id="hero" className="hero section">
        <div className="aurora aurora-main" aria-hidden="true" />
        <div className="container hero-inner">
          <div className="hero-left">
            <img src="/ATOM.svg" alt="ATOM" className="hero-wordmark" />
            <p className="hero-sub">YOUR PERSONAL ASSISTANT</p>

            <div className="hero-nav">
              {navItems.map((item) => (
                <button key={item.target} className="hero-btn" onClick={() => scrollTo(item.target)}>
                  <span>{item.label}</span>
                  <ChevronRight size={16} />
                </button>
              ))}
            </div>

            <a
              className="hero-social"
              href="https://www.instagram.com/atomassistant/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de atomassistant"
            >
              <Instagram size={20} />
              <span>@atomassistant</span>
            </a>
          </div>

          <div className="hero-right">
            <motion.img src="/robot-hero.png" alt="ATOM Robot" className="hero-robot" {...robotFloat} />
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="aurora aurora-subtle" aria-hidden="true" />
        <div className="container">
          <p className="label">WHO ARE WE</p>
          <h2>
            We Build the Future of
            <span> Customer Intelligence</span>
          </h2>

          <div className="about-grid">
            <motion.img src="/robot-about.png" alt="About ATOM" className="about-robot" {...robotFloat} />
            <div>
              <p className="body-lg">
                ATOM delivers enterprise-grade AI chatbots that understand your customers,
                automate support, and drive conversions-24/7, across every channel.
              </p>
              <p className="body-lg">
                Founded with a mission to democratize AI-powered customer engagement, we
                serve 500+ businesses worldwide, processing over 10 million conversations
                every month.
              </p>
            </div>
            <div className="stats-grid">
              <article className="stat-card"><p className="value">10M+</p><p className="meta">CONVERSATIONS/MO</p></article>
              <article className="stat-card"><p className="value">500+</p><p className="meta">ENTERPRISE CLIENTS</p></article>
              <article className="stat-card"><p className="value">99.9%</p><p className="meta">UPTIME SLA</p></article>
              <article className="stat-card"><p className="value">40%</p><p className="meta">COST REDUCTION</p></article>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="section">
        <div className="aurora aurora-main soft" aria-hidden="true" />
        <div className="container">
          <div className="section-head">
            <div>
              <p className="label">FEATURES</p>
              <h2>Everything You Need to Scale</h2>
              <p className="body-lg limited">
                Powerful features designed for businesses that demand excellence in
                customer engagement.
              </p>
            </div>
            <motion.img src="/robot-features.png" alt="Feature Overview" className="section-robot" {...robotFloat} />
          </div>

          <div className="feature-grid">
            {featureItems.map((feature) => (
              <article key={feature.title} className="feature-card">
                <div className="feature-icon">
                  <feature.icon size={22} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="section">
        <div className="aurora aurora-subtle" aria-hidden="true" />
        <div className="container">
          <div className="section-head">
            <motion.img
              src="/robot-pricing.png"
              alt="Pricing Assistant"
              className="section-robot section-robot-left"
              {...robotFloat}
            />
            <div>
              <p className="label">PRICING</p>
              <h2>Simple, Transparent Pricing</h2>
              <p className="body-lg limited">No hidden fees. Start free, scale as you grow.</p>
            </div>
          </div>

          <div className="plan-grid">
            {plans.map((plan) => (
              <article key={plan.name} className={`plan-card ${plan.popular ? "popular" : ""}`}>
                {plan.popular && <p className="pill">MOST POPULAR</p>}
                <h3>{plan.name}</h3>
                <p className="plan-desc">{plan.description}</p>
                <p className="plan-price"><span>{plan.price}</span>{plan.period}</p>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}><Check size={16} />{feature}</li>
                  ))}
                </ul>
                <button className={`plan-btn ${plan.popular ? "plan-btn-popular" : ""}`}>
                  Get Started <ArrowRight size={16} />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="aurora aurora-main soft" aria-hidden="true" />
        <div className="container contact-wrap">
          <motion.img src="/robot-contact.png" alt="Contact Robot" className="contact-robot" {...robotFloat} />
          <p className="label centered">CONTACT</p>
          <h2 className="centered">Let's Build Something Amazing</h2>
          <p className="body-lg centered contact-copy">
            Ready to transform your customer experience? Get in touch and we&apos;ll show you what
            ATOM can do.
          </p>

          <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Your email" />
            <textarea rows={4} placeholder="Tell us about your project" />
            <button type="submit">Send Message <Send size={16} /></button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-row">
          <div className="foot-brand">
            <img src="/ATOM.svg" alt="ATOM" className="foot-wordmark" />
          </div>
          <p>© 2026 ATOM. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
