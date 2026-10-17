import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from './SectionHeading'

const steps = [
  { title: 'Enquiry', description: 'Share a little about the idea and what you need your website to do.' },
  { title: 'Requirements', description: 'We clarify the audience, content, features, and project scope together.' },
  { title: 'Design & development', description: 'The agreed experience is designed and built for real devices.' },
  { title: 'Review', description: 'You review the work and share feedback against the agreed scope.' },
  { title: 'Launch', description: 'Once approved, we coordinate the launch and confirm any handover details.' },
]

export function Process() {
  return (
    <section className="section-wrap section-light process-section" id="process" aria-labelledby="process-heading">
      <div className="container">
        <SectionHeading
          id="process-heading"
          number="05"
          eyebrow="HOW IT WORKS"
          title="A straightforward process."
          description="Clear steps keep the work focused—from the first conversation through launch."
        />
        <ol className="process-grid">
          {steps.map((step, index) => (
            <li className="process-step" key={step.title}>
              <span className="process-count">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {index < steps.length - 1 && <ArrowUpRight className="process-arrow" size={17} aria-hidden="true" />}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
