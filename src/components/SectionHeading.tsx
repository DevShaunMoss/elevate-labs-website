export function SectionHeading({
  id,
  number,
  eyebrow,
  title,
  description,
}: {
  id: string
  number: string
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow"><span className="section-number">{number} /</span> {eyebrow}</p>
        <h2 id={id}>{title}</h2>
      </div>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}
