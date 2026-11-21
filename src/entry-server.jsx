import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'

export { PAGES } from './data/site.js'

// eslint-disable-next-line react-refresh/only-export-components
export function render(pageId) {
  return renderToString(
    <StrictMode>
      <App pageId={pageId} />
    </StrictMode>,
  )
}
