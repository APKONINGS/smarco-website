import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Logo from '../components/Logo.jsx'
import Seo from '../components/Seo.jsx'

export default function Terms() {
  return (
    <div className="relative min-h-screen bg-background">
      <Seo title="Terms of Service | SMART Architecture & Construction" path="/terms" />
      <div className="max-w-3xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-primary-dark lift-on-hover mb-10">
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <div className="flex items-center gap-3 mb-8">
          <Logo className="h-11 w-11" />
          <span className="font-display font-black text-lg text-accent-dark">SMART Architecture</span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-ink tracking-tight mb-4">
          Terms of Service
        </h1>
        <p className="text-muted mb-10">Last updated: August 2026</p>

        <div className="space-y-8 text-ink/80 leading-relaxed">
          <section>
            <h2 className="font-display font-bold text-xl text-ink mb-2">Scope of services</h2>
            <p>
              SMART Architecture &amp; Construction Company Ltd provides architectural design, civil and
              structural engineering, construction management, and related consultancy services. The scope,
              cost, and timeline of any engagement are agreed in writing before work begins.
            </p>
          </section>
          <section>
            <h2 className="font-display font-bold text-xl text-ink mb-2">Website use</h2>
            <p>
              This website is provided for informational purposes to help prospective clients learn about our
              services and request a consultation. Submitting an inquiry does not create a contractual
              relationship until a formal agreement is signed by both parties.
            </p>
          </section>
          <section>
            <h2 className="font-display font-bold text-xl text-ink mb-2">Intellectual property</h2>
            <p>
              All content on this website — including designs, drawings, photographs, and text — is the
              property of SMART Architecture &amp; Construction Company Ltd unless otherwise credited, and may
              not be reproduced without written permission.
            </p>
          </section>
          <section>
            <h2 className="font-display font-bold text-xl text-ink mb-2">Contact us</h2>
            <p>
              For questions about these terms, contact us at{' '}
              <a href="mailto:ebuafield@gmail.com" className="text-primary-dark font-medium">
                ebuafield@gmail.com
              </a>{' '}
              or +237 652 370 882.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
