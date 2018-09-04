const path = require('path')

const resolve = dir => path.join(__dirname, dir)

const BASE_URL = process.env.NODE_ENV === 'procution' ? '/iview-admin' : '/'


module.exports = {
  lintOnSave: false,
  baseUrl: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@',resolve('src'))  //用来定义到Src文件夹的路径
      .set('_c',resolve('src/components')) //到组件
  },
  //打包时不生成map文件
  productionSourceMap: false,
  //跨域代理
  devServer:{
    proxy: 'http://localhost:6000'
  }
}
