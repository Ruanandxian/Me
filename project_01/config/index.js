'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
        '/api': {
      target: 'http://v.juhe.cn/toutiao/index',
      // target: 'http://v.juhe.cn/movie/movies.today',
      changeOrigin: true, 
      pathRewrite: {'^/api': ''},
        },
        '/apo': {
      target: 'http://apis.juhe.cn/goodbook/catalog',
      // target: 'http://v.juhe.cn/movie/movies.today',
    
      
      changeOrigin: true, 
      pathRewrite: {'^/apo': ''},
        },
        '/app': {
      // target: 'http://apis.juhe.cn/goodbook/catalog',
      target: 'http://v.juhe.cn/movie/movies.today',
    
      
      changeOrigin: true, 
      pathRewrite: {'^/app': ''},
        },
        '/apa': {
      target: 'http://web.juhe.cn:8080/finance/stock/hs',
    
      
      changeOrigin: true, 
      pathRewrite: {'^/apa': ''},
        },
          '/aps': {
      target: 'http://web.juhe.cn:8080/constellation/getAll',
    
      
      changeOrigin: true, 
      pathRewrite: {'^/aps': ''},
        },

    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    
    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    // productionSourceMap: true,
    productionSourceMap: false,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
