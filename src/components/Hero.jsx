import { hero } from '../data/siteData.js'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__media">
        {hero.video ? (
          <video src={hero.video} poster={hero.image} autoPlay muted loop playsInline />
        ) : (
          <img src={hero.image} alt="" />
        )}
      </div>
      <div className="hero__shade" />
      <div className="container hero__content">
        <p className="eyebrow"><span className="dot" />{hero.eyebrow}</p>
        <h1 className="hero__title">
          {hero.title.map((line, i) => (
            <span key={i} className={i === 1 ? 'accent-outline' : ''}>{line}</span>
          ))}
        </h1>
        <p className="hero__subtitle">{hero.subtitle}</p>
        <div className="hero__actions">
          <a href="#work" className="btn">View Our Work</a>
          <a href="#contact" className="btn btn--ghost">Start a Project</a>
        </div>
      </div>
      <div className="hero__frame" aria-hidden="true">
        <span>4K</span><span>24 FPS</span><span>TAKE 01</span>
      </div>
      <a href="#services" className="hero__scroll" aria-label="Scroll down"><span /></a>
    </section>
  )
}
