import { services } from '../data/siteData.js'
import SectionHeader from './SectionHeader.jsx'
import useReveal from '../hooks/useReveal.js'

const icons = {
  music: <path d="M9 18V5l12-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm12-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />,
  mic: <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Zm7 10a7 7 0 0 1-14 0m7 7v3m-4 0h8" />,
  ad: <path d="M3 11v2a1 1 0 0 0 1 1h3l5 4V6L7 10H4a1 1 0 0 0-1 1Zm13-3a5 5 0 0 1 0 8m3-11a9 9 0 0 1 0 14" />,
  sparkle: <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Zm7 13l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z" />,
  script: <path d="M4 20h4L19 9l-4-4L4 16v4Zm9-13 4 4" />,
  share: <path d="M7 17 17 7m0 0H9m8 0v8M4 4h6M4 4v16h16v-6" />,
}

function ServiceCard({ service, index }) {
  const ref = useReveal()
  return (
    <article className="card service reveal" ref={ref} style={{ transitionDelay: `${index * 70}ms` }}>
      <svg className="service__icon" viewBox="0 0 24 24" aria-hidden="true">{icons[service.icon]}</svg>
      <h3>{service.title}</h3>
      <p>{service.text}</p>
    </article>
  )
}

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHeader
          label="What we do"
          title="Full video production, under one roof"
          text="You don't need a separate writer, crew, editor and social media manager. We do all of it."
        />
        <div className="services-grid">
          {services.map((s, i) => <ServiceCard key={s.title} service={s} index={i} />)}
        </div>
      </div>
    </section>
  )
}
