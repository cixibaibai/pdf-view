const { defineConfig } = require('@vue/cli-service')

const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:9080',
        pathRewrite: {'^/api' : ''},
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    plugins: [new NodePolyfillPlugin()]
  }
})
