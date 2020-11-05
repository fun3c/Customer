module.exports = {
    lintOnSave: false,
<<<<<<< HEAD
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
            target: "http://81.70.46.16:8081",  //条件树信息
            changeOrigin: true,
            pathRewrite: {"^/test-1": ""}
          },
          
          '/test-2': {
            // target: "http://192.168.1.49:8081",
            target: "http://192.168.1.47:8888", //任务保存
            changeOrigin: true,
            pathRewrite: {"^/test-2": ""}
          },
        }
      }
}
=======
}
>>>>>>> 7d3b3a5cf10a4a43fafaf1f2ee49d0f01a4034f2
