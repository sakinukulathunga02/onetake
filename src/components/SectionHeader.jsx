import useReveal from '../hooks/useReveal.js'

export default function SectionHeader({ label, title, text }) {
  const ref = useReveal()
  return (
    <div className="section-header reveal" ref={ref}>
      <p className="eyebrow"><span className="dot" />{label}</p>
      <h2>{title}</h2>
      {text && <p className="section-header__text">{text}</p>}
    </div>
  )
}
