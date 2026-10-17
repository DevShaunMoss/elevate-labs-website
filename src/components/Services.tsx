import { ArrowUpRight } from 'lucide-react'
import { services } from '../data/services'
import { SectionHeading } from './SectionHeading'

export function Services() {
  return (
    <section className="section-wrap section-light" id="services" aria-labelledby="services-heading">
      <div className="container">
        <SectionHeading
          id="services-heading"
          number="01"
          eyebrow="WHAT I BUILD"
          title="Digital tools for your next step."
          description="From a focused landing page to a custom web app, each project starts with what you need it to do."
        />
        <div className="services-grid">
          {services.map(({ title, description, icon: Icon }, index) => (
            <article className="service-item" key={title}>
              <div className="service-topline"><span>0{index + 1}</span><Icon size={20} strokeWidth={1.6} aria-hidden="true" /></div>
              <h3>{title}</h3>
              <p>{description}</p>
              <a className="service-link" href="#contact" aria-label={`Ask about ${title}`}>
                Start a conversation <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
