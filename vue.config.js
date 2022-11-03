const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,
  css: { extract: false },
  transpileDependencies: ['pdfjs-dist'],
  configureWebpack: {
    // plugins: [new BundleAnalyzerPlugin()],
    module: {
      rules: [
        {
          test: /\.(cur)$/,
          use: ['file-loader']
        }
      ]
    }
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.use().loader('svg-url-loader')
  }
})
