import { ArrowDownRight, ArrowUpRight, Check, Monitor, Smartphone, Zap } from 'lucide-react'

function SampleWebsite() {
  return (
    <div className="demo-screen" role="img" aria-label="Website design demonstration for the fictional Northfield Architecture studio">
      <div className="demo-browser-bar" aria-hidden="true">
        <span className="demo-dots"><i /><i /><i /></span>
        <span className="demo-address">northfield.studio / home</span>
        <span className="demo-menu-icon">•••</span>
      </div>
      <div className="demo-page">
        <div className="demo-nav">
          <span className="demo-wordmark"><span className="demo-monogram">N</span> northfield</span>
          <div className="demo-nav-links"><span>STUDIO</span><span>PROJECTS</span><span>CONTACT</span></div>
          <span className="demo-nav-button">START A PROJECT <ArrowUpRight size={10} /></span>
        </div>
        <div className="demo-hero">
          <div className="demo-copy">
            <span className="demo-kicker">ARCHITECTURE · LUSAKA</span>
            <strong>Spaces made for living.</strong>
            <p>Thoughtful architecture for the way we live today.</p>
            <span className="demo-link">EXPLORE OUR WORK <ArrowDownRight size={12} /></span>
          </div>
          <div className="demo-building" aria-hidden="true">
            <svg viewBox="0 0 360 225" fill="none">
              <rect width="360" height="225" fill="#D8DFE2" />
              <path d="M0 155 100 87l114 12v126H0V155Z" fill="#AEBCC2" />
              <path d="m214 99 94-41 52 18v149H214V99Z" fill="#344451" />
              <path d="m100 87 104-51 104 22-94 41-114-12Z" fill="#788993" />
              <path d="m214 99 94-41v167h-94V99Z" fill="#485A65" />
              <path d="m228 112 63-28v34l-63 28v-34Zm0 49 63-28v34l-63 28v-34Zm-108-57 72 8v30l-72-8v-30Zm0 48 72 8v30l-72-8v-30Z" fill="#D7E1E2" fillOpacity=".75" />
              <path d="M0 205h360" stroke="#fff" strokeOpacity=".8" strokeWidth="3" />
            </svg>
            <span className="demo-building-caption">NORTHFIELD HOUSE · 2026</span>
          </div>
        </div>
        <div className="demo-features">
          <span><Monitor size={13} /> Clear design</span>
          <span><Smartphone size={13} /> Responsive</span>
          <span><Zap size={13} /> Built for speed</span>
          <span><Check size={13} /> Easy to explore</span>
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
      <div className="hero-grid-art" aria-hidden="true"><span /><span /><span /></div>
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="eyebrow hero-kicker">WEBSITES <span>·</span> WEB APPS <span>·</span> DIGITAL SOLUTIONS</p>
          <h1 id="hero-title">Professional websites. <span>Made to move you forward.</span></h1>
          <p className="hero-intro">
            Clear, responsive digital experiences that help businesses and people show up with confidence online.
          </p>
          <div className="hero-actions">
            <a className="button" href="#contact">Discuss your project <ArrowUpRight size={17} aria-hidden="true" /></a>
            <a className="text-link" href="#packages">Explore packages <ArrowDownRight size={17} aria-hidden="true" /></a>
          </div>
          <div className="hero-note"><span className="hero-note-rule" />Affordable, professional solutions by a student developer in Zambia.</div>
        </div>
        <div className="hero-visual">
          <div className="demo-label"><span className="status-dot" /> DESIGN DEMONSTRATION</div>
          <div className="laptop">
            <div className="laptop-display"><SampleWebsite /></div>
            <div className="laptop-base" aria-hidden="true"><span /></div>
          </div>
          <p className="demo-caption">Fictional sample business · Interface concept</p>
        </div>
      </div>
      <div className="container hero-bottom">
        <span>Designed with purpose</span><span className="hero-divider" />
        <span>Responsive by default</span><span className="hero-divider" />
        <span>Built around your goals</span>
      </div>
    </section>
  )
}
