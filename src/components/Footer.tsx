import { ArrowUpRight } from 'lucide-react'
import { brand, contacts, navigation, whatsappUrl } from '../data/site'
import { Brand } from './Brand'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const message = 'Hello Elevate Labs, I would like to discuss a website project.'

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand"><Brand /><p>{brand.descriptor}</p></div>
          <div className="footer-nav"><p className="eyebrow">EXPLORE</p>{navigation.map((item) => <a key={item.id} href={`#${item.id}`}>{item.label}</a>)}<a href="#process">Process</a><a href="#faq">FAQ</a></div>
          <div className="footer-contact"><p className="eyebrow">GET IN TOUCH</p>{contacts.map((contact) => <a key={contact.phone} href={whatsappUrl(contact.whatsapp, message)} target="_blank" rel="noopener noreferrer">{contact.display}<ArrowUpRight size={13} aria-hidden="true" /></a>)}</div>
          <a className="footer-cta" href="#contact">Start a project <ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>
        <div className="footer-bottom"><span>© {currentYear} Elevate Labs. All rights reserved.</span><span>{brand.tagline}</span><a href="#home">Back to top ↑</a></div>
      </div>
    </footer>
  )
}
