
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
    'index.csr.html': {size: 540, hash: '36b1c8555cf5b942ebbcf6b6c4833374d55ecd4ffb0ce695f29451d19a994178', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1053, hash: '1bc4a8368df3e7504efdf140c4dc18c16879ad9393cc2738513ef04da61c7340', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
