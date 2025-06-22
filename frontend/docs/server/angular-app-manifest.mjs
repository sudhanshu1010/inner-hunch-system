
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/docs/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/docs"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1032, hash: 'd3a3b7ea0508e901de002cb84563c306c6155793aca29b09b3199be51980b218', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: 'e42dfc0290c036768117c4c3519d4db496e8db0c5717534df918c32239a2d5a2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 1112, hash: 'be97a8b01bbb4c8a23f945e47e0b8fd9768d2dfad5fc3a0b87de60ed96577e9f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-3EVKHUS6.css': {size: 730, hash: 'RAvdFYBX7XE', text: () => import('./assets-chunks/styles-3EVKHUS6_css.mjs').then(m => m.default)}
  },
};
