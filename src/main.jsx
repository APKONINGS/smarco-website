import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import Terms from './pages/Terms.jsx'
import LangProvider from './components/LangProvider.jsx'
import { LANGS, localizedPath } from './i18n.js'
import './index.css'

const PAGES = [
  ['/', App],
  ['/privacy', PrivacyPolicy],
  ['/terms', Terms],
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {LANGS.flatMap((lang) =>
          PAGES.map(([path, Page]) => (
            <Route
              key={`${lang}${path}`}
              path={localizedPath(lang, path)}
              element={
                <LangProvider key={lang} lang={lang} path={path}>
                  <Page />
                </LangProvider>
              }
            />
          ))
        )}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
