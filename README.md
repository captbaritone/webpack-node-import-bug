# Extra Chunk Bug

This repo is a minimial reproduction of a bug I'm seeing where I end up with an extra, tiny, webpack chunk file.

It seems to happy any time I have a dynamic import wich has the `stream` NPM package somewhere in its dependnecy graph.

I can't reproduce this with any package other than stream. Stream itself is very small.

I'm guessing this has something to do with the fact that stream is shadowing node's stream.

I think it might be the case that Webpack is trying to use its own replacement for stream rather than the one in my node modules. If I uninstall the `stream` package, I see exactly the same behavior.

## To Repro

1. Clone to repo
2. `cd` into repo
3. `yarn`
4. `yarn build`

### Expected

Webpack makes my bundle, plus an additional chunk file containing the `stram` package.

### Actual

Webpack generates two "chunk" files: `dist/1.js` and `dist/2.js`.