import { socials } from '../data/siteData.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#top" className="logo">ONE TAKE <span className="rec"><i />REC</span></a>
        <div className="footer__socials">
          {socials.map((s) => (
            <a key={s.name} href={s.url} target="_blank" rel="noreferrer">{s.name}</a>
          ))}
        </div>
        <p>© {new Date().getFullYear()} One Take. All rights reserved.</p>
      </div>
    </footer>
  )
}
