// 路径
const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // webpack提供的开发服务
  devServer: {
    port: 3001,  // 端口配置
    open: true,  // 自动打开浏览器
    proxy: {  //  代理
      // 处理以/api开头路径的请求
      // '/api': 'http://localhost:3000'
      // http://localhost:3000/api/search/users2   
      '/api': {
        target: 'http://localhost:3000', // 转发的目标地址
        pathRewrite: {
          '^/api': ''  // 转发请求时去除路径前面的/api
        },
        changeOrigin: true, // 支持跨域, 如果协议/主机也不相同, 必须加上
      },
      // 可以配置多个代理
      // '/aaa': {
      //   target: 'http://localhost:3000', // 转发的目标地址
      //   pathRewrite: {
      //     '^/aaa': ''  // 转发请求时去除路径前面的/api
      //   },
      //   changeOrigin: true, // 支持跨域, 如果协议/主机也不相同, 必须加上
      // },
    }
  },
  lintOnSave: false,  // 关闭ESLint的规则
  configureWebpack: {
    resolve: { //引入模块的解析
      alias: {  // 配置别名,减少文件夹层数多带来的烦扰
        '@': resolve('src'),
        'components': resolve('src/components'),
        'pages': resolve('src/pages'),
        'store': resolve('src/store')
      }
    }
  }
}