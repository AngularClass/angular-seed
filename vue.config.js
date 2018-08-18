module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.webpack.js', '.web.js', '.mjs', '.js', '.json']
    },
    module: {
      rules: [
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: 'javascript/auto'
        }
      ]
    }
  }
}
