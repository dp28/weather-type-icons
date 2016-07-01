module.exports = {
  entry: './graphical-test/graphical-test.js',
  output: {
    filename: './graphical-test/graphical-test-compiled.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}
