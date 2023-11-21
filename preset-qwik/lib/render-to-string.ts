import { renderToString as qwikRenderToString } from '@builder.io/qwik/server'
import { isDev } from '@builder.io/qwik/build'
import { type QwikManifest, type SymbolMapperFn } from '@builder.io/qwik/optimizer'

import { manifest } from '@qwik-client-manifest'

const symbolMapper: SymbolMapperFn = (
  symbolName: string,
  // mapper: SymbolMapper | undefined
) => [
  symbolName,
  `/app/${symbolName.toLocaleLowerCase()}.js`
]

export const renderToString = async (rootNode: any) =>
  await qwikRenderToString(rootNode, {
    // containerTagName: 'div',
    // containerAttributes: { style: 'display: contents' },
    manifest: isDev ? ({} as QwikManifest) : manifest,
    symbolMapper: manifest ? undefined : symbolMapper,
    qwikLoader: { include: 'never' }
  })
    .then(({ html }) => html)
