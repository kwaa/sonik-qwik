import type { Env } from 'hono'
import type { JSXNode } from '@builder.io/qwik'
import { jsx, Fragment } from '@builder.io/qwik'
import { renderToString } from './lib/render-to-string'
import { createApp as baseCreateApp } from 'sonik/server'
import type { Head, ServerOptions } from 'sonik/server'
import type * as types from 'sonik/types'

export type Node = JSXNode

export const createApp = <E extends Env = Env>(
  options?: Omit<ServerOptions<E>,
    'renderToString' | 'renderToReadableStream' | 'createElement' | 'fragment' | 'setDefaultRenderer'>
) => baseCreateApp<E>({
  renderToString,
  createElement: jsx,
  fragment: Fragment,
  ...options,
})

export type NotFoundHandler<E extends Env = Env> = types.NotFoundHandler<E, Node>
export type ErrorHandler<E extends Env = Env> = types.ErrorHandler<E, Node>
export type LayoutHandler = types.LayoutHandler<Node>
export type FC<Props extends {} = {}> = types.FC<Props, Node>
export type FH<E extends Env = Env> = types.FH<E, Node>
