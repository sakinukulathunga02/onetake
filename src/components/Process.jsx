import { process } from '../data/siteData.js'
import SectionHeader from './SectionHeader.jsx'
import useReveal from '../hooks/useReveal.js'

function Step({ item, index }) {
  const ref = useReveal()
  return (
    <li className="step reveal" ref={ref} style={{ transitionDelay: `${index * 80}ms` }}>
      <span className="step__num">{item.step}</span>
      <h3>{item.title}</h3>
      <p>{item.text}</p>
    </li>
  )
}

export default function Process() {
  return (
    <section className="section section--alt" id="process">
      <div className="container">
        <SectionHeader
          label="How we work"
          title="From idea to your feed"
          text="Six steps. One team. You stay in the loop at every stage."
        />
        <ol className="process">
          {process.map((p, i) => <Step key={p.step} item={p} index={i} />)}
        </ol>
      </div>
    </section>
  )
}
