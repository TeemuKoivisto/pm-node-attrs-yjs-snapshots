# [pm-node-attrs-yjs-snapshots](https://teemukoivisto.github.io/pm-node-attrs-yjs-snapshots/)

This is a reproduction of a bug with yjs snapshots not showing attributes https://discuss.yjs.dev/t/snapshotting-prosemirror-nodes-with-attributes/732

## How to install

This project uses a fork of yjs as a git submodule. To update it, you must first commit and push the updates after which you can commit the new ref to this repo. All the other users must run `git submodule update --remote` to receive the updates, just git pulling as far as I remember doesn't work.

0. `git submodule update --init --recursive`
1. `yarn`
2. `yarn yjs`
3. `yarn start`
