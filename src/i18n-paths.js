// Plain path helpers with no React imports, so vite.config.js can share them.
export const LANGS = ['en', 'fr']
export const DEFAULT_LANG = 'en'

// '/privacy' -> '/fr/privacy' ; '/' -> '/fr'
export function localizedPath(lang, path = '/') {
  if (lang === DEFAULT_LANG) return path
  return path === '/' ? `/${lang}` : `/${lang}${path}`
}

// '/fr/privacy' -> '/privacy' ; '/fr' -> '/'
export function basePath(pathname) {
  for (const lang of LANGS) {
    if (lang === DEFAULT_LANG) continue
    if (pathname === `/${lang}` || pathname === `/${lang}/`) return '/'
    if (pathname.startsWith(`/${lang}/`)) return pathname.slice(lang.length + 1)
  }
  return pathname
}
