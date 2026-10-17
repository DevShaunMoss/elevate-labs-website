import { ChevronDown } from 'lucide-react'
import { SectionHeading } from './SectionHeading'

const questions = [
  {
    question: 'How much will my website cost?',
    answer: 'The packages show starting prices. Your final quote is based on the pages, content, features, and other details we agree on before work starts.',
  },
  {
    question: 'How long does a project take?',
    answer: 'Timing depends on the scope, feedback, and when the content is ready. A practical schedule is discussed and confirmed in your project quote.',
  },
  {
    question: 'Are hosting and domain costs included?',
    answer: 'Hosting and domain needs vary by project. Any services or third-party costs are discussed separately and confirmed in the quote.',
  },
  {
    question: 'How do revisions work?',
    answer: 'The review approach and what is included are agreed as part of the project scope, then set out in your quote.',
  },
  {
    question: 'Can you maintain my website after launch?',
    answer: 'Ongoing support can be discussed when we define the project. Any maintenance work, schedule, and cost are confirmed separately.',
  },
  {
    question: 'How do I get started?',
    answer: 'Send an enquiry using the form or WhatsApp. Share what you are building and what you need the website to help you do, and we can discuss the next step.',
  },
]

export function FAQ() {
  return (
    <section className="section-wrap section-light faq-section" id="faq" aria-labelledby="faq-heading">
      <div className="container faq-layout">
        <SectionHeading id="faq-heading" number="06" eyebrow="GOOD TO KNOW" title="A few common questions." description="Every project is a little different. Here are the details people often ask about first." />
        <div className="faq-list">
          {questions.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary><span>{item.question}</span><ChevronDown size={18} aria-hidden="true" /></summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
