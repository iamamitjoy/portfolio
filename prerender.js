import fs from 'node:fs/promises'

const { render, PAGES } = await import('./dist-ssr/entry-server.js')

for (const page of PAGES) {
  const file = page.path === '/' ? 'index.html' : `${page.path.slice(1)}.html`
  const filePath = `dist/${file}`
  let html

  try {
    html = await fs.readFile(filePath, 'utf8')
  } catch (error) {
    throw new Error(`Could not read generated HTML file dist/${file}: ${error.message}`, { cause: error })
  }

  if (!html.includes('<!--app-html-->')) {
    throw new Error(`dist/${file} is missing the <!--app-html--> placeholder`)
  }

  html = html.replace('<!--app-html-->', render(page.id))
  await fs.writeFile(filePath, html)
  console.log(`Pre-rendered ${file}`)
}

await fs.rm('dist-ssr', { recursive: true, force: true })
