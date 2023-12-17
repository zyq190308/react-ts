const CracoLessPlugin = require("craco-less")

module.exports = {
  devServer: {
    proxy: {
      "/users": {
        target: "http://localhost:4000",
        // pathRewrite: { "^/api": "" },
        // changeOrigin: true,
        // headers: {
        //   token: "Bearer zyq",
        // },
      },
    },
  },
  plugins: [{ plugin: CracoLessPlugin }],
}
