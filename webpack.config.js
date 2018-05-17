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
      constants: path.join(__dirname, 'src', 'constants'),
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
        //  plugins: ['transform-runtime', 'transform-decorators-legacy', 'transform-class-properties'],
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
    historyApiFallback: true,
  },
};
