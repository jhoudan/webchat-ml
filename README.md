# Webchat

An experimental version of the [Recast.AI Webchat](https://github.com/RecastAI/Webchat) in ReasonML.

Note This is still a WIP.

## Run the project

```sh
npm install
npm start
# in another tab
npm run webpack
```

Copy-paste `index.html.init` to `index.html` and update the `channelid` and `token` fields.
Then open it in your browser, and that's it!

## Build for production

```sh
npm run build
npm run webpack:production
```
