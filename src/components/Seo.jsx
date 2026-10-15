import { useEffect } from 'react'
import { SITE_URL } from '../site.js'
import { DEFAULT_LANG, LANGS, localizedPath, useLang } from '../i18n.js'

function useHeadText(title, description) {
  useEffect(() => {
    const meta = document.querySelector('meta[name="description"]')
    const previous = { title: document.title, description: meta?.getAttribute('content') }
    if (title) document.title = title
    if (description && meta) meta.setAttribute('content', description)
    return () => {
      document.title = previous.title
      if (meta && previous.description != null) meta.setAttribute('content', previous.description)
    }
  }, [title, description])
}

// Per-page head tags. Title and description are set imperatively because index.html already has
// them and browsers use the first <title>; React 19 hoists the <link> tags into <head>.
// `path` is the language-neutral path ('/', '/privacy', ...).
export default function Seo({ title, description, path = '/' }) {
  const { lang } = useLang()
  useHeadText(title, description)

  if (!SITE_URL) return null
  return (
    <>
      <link rel="canonical" href={SITE_URL + localizedPath(lang, path)} />
      {LANGS.map((l) => (
        <link key={l} rel="alternate" hrefLang={l} href={SITE_URL + localizedPath(l, path)} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={SITE_URL + localizedPath(DEFAULT_LANG, path)} />
    </>
  )
}
