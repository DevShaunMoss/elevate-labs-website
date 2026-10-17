import { useState, type FormEvent } from 'react'
import { ArrowUpRight, MessageCircle, Phone } from 'lucide-react'
import { contacts, whatsappUrl } from '../data/site'
import { SectionHeading } from './SectionHeading'

type Feedback = { tone: 'ready' | 'error'; message: string; url?: string }

export function Contact() {
  const [feedback, setFeedback] = useState<Feedback | null>(null)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) {
      setFeedback({ tone: 'error', message: 'Please check the required fields and try again.' })
      return
    }

    const values = new FormData(form)
    const name = String(values.get('name') ?? '').trim()
    const phone = String(values.get('phone') ?? '').trim()
    const projectType = String(values.get('project-type') ?? '').trim()
    const details = String(values.get('details') ?? '').trim()
    const message = [
      'Hello Elevate Labs, I would like to discuss a project.',
      `Name: ${name}`,
      phone ? `Phone: ${phone}` : '',
      `Project type: ${projectType}`,
      `Project details: ${details}`,
    ].filter(Boolean).join('\n')
    const url = whatsappUrl(contacts[0].whatsapp, message)

    setFeedback({
      tone: 'ready',
      url,
      message: 'Your enquiry is ready in WhatsApp. Review the message and send it there; it has not been sent yet. If a new tab did not open, use the link below.',
    })
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="section-wrap section-navy contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact-heading">
          <SectionHeading id="contact-heading" number="07" eyebrow="LET’S TALK" title="Tell me what you’re building." description="Send a few details and I’ll follow up through WhatsApp so we can talk through the scope." />
        </div>
        <div className="contact-layout">
          <div className="contact-direct">
            <p className="eyebrow">CALL OR WHATSAPP</p>
            <p className="contact-prompt">Choose the contact that works for you.</p>
            <div className="contact-numbers">
              {contacts.map((contact) => {
                const message = 'Hello Elevate Labs, I would like to discuss a website project.'
                return (
                  <article className="contact-number" key={contact.phone}>
                    <span className="contact-number-icon"><Phone size={20} aria-hidden="true" /></span>
                    <div className="contact-number-copy"><span>{contact.label}</span><a href={`tel:${contact.phone}`}>{contact.display}</a></div>
                    <a className="contact-whatsapp" href={whatsappUrl(contact.whatsapp, message)} target="_blank" rel="noopener noreferrer" aria-label={`WhatsApp ${contact.display}`}>
                      <MessageCircle size={17} aria-hidden="true" /><span>WhatsApp</span><ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  </article>
                )
              })}
            </div>
            <p className="contact-note">WhatsApp opens with a draft message. Check the details and send when you’re ready.</p>
          </div>
          <form
            className="enquiry-form"
            aria-label="Project enquiry form"
            aria-describedby="form-privacy"
            onSubmit={handleSubmit}
            onInvalidCapture={() => setFeedback({ tone: 'error', message: 'Please check the required fields and correct any highlighted values.' })}
          >
            <div className="form-heading"><span className="eyebrow">PROJECT ENQUIRY</span><span className="form-required">* Required</span></div>
            <div className="form-row">
              <label className="form-field">Your name <span aria-hidden="true">*</span>
                <input name="name" type="text" autoComplete="name" required maxLength={80} placeholder="How should I address you?" />
              </label>
              <label className="form-field">Phone number
                <input name="phone" type="tel" autoComplete="tel" inputMode="tel" pattern="[0-9+()\s-]{7,20}" title="Enter a phone number with at least 7 digits." placeholder="Optional" />
              </label>
            </div>
            <label className="form-field">What are you looking to build? <span aria-hidden="true">*</span>
              <select name="project-type" defaultValue="" required>
                <option value="" disabled>Select a project type</option>
                <option>Business website</option>
                <option>Landing page</option>
                <option>Portfolio website</option>
                <option>Web application</option>
                <option>Custom digital solution</option>
                <option>Not sure yet</option>
              </select>
            </label>
            <label className="form-field">A few project details <span aria-hidden="true">*</span>
              <textarea name="details" rows={4} minLength={10} maxLength={1200} required placeholder="What do you want the website to help you do?" />
            </label>
            <button className="button form-submit" type="submit">Prepare WhatsApp enquiry <ArrowUpRight size={17} aria-hidden="true" /></button>
            <p id="form-privacy" className="form-privacy">This form prepares a message in WhatsApp. No details are sent to a server.</p>
            {feedback && (
              <div className={`form-feedback ${feedback.tone}`} role={feedback.tone === 'error' ? 'alert' : 'status'}>
                <p>{feedback.message}</p>
                {feedback.url && <a href={feedback.url} target="_blank" rel="noopener noreferrer">Open your WhatsApp draft <ArrowUpRight size={14} aria-hidden="true" /></a>}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
