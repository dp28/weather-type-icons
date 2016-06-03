module.exports = {
  entry: './src/weather-icons.js',
  output: {
    filename: './dist/weather-icons.js',
    libraryTarget: 'var',
    library: 'WeatherIcon'
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
