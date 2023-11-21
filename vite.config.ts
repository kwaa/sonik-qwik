import { defineConfig } from 'vite'
import sonik from 'sonik/vite'
import pages from '@sonikjs/cloudflare-pages'

import { qwikVite } from '@builder.io/qwik/optimizer'
import { qwikReact } from '@builder.io/qwik-react/vite'
import Inspect from 'vite-plugin-inspect'

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        inlineDynamicImports: false,
      },
    },
  },
  define: {
    'process.env': process.env,
  },
  plugins: [
    sonik(),
    pages(),
    qwikReact(),
    qwikVite({
      devSsrServer: false,
      entryStrategy: { type: 'smart' },
      srcDir: './app',
      client: {
        input: ['./app/islands/qwik-counter.tsx', './app/islands/react-counter.tsx'],
        outDir: './dist',
      },
      ssr: {
        input: './preset-qwik/server.ts'
      }
    }),
    Inspect()
  ],
})
