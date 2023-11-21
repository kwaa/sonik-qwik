// import type { NotFoundHandler } from '@sonikjs/react'
import type { NotFoundHandler } from '../../preset-qwik/server'

const handler: NotFoundHandler = () => {
  return <p>Not Found</p>
}

export default handler
