module.exports = {
    lintOnSave: false,
    devServer: {
        proxy: {
          '/api': {
            target: "http://192.168.1.49:8081",
            // target: "http://81.70.46.16:8081/list/label",
            changeOrigin: true,
            pathRewrite: {"^/api": ""}
          },
          '/test-1': {
            // target: "http://192.168.1.49:8081",
            target: "http://49.233.45.33:8081",  //条件树信息
            changeOrigin: true,
            pathRewrite: {"^/test-1": ""}
          },
        
          '/test-2': {
            // target: "http://192.168.1.49:8081",
            target: "http://192.168.1.47:8888", //任务保存
            changeOrigin: true,
            pathRewrite: {"^/test-2": ""}
          },

          '/test-4': { //短信
            // target: "http://192.168.1.49:8081",
            target: "http://49.233.45.33:8888",
            changeOrigin: true,
            pathRewrite: {"^/test-4": ""}
          },
          "/production":{
            target: "http://81.70.46.16:8888", //任务保存
            changeOrigin: true,
            pathRewrite: {"^/production": ""}
          }
        }
      },
}


