import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Logo from '../components/Logo.jsx'
import Seo from '../components/Seo.jsx'

export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen bg-background">
      <Seo title="Privacy Policy | SMART Architecture & Construction" path="/privacy" />
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
          Privacy Policy
        </h1>
        <p className="text-muted mb-10">Last updated: August 2026</p>

        <div className="space-y-8 text-ink/80 leading-relaxed">
          <section>
            <h2 className="font-display font-bold text-xl text-ink mb-2">Information we collect</h2>
            <p>
              When you contact SMART Architecture &amp; Construction Company Ltd through our website, we collect
              the information you provide directly — your name, email address, phone number, project location,
              message, and any reference images or site photos you choose to attach.
            </p>
          </section>
          <section>
            <h2 className="font-display font-bold text-xl text-ink mb-2">How we use your information</h2>
            <p>
              We use the information you submit solely to respond to your inquiry, assess your project, and
              provide you with a consultation or quotation. We do not sell, rent, or share your information
              with third parties for marketing purposes.
            </p>
          </section>
          <section>
            <h2 className="font-display font-bold text-xl text-ink mb-2">Data security</h2>
            <p>
              We take reasonable technical and organizational measures to protect the information you share
              with us from unauthorized access, alteration, or disclosure.
            </p>
          </section>
          <section>
            <h2 className="font-display font-bold text-xl text-ink mb-2">Contact us</h2>
            <p>
              If you have questions about this policy or wish to have your information removed from our
              records, contact us at{' '}
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
