import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section className="section-wrap section-navy about-section" id="about" aria-labelledby="about-heading">
      <div className="container about-layout">
        <SectionHeading id="about-heading" number="04" eyebrow="ABOUT ELEVATE LABS" title="Technology should feel useful. And within reach." />
        <div className="about-copy">
          <p className="about-lead">Elevate Labs is a student developer’s practice focused on making thoughtful digital work more accessible.</p>
          <p>I offer affordable, professional digital solutions for businesses, students, freelancers, and organisations.</p>
          <p>I build websites and web experiences with care for the details people notice: clear structure, comfortable reading, dependable mobile layouts, and an easy next step.</p>
          <p>Projects are approached one at a time, with the scope and expectations discussed clearly before development begins.</p>
          <div className="about-rule"><span>STUDENT DEVELOPER</span><span>ZAMBIA</span><span>WEB · DIGITAL</span></div>
        </div>
      </div>
    </section>
  )
}
