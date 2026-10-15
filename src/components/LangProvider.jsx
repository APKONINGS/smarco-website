import { useEffect, useMemo } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { DEFAULT_LANG, LANG_STORAGE_KEY, LangContext, dictionaries, localizedPath } from '../i18n.js'

function storedLang() {
  try {
    return localStorage.getItem(LANG_STORAGE_KEY)
  } catch {
    return null
  }
}

export default function LangProvider({ lang, path, children }) {
  const location = useLocation()
  const value = useMemo(() => ({ lang, t: dictionaries[lang] }), [lang])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  // A visitor who previously chose French lands on an English URL: send them to the French one.
  const preferred = storedLang()
  if (lang === DEFAULT_LANG && preferred && preferred !== lang && dictionaries[preferred]) {
    return <Navigate to={localizedPath(preferred, path) + location.hash} replace />
  }

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}
