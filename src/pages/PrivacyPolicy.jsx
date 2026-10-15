import LegalPage from '../components/LegalPage.jsx'
import { useLang } from '../i18n.js'

export default function PrivacyPolicy() {
  const { t } = useLang()
  return <LegalPage doc={t.legal.privacy} seoTitle={t.seo.privacyTitle} path="/privacy" />
}
