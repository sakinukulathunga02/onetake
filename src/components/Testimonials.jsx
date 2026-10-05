import { testimonials } from '../data/siteData.js'
import SectionHeader from './SectionHeader.jsx'
import useReveal from '../hooks/useReveal.js'

function Quote({ item, index }) {
  const ref = useReveal()
  return (
    <figure className="card quote reveal" ref={ref} style={{ transitionDelay: `${index * 90}ms` }}>
      <blockquote>“{item.quote}”</blockquote>
      <figcaption>
        <strong>{item.name}</strong>
        <span>{item.role}</span>
      </figcaption>
    </figure>
  )
}

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader label="Client love" title="What our clients say" />
        <div className="quotes">
          {testimonials.map((t, i) => <Quote key={i} item={t} index={i} />)}
        </div>
      </div>
    </section>
  )
}
