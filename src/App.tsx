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
  Truck,
  Image,
  MessageSquare,
  Star,
  CircleDollarSign,
} from 'lucide-react'
import './index.css'

/* ──────────────────────────────────────────────
   Whatsapp Button
   ────────────────────────────────────────────── */
function WhatsappButton({ text = "Chat on WhatsApp" }: { text?: string }){
  return (
    <a href="https://wa.link/y792wg" target="_blank" rel="noopener noreferrer" className="whatsapp-btn btn-primary">
      <img src="https://res.cloudinary.com/drtqu6ocj/image/upload/v1781801144/whatsapp.png"></img>
      {text}
    </a>
  ) 
}

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
          <img src="https://res.cloudinary.com/drtqu6ocj/image/upload/v1768790947/Logo_M_B_wq3jas_acf275.png"></img>
        </a>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          <li><button onClick={() => scrollTo('hero')}>Home</button></li>
          <li><button onClick={() => scrollTo('catalog')}>Catalog</button></li>
          <li><button onClick={() => scrollTo('services')}>Services</button></li>
          <li><button onClick={() => scrollTo('how-it-works')}>How It Works</button></li>
          <li><button onClick={() => scrollTo('faq')}>FAQ</button></li>
        </ul>

        <div className="nav-actions">
          <WhatsappButton />
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
          <span className="hero-badge">🔥 Quality Bulk Printing Since 2025</span>
          <h1>
            Flawless Custom Printing. Powered by <br />
            <span className="pink">DTF & Sublimation.</span>
          </h1>
          <p className="hero-sub">
            We turn your designs into premium, 
              retail-ready custom apparel. 
              
            Whether you are launching a clothing line, 
              branding your business, 
              or outfitting a team, 
              we deliver high-contrast, 
              durable prints that get noticed.
          </p>
          <div className="hero-btns">
            <WhatsappButton text="Tap to WhatsApp"/>
            <button className="btn-secondary" onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}>
              <Eye size={20} />
              Browse Catalogs
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">200+</span>
              <span className="stat-label">Bulk Orders</span>
            </div>
            <div className="stat">
              <span className="stat-num">97%</span>
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
              <img src="https://res.cloudinary.com/drtqu6ocj/image/upload/v1781792541/hoodie.png"></img>
              <span>Premium Hoodies</span>
            </div>
            <div className="visual-card vc-square">
              <img src="https://res.cloudinary.com/drtqu6ocj/image/upload/v1781793518/Curved_Peak.png"></img>
              <span>Caps</span>
            </div>
            <div className="visual-card vc-wide">
              <img src="https://res.cloudinary.com/drtqu6ocj/image/upload/v1781794207/mug_T.png"></img>
              <span>Mugs</span>
            </div>
            <div className="visual-card vc-small">
              <Star size={28} color="#ff00ff" fill="#ff00ff" />
              <span>And So Much More...</span>
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
            <a href="https://drive.google.com/file/d/1WjIvYUObBSzX5ARRTanP6kl0um_ubgWA/preview" target="_blank" rel="noopener noreferrer">
              <img src="https://res.cloudinary.com/drtqu6ocj/image/upload/v1775658041/Cover_T.png"></img>
            </a>
            <h3>Bulk Catalogue</h3>
            <p>T-shirts, hoodies, polos, jackets, caps — full bulk catalog for dtf and sublimation.</p>
            <div className="catalog-actions">
              <a href="https://drive.google.com/file/d/1WjIvYUObBSzX5ARRTanP6kl0um_ubgWA/preview" target="_blank" rel="noopener noreferrer" className="btn-catalog">
                <Eye size={18} />
                View Catalog (PDF)
              </a>
              <a href="https://drive.google.com/uc?export=download&id=1WjIvYUObBSzX5ARRTanP6kl0um_ubgWA" download className="btn-catalog-dl" title="Download PDF">
                <Download size={18} />
              </a>
            </div>
          </div>
          <div className="catalog-card">
            <a href="https://drive.google.com/file/d/1ShI8WR4w6hBBfBIe89nZWRBShJWhZaw5/preview" target="_blank" rel="noopener noreferrer">
              <img src="https://res.cloudinary.com/drtqu6ocj/image/upload/v1770324639/Catalogue_as_book.png"></img>
            </a>
            <h3>Sublimation Catalogue</h3>
            <p>All-over print garments, mugs, accessories — vibrant sublimation-ready products.</p>
            <div className="catalog-actions">
              <a href="https://drive.google.com/file/d/1ShI8WR4w6hBBfBIe89nZWRBShJWhZaw5/preview" target="_blank" rel="noopener noreferrer" className="btn-catalog">
                <Eye size={18} />
                View Catalog (PDF)
              </a>
              <a href="https://drive.google.com/uc?export=download&id=1ShI8WR4w6hBBfBIe89nZWRBShJWhZaw5" download className="btn-catalog-dl" title="Download PDF">
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
    icon: <img src="https://res.cloudinary.com/drtqu6ocj/image/upload/v1781795165/DTF_only.png"></img>,
    title: 'DTF',
    desc: 'Direct-to-film printing for any fabric. Vibrant, wash-resistant, no minimum quantity.',
  },
  {
    icon: <img src="https://res.cloudinary.com/drtqu6ocj/image/upload/v1781795165/Sublimation_only.png"></img>,
    title: 'Sublimation',
    desc: 'Full-colour all-over prints on polyester garments, mugs, bags, accessories, etc.',
  },
  {
    icon: <img src="https://res.cloudinary.com/drtqu6ocj/image/upload/v1781796706/logo_sticker.png"></img>,
    title: 'Vinyl Stickers',
    desc: 'High-durability, full-colour sticker prints cut exactly to your custom shape.',
  }
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
  { icon: <CircleDollarSign size={28} />, title: 'Pay Your Invoice', desc: 'Review and approve the information on your invoice and pay. If its bulk only 50% deposit is required.' },
  { icon: <Truck size={28} />, title: 'Fast Courier Delivery', desc: 'Production kicks off immediately. Expect delivery in 3–5 business days.' },
]

