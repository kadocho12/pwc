const path = require('path');

module.exports = () => ({
  entry: {
    first: './src/assets/js/First.js',
    main: './src/assets/js/Main.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'assets/js/[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          fix: true
        }
      }
    ]
  },

});
