var path = require('path')
var projectRoot = path.resolve(__dirname, '../')
module.exports = {
  entry: './html/vue/index.js',
  output:{
    filename: './html/dist/index.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/        
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  watch:true
}