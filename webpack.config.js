module.exports = {
  entry: './src/weather-icons.js',
  output: {
    filename: './dist/weather-icons.js',
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
