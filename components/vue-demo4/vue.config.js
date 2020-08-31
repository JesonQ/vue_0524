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