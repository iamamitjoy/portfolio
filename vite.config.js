import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const PAGES = [
  { name: 'index', path: '/', changefreq: 'weekly', priority: '1.0' },
  { name: 'about', path: '/about', changefreq: 'monthly', priority: '0.8' },
  { name: 'education', path: '/education', changefreq: 'monthly', priority: '0.8' },
  { name: 'experience', path: '/experience', changefreq: 'monthly', priority: '0.8' },
  { name: 'skills', path: '/skills', changefreq: 'monthly', priority: '0.8' },
  { name: 'hobbies', path: '/hobbies', changefreq: 'monthly', priority: '0.6' },
  { name: 'contact', path: '/contact', changefreq: 'yearly', priority: '0.7' },
]

function liveSitemapPlugin() {
  const baseUrl = 'https://amitjoy.vercel.app'

  const buildXml = () => {
    const now = new Date().toISOString()
    const urls = PAGES.map(
      (p) => `  <url>
    <loc>${baseUrl}${p.path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
    ).join('\n')

    return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
  }

  return {
    name: 'live-sitemap',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/sitemap.xml') {
          res.statusCode = 200
          res.setHeader('Content-Type', 'application/xml; charset=utf-8')
          res.end(buildXml())
          return
        }
        next()
      })
    },
    buildStart() {
      const publicDir = path.resolve(process.cwd(), 'public')
      fs.mkdirSync(publicDir, { recursive: true })
      fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), buildXml())
    },
  }
}

export default defineConfig({
  plugins: [react(), liveSitemapPlugin()],
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        PAGES.map(({ name }) => [name, fileURLToPath(new URL(`./${name}.html`, import.meta.url))])
      ),
    },
  },
})