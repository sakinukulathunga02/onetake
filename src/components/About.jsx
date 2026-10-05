import { about } from '../data/siteData.js'
import useReveal from '../hooks/useReveal.js'

export default function About() {
  const imgRef = useReveal()
  const textRef = useReveal()
  return (
    <section className="section section--alt" id="about">
      <div className="container about">
        <div className="about__image reveal" ref={imgRef}>
          <img src={about.image} alt="One Take crew filming" loading="lazy" />
          <span className="about__badge"><i />REC</span>
        </div>
        <div className="about__text reveal" ref={textRef}>
          <p className="eyebrow"><span className="dot" />About us</p>
          <h2>{about.title}</h2>
          {about.text.map((t, i) => <p key={i}>{t}</p>)}
          <div className="stats">
            {about.stats.map((s) => (
              <div key={s.label} className="stat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
