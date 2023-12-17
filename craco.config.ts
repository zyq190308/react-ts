const CracoLessPlugin = require("craco-less")
const path = require("path")

const pathResolve = (pathUrl: string) => path.join(__dirname, pathUrl)

const webpackConfig = {
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
  webpack: {
    alias: {
      "@": pathResolve("src"),
    },
  },
  plugins: [{ plugin: CracoLessPlugin }],
}

module.exports = webpackConfig
