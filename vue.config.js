var env = process.env.NODE_ENV
module.exports = {
  productionSourceMap: env === 'development' ? true : false,
  configureWebpack: {
    // externals: {
    //   "lodash": '_',
    //   "vue": 'Vue',
    //   "element-ui": 'ELEMENT',
    //   "jsPlumb": "jsplumb"
    // }
  },
  assetsDir: 'static', // 配置js、css静态资源二级目录的位置


  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: "http://49.233.45.33:8888",
        // target: "http://81.70.46.16:8081/list/label",
        changeOrigin: true,
        pathRewrite: { "^/api": "" }
      },


      '/test-2': {//短信
        target: "http://49.233.45.33:8888", //任务保存
        changeOrigin: true,
        pathRewrite: { "^/test-2": "" }
      },
      '/test_3': { //查看任务
        target: "http://192.168.1.36:8888",
        // target: "http://81.70.46.16:8081",
        changeOrigin: true,
        pathRewrite: {"^/test_3": ""}
      },
      "/production": { //保存
        target: "http://49.233.45.33:8888", //任务保存
        changeOrigin: true,
        pathRewrite: { "^/production": "" }
      },
    }
  },
}


