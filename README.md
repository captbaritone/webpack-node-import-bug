# Extra Chunk Bug

This repo is a minimial reproduction of a bug I'm seeing where I end up with an extra, tiny, webpack chunk file.

It seems to happy any time I have a dynamic import wich has the `stream` NPM package somewhere in its dependnecy graph.


## To Repro

1. Clone to repo
2. `cd` into repo
3. `yarn`
4. `yarn build`

See that Webamp generates two "chunk" files: `dist/1.js` and `dist/2.js`.