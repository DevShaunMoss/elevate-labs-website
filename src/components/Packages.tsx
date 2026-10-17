import { ArrowUpRight, BriefcaseBusiness, Check, Gem, Gift, Send } from 'lucide-react'
import { packages } from '../data/packages'
import { contacts, whatsappUrl } from '../data/site'
import { SectionHeading } from './SectionHeading'

export function Packages() {
  const packageIcons = [Send, Gem, BriefcaseBusiness]

  return (
    <section className="section-wrap section-navy" id="packages" aria-labelledby="packages-heading">
      <div className="container">
        <SectionHeading
          id="packages-heading"
          number="02"
          eyebrow="STARTING PACKAGES"
          title="A clear place to begin."
          description="Starting prices for common project types. The final quote depends on your goals, content, and agreed scope."
        />
        <div className="packages-grid">
          {packages.map((plan, index) => {
            const message = `Hello Elevate Labs, I would like to ask about the ${plan.name} website package (from ${plan.amount}).`
            const url = whatsappUrl(contacts[0].whatsapp, message)
            const PackageIcon = packageIcons[index]

            return (
              <article className={`package-card${index === 1 ? ' package-card-featured' : ''}`} key={plan.name}>
                <div className="package-heading">
                  <div>
                    <p className="eyebrow">0{index + 1} · WEBSITE PACKAGE</p>
                    <h3>{plan.name}</h3>
                  </div>
                  <span className="package-symbol" aria-hidden="true"><PackageIcon size={20} strokeWidth={1.5} /></span>
                </div>
                <p className="package-summary">{plan.summary}</p>
                <div className="package-price">
                  <span>Starting from</span>
                  <strong>{plan.amount}</strong>
                </div>
                <ul className="feature-list">
                  {plan.features.map((feature) => (
                    <li key={feature}><Check size={16} aria-hidden="true" />{feature}</li>
                  ))}
                </ul>
                <a className="button package-cta" href={url} target="_blank" rel="noopener noreferrer">
                  Ask about {plan.name} <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </article>
            )
          })}
        </div>
        <div className="pricing-note">
          <span className="pricing-note-icon"><Gift size={23} strokeWidth={1.5} aria-hidden="true" /></span>
          <div>
            <strong>A little extra, included.</strong>
            <p>Every website package comes with a complimentary promotional graphic design offer. Details are confirmed in your project quote.</p>
          </div>
          <span className="pricing-note-mark" aria-hidden="true">EL / 02</span>
        </div>
        <p className="price-disclaimer">All prices are starting prices in Zambian kwacha. Final pricing depends on the project scope and is confirmed before work begins.</p>
      </div>
    </section>
  )
}
