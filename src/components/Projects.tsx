import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { projects } from '../data/projects'
import { SectionHeading } from './SectionHeading'

export function Projects() {
  return (
    <section className="section-wrap section-light work-section" id="work" aria-labelledby="work-heading">
      <div className="container">
        <SectionHeading
          id="work-heading"
          number="03"
          eyebrow="SELECTED WORK"
          title="Real projects, thoughtfully made."
          description="A selection of working websites and an early product concept. Each is presented in its actual status."
        />
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.name}>
              <a
                className="project-image-link"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.name} in a new tab`}
              >
                <img src={project.image} alt={project.imageAlt} width="1440" height="960" loading="lazy" decoding="async" />
                <span className="project-index">0{index + 1} / WORK</span>
                <span className="project-open"><ExternalLink size={16} aria-hidden="true" /></span>
              </a>
              <div className="project-detail">
                <div className="project-title-row">
                  <div>
                    <p className="eyebrow">{project.category}</p>
                    <h3>{project.name}</h3>
                  </div>
                  <span className={`project-note${project.note.includes('Concept') ? ' project-note-concept' : ''}`}>{project.note}</span>
                </div>
                <p>{project.description}</p>
                <a className="text-link project-visit" href={project.url} target="_blank" rel="noopener noreferrer">
                  Visit website <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="custom-project-cta">
          <div><p className="eyebrow">YOUR IDEA, NEXT</p><h3>Have a project in mind?</h3><p>Let’s talk about a custom website shaped around your needs.</p></div>
          <a className="button button-outline" href="#contact">Request a custom website <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  )
}
