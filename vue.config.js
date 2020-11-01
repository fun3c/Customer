module.exports = {
    lintOnSave: false,
    devServer: {
        proxy: {
          '/api': {
            target: "http://192.168.1.49:8081",
            changeOrigin: true,
            pathRewrite: {"^/api": ""}
          }
        }
      }
}