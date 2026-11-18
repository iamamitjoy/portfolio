import fs from 'node:fs'
import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

function liveSitemapPlugin() {
  const baseUrl = 'https://amitjoy.vercel.app'
  const pages = [
    { path: '/', changefreq: 'weekly', priority: '1.0' },
    { path: '/about', changefreq: 'monthly', priority: '0.8' },
    { path: '/education', changefreq: 'monthly', priority: '0.8' },
    { path: '/experience', changefreq: 'monthly', priority: '0.8' },
    { path: '/skills', changefreq: 'monthly', priority: '0.8' },
    { path: '/hobbies', changefreq: 'monthly', priority: '0.6' },
    { path: '/contact', changefreq: 'yearly', priority: '0.7' },
  ]

  const buildXml = () => {
    const now = new Date().toISOString()
    const urls = pages
      .map(
        (p) => `  <url>
    <loc>${baseUrl}${p.path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
      )
      .join('\n')

    return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
  }

  return {
    name: 'live-sitemap',
    // 1. Intercepts /sitemap.xml during `npm run dev` BEFORE SPA fallback loads index.html
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
    // 2. Writes public/sitemap.xml automatically when Vercel runs `npm run build`
    buildStart() {
      const publicDir = path.resolve(process.cwd(), 'public')
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true })
      }
      fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), buildXml())
    },
  }
}

export default defineConfig({
  plugins: [react(), liveSitemapPlugin()],
})