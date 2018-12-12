const webpack = require('webpack')
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  //eslinst语法检查
  lintOnSave: false,

  // lintOnSave: process.env.NODE_ENV !== 'production'

  //webpack打包，静态文件引用路径, js,css引用地址
  baseUrl: process.env.NODE_ENV === 'production' ? '//10.8.99.203:8080/dist' : '/',

  //css预处理器配置
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      },
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 37.5, // 换算的基数
            selectorBlackList: ['weui', 'mu','cube-'], // 忽略转换正则匹配项
            propList: ['*'],
          }),
        ]
      }
    }
  },

  //插件引入，cube-ui
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },

  //webpack打包定义全局访问路径
  chainWebpack: config => {
    config.resolve.alias
      .set('src', resolve('src'))
      .set('views', resolve('src/views'))
      .set('components', resolve('src/components'))
      .set('assets', resolve('src/assets'))
      .set('common', resolve('src/common'))
      .set('api', resolve('src/api'))
      .set('config', resolve('src/config'))
      .set('lib', resolve('src/lib'))
  },

  //本地服务器代理
  devServer: {
    host : '0.0.0.0',
    // proxy: 'http://localhost:7777',  //ip
    port: '8080',   //端口
  },
}
