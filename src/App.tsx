import { useState } from 'react'
import {
  MessageCircle,
  Menu,
  X,
  Palette,
  Shirt,
  Printer,
  CheckCircle,
  ChevronDown,
  Download,
  Eye,
  Package,
  Truck,
  Image,
  MessageSquare,
  ArrowRight,
  Star,
} from 'lucide-react'
import './index.css'

/* ──────────────────────────────────────────────
   Navbar
   ────────────────────────────────────────────── */
function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <a href="#" className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Printer size={28} color="#ff00ff" />
          <span>FUNKY <span className="pink">PRINTS</span></span>
        </a>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          <li><button onClick={() => scrollTo('hero')}>Home</button></li>
          <li><button onClick={() => scrollTo('catalog')}>Catalog</button></li>
          <li><button onClick={() => scrollTo('services')}>Services</button></li>
          <li><button onClick={() => scrollTo('how-it-works')}>How It Works</button></li>
          <li><button onClick={() => scrollTo('faq')}>FAQ</button></li>
        </ul>

        <div className="nav-actions">
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="btn-whatsapp-nav">
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
          <button className="nav-hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
    </nav>
  )
}

/* ──────────────────────────────────────────────
   Hero
   ────────────────────────────────────────────── */
function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-grid">
        <div className="hero-text">
          <span className="hero-badge">🔥 Quality Bulk Printing Since 2024</span>
          <h1>
            Premium Bulk Apparel Printing<br />
            &amp; Custom <span className="pink">DTF Transfers</span>
          </h1>
          <p className="hero-sub">
            High-volume screen printing, DTF heat transfers, and sublimation — all crafted with 
            vibrant inks and fast turnaround. No minimums that kill your margin.
          </p>
          <div className="hero-btns">
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="btn-primary">
              <MessageCircle size={20} />
              Tap to WhatsApp
            </a>
            <button className="btn-secondary" onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}>
              <Eye size={20} />
              Browse Catalogs
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">500+</span>
              <span className="stat-label">Bulk Orders</span>
            </div>
            <div className="stat">
              <span className="stat-num">99%</span>
              <span className="stat-label">Satisfaction</span>
            </div>
            <div className="stat">
              <span className="stat-num">3–5</span>
              <span className="stat-label">Day Turnaround</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-grid">
            <div className="visual-card vc-tall">
              <Shirt size={42} />
              <span>Premium Hoodies</span>
            </div>
            <div className="visual-card vc-square">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ff00ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5C7 4 9 2 12 2s5 2 6.5 2a2.5 2.5 0 0 1 0 5H18"/><path d="M12 2v20"/><path d="M12 22h6a2 2 0 0 0 2-2V9"/><path d="M12 22H6a2 2 0 0 1-2-2V9"/></svg>
              <span>Structured Caps</span>
            </div>
            <div className="visual-card vc-wide">
              <Image size={36} />
              <span>DTF Transfer Sheets</span>
            </div>
            <div className="visual-card vc-small">
              <Star size={28} color="#ff00ff" fill="#ff00ff" />
              <span>Premium Quality</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────────
   Catalog Showcase
   ────────────────────────────────────────────── */
