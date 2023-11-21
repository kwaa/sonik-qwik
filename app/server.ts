// import { createApp } from '@sonikjs/react'
import { createApp } from '../preset-qwik'
import { serveStatic } from 'hono/cloudflare-pages'

const app = createApp()
app.use('/static/*', serveStatic())

app.showRoutes()

export default app
