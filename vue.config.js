const path = require('path')

const resolve = dir => path.join(__dirname, dir)

const BASE_URL = process.env.NODE_ENV === 'procution' ? '/iview-admin' : '/'

//去console插件
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
//gzip压缩插件
// const CompressionWebpackPlugin = require('compression-webpack-plugin')

module.exports = {
  lintOnSave: false,
  baseUrl: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@',resolve('src'))  //用来定义到Src文件夹的路径
      .set('_c',resolve('src/components')) //到组件
      .set('assets',resolve('src/assets'))
      // .set('components',resolve('src/components'))
  },
  //打包时不生成map文件
  productionSourceMap: false,
  //跨域代理
  devServer:{

    // host: '0.0.0.0',
    // port: 8080,
    // https: false,
    // hotOnly: false,
    // proxy: null, // string | Object

    proxy: 'http://localhost:6000',
    port:'7777',
  }
}