function HowItWorks() {
  return (
    <section id="how-it-works" className="timeline-section section">
      <div className="container">
        <h2 className="section-title">
          How It <span className="pink">Works</span>
        </h2>
        <p className="section-sub">From idea to doorstep in five simple steps</p>
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
  }
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
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────────
  Contact Us
  ────────────────────────────────────────────── */
const contacts = [
  {
    name: 'Whatsapp',
    icon: 'https://res.cloudinary.com/drtqu6ocj/image/upload/v1781801144/whatsapp.png',
    link: 'mailto:prints@funkyprintsrsa.co.za'
  },
  {
    name: 'Email',
    icon: 'https://res.cloudinary.com/drtqu6ocj/image/upload/v1781801013/email_pink.png',
    link: 'https://wa.link/y792wg'
  },
  {
    name: 'Facebook',
    icon: 'https://res.cloudinary.com/drtqu6ocj/image/upload/v1781797628/facebook_circle.png',
    link: 'https://www.facebook.com/share/17GP16nDv7/'
  },
  {
    name: 'Instagram',
    icon: 'https://res.cloudinary.com/drtqu6ocj/image/upload/v1781797646/instagram_circle.png',
    link: 'https://www.instagram.com/funkyprintsrsa?igsh=MW5kNWFyZWVsYzR2Nw=='
  }
]

function ContactUs() {
  return (
    <section id="contactus" className="contact section">
      <div className="container">
        <h2 className="section-title">
          <span className="pink">Contact </span>Us
        </h2>
        <p className="section-sub">Still have questions? We're ready 24/7</p>
        <Socials />
      </div>
    </section>
  )
}

function Socials({ hideText = false } : { hideText?: boolean }){
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <div key={contact.name} className={`contact-item contact-item-${contact.name.toLowerCase()}`}>
          <a href={contact.link} target="_blank" rel="noopener noreferrer">
            <img src={contact.icon} alt={contact.name} />
            {!hideText && <span>{contact.name}</span>}
          </a>
        </div>
      ))}
    </div>
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
          <img src="https://res.cloudinary.com/drtqu6ocj/image/upload/v1768790947/Logo_M_B_wq3jas_acf275.png"></img>
        </div>
        <p className="footer-tagline">Premium bulk apparel printing &amp; custom DTF transfers — delivery included.</p>
        <div className="footer-links">
          <Socials hideText />
        </div>
        <p className="footer-copy">&copy; {new Date().getFullYear()} Funky Prints RSA. All rights reserved.</p>
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
        <ContactUs />
      </main>
      <Footer />
    </>
  )
}

export default App