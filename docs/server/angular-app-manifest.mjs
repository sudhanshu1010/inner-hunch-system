
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'fontend',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/fontend"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1033, hash: 'a9b1fcc7928161b0a219c1ae1e3b44542455fc50ab0b91e63d675ee745cdf068', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1013, hash: 'f6c5809796369e4aa3a22589a6cded5afd3f784db5729ee6ced604f72186889a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3576, hash: '779cdea83476b27121de341c6d6c1f1d4359cd45f4561dae946095ec118b6b7c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-3EVKHUS6.css': {size: 730, hash: 'RAvdFYBX7XE', text: () => import('./assets-chunks/styles-3EVKHUS6_css.mjs').then(m => m.default)}
  },
};
