module.exports = {
  publicPath: "/",
  // 输出文件目录
  outputDir: "dist",
  assetsDir: "assets",
  lintOnSave: true,
  devServer: {
    open: true, //设置自动打开
    port: 1880, //设置端口
    proxy: {
      //设置代理
      "/api": {
        target: "http://www.zhongzhenshengtai.com",
        changeOrigin: true,
        pathRewrite: {
          // 路径重写，
          "^/api": "" // 替换target中的请求地址，也就是说以后你在请求http://api.douban.com/v2/XXXXX这个地址的时候直接写成/api即可。
        }
      }
    }
  }
};
