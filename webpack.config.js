var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      components: path.join(__dirname, 'src', 'components'),
      templates: path.join(__dirname, 'src', 'templates'),
      reducers: path.join(__dirname, 'src', 'reducers'),
      actions: path.join(__dirname, 'src', 'actions'),
      store: path.join(__dirname, 'src', 'store'),
      utils: path.join(__dirname, 'src', 'utils'),
      img: path.join(__dirname, 'src', 'img'),
      api: path.join(__dirname, 'src', 'api'),
    }
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ['react', 'stage-3'],
        },
      },
      {
        test: /\.scss?$/,
        include: path.join(__dirname, 'src', 'styles'),
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: "./dist",
    port: 8080,
    historyApiFallback: true
  },
};
