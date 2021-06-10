const path = require("path");
const webpack = require("webpack");

module.exports = {
  outputDir: "dist",
  // publicPath: './',
  // assetsDir: 'static',
  pages: {
    app: {
      entry: path.resolve(__dirname, "./src/main.ts"),
      // 模板来源
      template: path.resolve(__dirname, "./public/index.html"),
      title: process.env.TITLE,
      icon_url: process.env.ICON_URL,
      filename: "index.html",
      chunks: ["chunk-vendors", "chunk-common", "app"]
    }
  },
  productionSourceMap: true,
  lintOnSave: false, //关闭eslint检查
  devServer: {
    port: process.env.PORT,
    overlay: {
      warnings: true,
      errors: true
    },
    open: true
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/scss/variables.scss";`
      }
    }
  },
  configureWebpack: config => {
    const { API_HOST, Mock } = process.env;
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
    } else {
      // 为开发环境修改配置...
    }
    config.resolve.alias = {
      ...config.resolve.alias
    };
    const plugins = [
      new webpack.DefinePlugin({
        "process.env.API_HOST": JSON.stringify(API_HOST),
        "process.env.Mock": JSON.stringify(Mock)
      })
    ];
    config.plugins.push(...plugins);
  }
};
