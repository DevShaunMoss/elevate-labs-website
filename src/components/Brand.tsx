import { brand } from '../data/site'

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <a className={`brand${compact ? ' brand-compact' : ''}`} href="#home" aria-label="Elevate Labs home">
      <svg className="brand-mark" viewBox="0 0 52 52" fill="none" aria-hidden="true">
        <path d="M26 4 48 45H4L26 4Z" />
        <path d="M16 31h20M20 22h12" />
      </svg>
      <span className="brand-copy">
        <span className="brand-name">{brand.name}</span>
        {!compact && <span className="brand-tagline">{brand.tagline}</span>}
      </span>
    </a>
  )
}