function Catalog() {
  return (
    <section id="catalog" className="catalog section">
      <div className="container">
        <h2 className="section-title">
          Our <span className="pink">Digital Catalogs</span>
        </h2>
        <p className="section-sub">Browse our latest collections — updated for 2026</p>
        <div className="catalog-grid">
          <div className="catalog-card">
            <div className="catalog-icon">
              <Shirt size={40} />
            </div>
            <h3>Bulk Catalogue 2026</h3>
            <p>T-shirts, hoodies, polos, jackets, caps — full apparel catalog with pricing tiers.</p>
            <div className="catalog-actions">
              <a href="/catalogs/bulk-2026.pdf" target="_blank" rel="noopener noreferrer" className="btn-catalog">
                <Eye size={18} />
                View Catalog (PDF)
              </a>
              <a href="/catalogs/bulk-2026.pdf" download className="btn-catalog-dl" title="Download PDF">
                <Download size={18} />
              </a>
            </div>
          </div>
          <div className="catalog-card">
            <div className="catalog-icon">
              <Palette size={40} />
            </div>
            <h3>Sublimation Catalogue 2026</h3>
            <p>All-over print garments, mugs, accessories — vibrant sublimation-ready products.</p>
            <div className="catalog-actions">
              <a href="/catalogs/sublimation-2026.pdf" target="_blank" rel="noopener noreferrer" className="btn-catalog">
                <Eye size={18} />
                View Catalog (PDF)
              </a>
              <a href="/catalogs/sublimation-2026.pdf" download className="btn-catalog-dl" title="Download PDF">
                <Download size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────────
   Core Services
   ────────────────────────────────────────────── */
const services = [
  {
    icon: <Printer size={44} />,
    title: 'DTF Transfers',
    desc: 'Direct-to-film printing for any fabric. Vibrant, wash-resistant, no minimum quantity. Ready to press or we handle application.',
  },
  {
    icon: <Palette size={44} />,
    title: 'Sublimation',
    desc: 'Full-colour all-over prints on polyester garments, mugs, bags & accessories. Perfect for sportswear and promotional runs.',
  },
  {
    icon: <Shirt size={44} />,
    title: 'Custom Apparel',
    desc: 'Screen printing & embroidery on premium blanks. Bulk orders from 50 to 10,000+ units. Your designs, your labels, your brand.',
  },
]

function Services() {
  return (
    <section id="services" className="services section">
      <div className="container">
        <h2 className="section-title">
          Core <span className="pink">Services</span>
        </h2>
        <p className="section-sub">Everything you need to bring your designs to life — at scale</p>
        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card" key={i}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────────
   Ordering Timeline
   ────────────────────────────────────────────── */
const steps = [
  { icon: <MessageSquare size={28} />, title: 'Send Us a Message', desc: 'Reach out on WhatsApp with your idea. We\'ll respond within minutes.' },
  { icon: <Image size={28} />, title: 'Drop Your Artwork', desc: 'Share your design at 300 DPI — AI, PSD, PNG or PDF. We\'ll check readiness.' },
  { icon: <CheckCircle size={28} />, title: 'Approve Your Mockup', desc: 'We prep a digital mockup. Approve, tweak, or request changes — you\'re in control.' },
  { icon: <Truck size={28} />, title: 'Fast Courier Delivery', desc: 'Production kicks off immediately. Expect delivery in 3–5 business days.' },
]

function HowItWorks() {
  return (
    <section id="how-it-works" className="timeline-section section">
      <div className="container">
        <h2 className="section-title">
          How It <span className="pink">Works</span>
        </h2>
        <p className="section-sub">From idea to doorstep in four simple steps</p>
        <div className="timeline">
          {steps.map((s, i) => (
            <div className="timeline-step" key={i}>
              <div className="tl-node">
                <div className="tl-icon">{s.icon}</div>
                {i < steps.length - 1 && <div className="tl-line" />}
              </div>
              <div className="tl-content">
                <span className="tl-step-num">Step {i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────────
   FAQ Accordion
   ────────────────────────────────────────────── */
const faqs = [
  {
    q: 'What artwork format and resolution do you require?',
    a: 'We require 300 DPI at actual print size. Acceptable formats: AI, PSD, PNG (transparent background), PDF, or EPS. We can help convert raster to vector for an additional fee — just ask on WhatsApp.',
  },
  {
    q: 'Can I access your full product catalog?',
    a: 'Absolutely! You can view or download both our Bulk Catalogue 2026 and Sublimation Catalogue 2026 right on this page. For custom items not listed, reach out — we source thousands of products through our network.',
  },
  {
    q: 'How fast can I get a quote for a bulk order?',
    a: 'We provide custom quotes within 1–2 hours during business hours via WhatsApp. Just send your artwork, quantities, and product preferences and we\'ll come back with a competitive price.',
  },
  {
    q: 'What\'s the minimum order quantity?',
    a: 'DTF transfers have no minimum — order a single sheet. Screen printing starts at 20 pieces. Sublimation starts at 10 pieces. The more you order, the better the unit price.',
  },
  {
    q: 'Do you ship internationally?',
    a: 'Yes! We ship worldwide via DHL, FedEx, and Aramex. Domestic delivery within 3–5 business days, international 5–10 business days depending on destination.',
  },
]

function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section id="faq" className="faq section">
      <div className="container">
        <h2 className="section-title">
          Frequently Asked <span className="pink">Questions</span>
        </h2>
        <p className="section-sub">Everything you need to know before placing your order</p>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div className={`faq-item ${openIdx === i ? 'open' : ''}`} key={i}>
              <button className="faq-question" onClick={() => setOpenIdx(openIdx === i ? null : i)}>
                <span>{faq.q}</span>
                <ChevronDown size={20} className="faq-chevron" />
              </button>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="faq-cta">
          <p>Still have questions? We're ready 24/7</p>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="btn-primary">
            <MessageCircle size={20} />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────────
   Footer
   ────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Printer size={24} color="#ff00ff" />
          <span>FUNKY <span className="pink">PRINTS</span></span>
        </div>
        <p className="footer-tagline">Premium bulk apparel printing &amp; custom DTF transfers — delivered fast.</p>
        <div className="footer-links">
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <MessageCircle size={16} /> WhatsApp
          </a>
          <a href="mailto:hello@funkyprints.com">
            hello@funkyprints.com
          </a>
        </div>
        <p className="footer-copy">&copy; {new Date().getFullYear()} Funky Prints. All rights reserved.</p>
      </div>
    </footer>
  )
}

/* ──────────────────────────────────────────────
   App
   ────────────────────────────────────────────── */
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Catalog />
        <Services />
        <HowItWorks />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}

export default App