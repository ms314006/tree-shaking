const path = require('path');

module.exports = {
  mode: 'none',
  entry: ['./src/index.js'],
  output: {
    filename: `js/bundle.js`,
    path: path.resolve(__dirname, './dist/'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js',],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env'],
            ]
          },
        },
      },
    ],
  }
};
