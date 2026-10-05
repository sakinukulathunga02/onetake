import { useState } from 'react'
import { contact, socials } from '../data/siteData.js'
import SectionHeader from './SectionHeader.jsx'

const projectTypes = ['Music Video', 'Rap Video', 'Commercial Ad', 'Aesthetic Film', 'Script / Concept only', 'Social Media Package', 'Other']

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    // No Formspree ID yet: open the visitor's email app with the message filled in.
    if (!contact.formspreeId) {
      const subject = `New project: ${data.get('type')} – ${data.get('name')}`
      const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nPhone: ${data.get('phone')}\nProject: ${data.get('type')}\n\n${data.get('message')}`
      window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${contact.formspreeId}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error()
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="section section--alt" id="contact">
      <div className="container">
        <SectionHeader
          label="Contact"
          title="Let's make your next video"
          text="Tell us about your project and we'll get back to you within 24 hours."
        />
        <div className="contact">
          <form className="form card" onSubmit={handleSubmit}>
            <div className="form__row">
              <label>
                Name
                <input name="name" required placeholder="Your name" />
              </label>
              <label>
                Email
                <input name="email" type="email" required placeholder="you@email.com" />
              </label>
            </div>
            <div className="form__row">
              <label>
                Phone
                <input name="phone" type="tel" placeholder="Optional" />
              </label>
              <label>
                Project type
                <select name="type" defaultValue={projectTypes[0]}>
                  {projectTypes.map((t) => <option key={t}>{t}</option>)}
                </select>
              </label>
            </div>
            <label>
              Tell us about your project
              <textarea name="message" rows="5" required placeholder="Your idea, song, brand, deadline, budget…" />
            </label>
            <button className="btn" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
            {status === 'sent' && <p className="form__note form__note--ok">Thanks! We'll be in touch soon.</p>}
            {status === 'error' && <p className="form__note form__note--err">Something went wrong. Please email or WhatsApp us.</p>}
          </form>

          <aside className="contact__info">
            <div>
              <h3>Email</h3>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
            <div>
              <h3>Phone</h3>
              <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
            </div>
            <div>
              <h3>WhatsApp</h3>
              <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer">Chat with us</a>
            </div>
            <div>
              <h3>Studio</h3>
              <p>{contact.location}</p>
            </div>
            <div className="socials">
              {socials.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noreferrer">{s.name}</a>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
