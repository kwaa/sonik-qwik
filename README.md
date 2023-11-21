# sonik-qwik

## Slow Start

Currently, it requires a local link to the latest `sonik` (include [sonikjs/sonik#13](https://github.com/sonikjs/sonik/pull/13) and manually update hono in devDeps to the latest)

```bash
git clone https://github.com/kwaa/sonik-qwik.git
cd sonik-qwik
pnpm install
pnpm link ../sonik # Your local sonik needs to install the dependencies via yarn v1... yes, it's painful.
pnpm dev # run!
```

## How it Works

> Currently this repository only works as a Demo.
> 
> Also, I haven't tested if it works in deployments.

### `./preset-qwik/`

It's structure references [`@sonikjs/preset-react`](https://github.com/sonikjs/monorepo/tree/main/packages/preset-react/src).

#### `./preset-qwik/lib/render-to-string.ts`

It's worth noting that qwik's renderToString function is asynchronous and requires a manifest.

Here I refer to the [default settings of qwikVite plugin](https://github.com/BuilderIO/qwik/blob/80d0a6906a9c7c9314932b3b744921bc9bc5b6de/packages/qwik/src/optimizer/src/plugins/vite-server.ts#L131-L156) and [`@qwikdev/astro`](https://github.com/QwikDev/astro/blob/74405b9acd995f123607c4879ab80a2a8e368c34/libs/qwikdev-astro/server.ts#L63-L82).

~~It just works!~~

`SymbolMapperFn` needs to get the `srcDir` option, here I set it to `/app/`.

#### `./preset-qwik/client.ts`

Since Qwik doesn't have hydration, I set it to simply `() => {}`.

### `./vite.config.ts`

TODO

### `./app/`

TODO

## License

[MIT](LICENSE.md)
