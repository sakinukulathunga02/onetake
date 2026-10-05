import { useEffect, useState } from 'react'
import { portfolio, portfolioCategories } from '../data/siteData.js'
import SectionHeader from './SectionHeader.jsx'

// Turns a normal YouTube link into an embeddable one.
function toEmbedUrl(url) {
  const match = url.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/)
  return match ? `https://www.youtube.com/embed/${match[1]}?autoplay=1&rel=0` : url
}

function VideoModal({ item, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={item.title} onClick={onClose}>
      <div className="modal__box" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close">×</button>
        <div className="modal__video">
          {item.videoUrl ? (
            <iframe
              src={toEmbedUrl(item.videoUrl)}
              title={item.title}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
            />
          ) : (
            <div className="modal__placeholder" style={{ backgroundImage: `url(${item.image})` }}>
              <p>Video coming soon</p>
            </div>
          )}
        </div>
        <div className="modal__info">
          <h3>{item.title}</h3>
          <p>{item.category} · {item.client}</p>
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [filter, setFilter] = useState('All')
  const [active, setActive] = useState(null)
  const items = filter === 'All' ? portfolio : portfolio.filter((p) => p.category === filter)

  return (
    <section className="section" id="work">
      <div className="container">
        <SectionHeader label="Our work" title="Selected projects" />
        <div className="filters">
          {portfolioCategories.map((c) => (
            <button
              key={c}
              aria-pressed={filter === c}
              className={`chip ${filter === c ? 'chip--active' : ''}`}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="work-grid">
          {items.map((item) => (
            <button key={item.title} className="work" onClick={() => setActive(item)}>
              <img src={item.image} alt={item.title} loading="lazy" />
              <span className="work__play" aria-hidden="true" />
              <span className="work__info">
                <span className="work__cat">{item.category}</span>
                <span className="work__title">{item.title}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
      {active && <VideoModal item={active} onClose={() => setActive(null)} />}
    </section>
  )
}
