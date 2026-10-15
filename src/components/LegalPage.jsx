import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Logo from './Logo.jsx'
import Seo from './Seo.jsx'
import LangToggle from './LangToggle.jsx'
import { useLang } from '../i18n.js'

// Shared layout for the privacy and terms pages. `doc` is t.legal.privacy or t.legal.terms.
export default function LegalPage({ doc, seoTitle, path }) {
  const { t, to } = useLang()

  return (
    <div className="relative min-h-screen bg-background">
      <Seo title={seoTitle} path={path} />
      <div className="max-w-3xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
        <div className="flex items-center justify-between gap-4 mb-10">
          <Link to={to('/')} className="inline-flex items-center gap-2 text-sm font-medium text-primary-dark lift-on-hover">
            <ArrowLeft className="h-4 w-4" />
            {t.legal.back}
          </Link>
          <LangToggle />
        </div>

        <div className="flex items-center gap-3 mb-8">
          <Logo className="h-11 w-11" />
          <span className="font-display font-black text-lg text-accent-dark">SMART Architecture</span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-ink tracking-tight mb-4">{doc.title}</h1>
        <p className="text-muted mb-10">
          {t.legal.updated}: {doc.updated}
        </p>

        <div className="space-y-8 text-ink/80 leading-relaxed">
          {doc.sections.map((s) => (
            <section key={s.h}>
              <h2 className="font-display font-bold text-xl text-ink mb-2">{s.h}</h2>
              <p>{s.p}</p>
            </section>
          ))}
          <section>
            <h2 className="font-display font-bold text-xl text-ink mb-2">{doc.contactH}</h2>
            <p>
              {doc.contactP}{' '}
              <a href="mailto:ebuafield@gmail.com" className="text-primary-dark font-medium">
                ebuafield@gmail.com
              </a>{' '}
              {t.legal.or} +237 652 370 882.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
