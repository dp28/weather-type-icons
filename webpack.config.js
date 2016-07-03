module.exports = {
  entry: './src/weather-type-icons.js',
  output: {
    filename: './dist/weather-type-icons.js',
    libraryTarget: 'umd'
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
  },
  "externals": {
    "d3": "d3"
  }
}
