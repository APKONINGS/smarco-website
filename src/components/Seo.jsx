import { useEffect } from 'react'
import { SITE_URL } from '../site.js'

// Per-page head tags. The title is set imperatively because index.html already has a <title>
// and browsers use the first one; React 19 hoists the canonical <link> into <head>.
export default function Seo({ title, path = '/' }) {
  useEffect(() => {
    if (!title) return
    const previous = document.title
    document.title = title
    return () => {
      document.title = previous
    }
  }, [title])

  return SITE_URL ? <link rel="canonical" href={`${SITE_URL}${path}`} /> : null
}
