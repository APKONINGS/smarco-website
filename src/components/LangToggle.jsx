import { Link, useLocation } from 'react-router-dom'
import { LANGS, LANG_STORAGE_KEY, basePath, localizedPath, useLang } from '../i18n.js'

// EN | FR switch. `tone` adapts it to light (default) or dark/transparent backgrounds.
export default function LangToggle({ tone = 'light', className = '', onSwitch }) {
  const { lang, t } = useLang()
  const location = useLocation()
  const current = basePath(location.pathname)

  const remember = (l) => {
    try {
      localStorage.setItem(LANG_STORAGE_KEY, l)
    } catch {
      // Storage blocked: the switch still works for this visit via the URL.
    }
    onSwitch?.()
  }

  const base = tone === 'dark' ? 'border-white/25 text-white/75' : 'border-divider text-ink/60'
  const active = tone === 'dark' ? 'bg-white text-ink' : 'bg-accent-dark text-white'
  const idle = tone === 'dark' ? 'hover:text-white' : 'hover:text-ink'

  return (
    <div role="group" aria-label={t.lang.label} className={`inline-flex items-center rounded-full border p-0.5 text-xs font-semibold ${base} ${className}`}>
      {LANGS.map((l) => (
        <Link
          key={l}
          to={localizedPath(l, current) + location.hash}
          hrefLang={l}
          lang={l}
          aria-label={t.lang[l]}
          aria-current={l === lang ? 'true' : undefined}
          onClick={() => remember(l)}
          className={`px-2.5 py-1 rounded-full uppercase tracking-wider transition-colors ${l === lang ? active : idle}`}
        >
          {l}
        </Link>
      ))}
    </div>
  )
}
