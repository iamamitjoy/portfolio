import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { renderPage, renderSitemap } from './scripts/render-html.js'
import { PAGES } from './src/data/site.js'

const fromRoot = (file) => fileURLToPath(new URL(file, import.meta.url))

// '/about' → 'about.html' (same as Vercel's "cleanUrls": true)
const FILE_BY_PATH = Object.fromEntries(
  PAGES.filter((page) => page.path !== '/').map((page) => [page.path, `/${page.file}.html`]),
)

function htmlPages() {
  return {
    name: 'html-pages',
    apply: (_config, { isSsrBuild }) => !isSsrBuild,

    // Runs before Vite reads its inputs: write one HTML file per page.
    config() {
      const input = {}
      for (const page of PAGES) {
        input[page.file] = fromRoot(`./${page.file}.html`)
        writeFileSync(input[page.file], renderPage(page))
      }
      return { build: { rollupOptions: { input } } }
    },

    configureServer(server) {
      // Serve each page's own HTML file for clean URLs in dev.
      server.middlewares.use((req, res, next) => {
        const [pathname, query = ''] = req.url.split('?')
        const cleanPath = pathname.replace(/\/$/, '') || '/'
        const file = FILE_BY_PATH[cleanPath]
        if (file) req.url = query ? `${file}?${query}` : file
        next()
      })

      // Serve the sitemap from memory.
      server.middlewares.use('/sitemap.xml', (req, res) => {
        res.setHeader('Content-Type', 'application/xml; charset=utf-8')
        res.end(renderSitemap())
      })
    },

    // Same mapping for `npm run preview`.
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        const [pathname, query = ''] = req.url.split('?')
        const cleanPath = pathname.replace(/\/$/, '') || '/'
        const file = FILE_BY_PATH[cleanPath]
        if (file) req.url = query ? `${file}?${query}` : file
        next()
      })
    },

    // Build: put sitemap.xml in dist/.
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: renderSitemap() })
    },
  }
}

export default defineConfig({
  plugins: [react(), htmlPages()],
})
