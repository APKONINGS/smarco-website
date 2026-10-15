import { createContext, useContext } from 'react'
import en from './locales/en.js'
import fr from './locales/fr.js'
import { DEFAULT_LANG, localizedPath } from './i18n-paths.js'

export { LANGS, DEFAULT_LANG, localizedPath, basePath } from './i18n-paths.js'

export const dictionaries = { en, fr }

// Only set when the visitor explicitly picks a language, so crawlers and first-time visitors
// always get the URL they asked for.
export const LANG_STORAGE_KEY = 'smarco-lang'

export const LangContext = createContext({ lang: DEFAULT_LANG, t: en })

export function useLang() {
  const { lang, t } = useContext(LangContext)
  return { lang, t, to: (path) => localizedPath(lang, path) }
}
