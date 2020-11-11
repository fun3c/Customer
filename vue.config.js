module.exports = {
    lintOnSave: false,
    devServer: {
        proxy: {
          '/api': {
            target: "http://49.233.45.33:8888",
            // target: "http://81.70.46.16:8081/list/label",
            changeOrigin: true,
            pathRewrite: {"^/api": ""}
          },
          
        
          '/test-2': {//短信
            target: "http://49.233.45.33:8888", //任务保存
            changeOrigin: true,
            pathRewrite: {"^/test-2": ""}
          },
          // '/test_3': { //人群包
          //   // target: "http://192.168.1.49:8081",
          //   target: "http://81.70.46.16:8081",
          //   changeOrigin: true,
          //   pathRewrite: {"^/api": ""}
          // },
          "/production":{ //保存
            target: "http://49.233.45.33:8888", //任务保存
            changeOrigin: true,
            pathRewrite: {"^/production": ""}
          },
        }
      },
}


