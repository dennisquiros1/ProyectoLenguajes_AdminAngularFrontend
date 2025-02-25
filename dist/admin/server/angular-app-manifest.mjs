
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "node_modules/@angular/animations/fesm2022/browser.mjs": [
    {
      "path": "chunk-BXLH3CFX.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 540, hash: '567b8651b12e7fe204a3871acc7543bdf7939319acdd28ce1cc8f5643d07938b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1053, hash: '0a183f781faf03b1266a29e84720c9cdb9bc0f427d29eb5732104541560f220b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
