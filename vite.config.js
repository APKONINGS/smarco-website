import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

import { LANGS, DEFAULT_LANG, localizedPath } from './src/i18n-paths.js'

const ROUTES = ['/', '/privacy', '/terms']

// Emits robots.txt and sitemap.xml at build time so they always use the configured domain.
// Each URL lists its language alternates so search engines pair the English and French pages.
function seoFiles(siteUrl) {
  return {
    name: 'seo-files',
    apply: 'build',
    generateBundle() {
      const lastmod = new Date().toISOString().slice(0, 10)
      const href = (lang, path) => siteUrl + localizedPath(lang, path)
      const urls = ROUTES.flatMap((path) => {
        const alternates = [
          ...LANGS.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${href(l, path)}"/>`),
          `    <xhtml:link rel="alternate" hreflang="x-default" href="${href(DEFAULT_LANG, path)}"/>`,
        ].join('\n')
        return LANGS.map(
          (lang) => `  <url>\n    <loc>${href(lang, path)}</loc>\n    <lastmod>${lastmod}</lastmod>\n${alternates}\n  </url>`
        )
      }).join('\n')

      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`,
      })
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  const siteUrl = (env.VITE_SITE_URL || '').replace(/\/$/, '')

  return {
    plugins: [react(), seoFiles(siteUrl)],
    server: { port: 5173, open: true },
  }
})
