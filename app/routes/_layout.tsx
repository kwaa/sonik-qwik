// import type { LayoutHandler } from '@sonikjs/react'
import type { LayoutHandler } from '../../preset-qwik/server'
import { getQwikLoaderScript } from '@builder.io/qwik/server'

const handler: LayoutHandler = ({ children, head }) => {
  return (
    // <html lang='en'>
    <>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <script dangerouslySetInnerHTML={getQwikLoaderScript()}></script>
        {import.meta.env.PROD ? (
          <>
            <link href='/static/style.css' rel='stylesheet' />
            <script type='module' src='/static/client.js'></script>
          </>
        ) : (
          <>
            <link href='/app/style.css' rel='stylesheet' />
            <script type='module' src='/app/client.ts'></script>
          </>
        )}
        {head.createTags()}
      </head>
      <body>
        {/* <div className='wrapper'> */}
        <div class='wrapper'>
          <header>
            <h1>
              <a href='/'>Top</a>
            </h1>
          </header>
          {children}
          <footer style={{ marginTop: '2rem' }}>
            <small>© 2023 your name</small>
          </footer>
        </div>
      </body>
    </>
    // </html>
  )
}

export default handler
