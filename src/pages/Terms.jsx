import LegalPage from '../components/LegalPage.jsx'
import { useLang } from '../i18n.js'

export default function Terms() {
  const { t } = useLang()
  return <LegalPage doc={t.legal.terms} seoTitle={t.seo.termsTitle} path="/terms" />
}
