// This configuration file tells Webpack how to process and bundle your project files.
// TODO: add absolute path
// TODO: add ts
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  // Sets the mode for the build process (development or production).
  mode: 'development',
  // Specifies the entry point for your application.
  entry: './src/index.js',
  // Defines where the bundled files will be saved.
  output: {
    filename: 'bundle.js',
  },
  module: {
    // Determines how different file types should be processed.
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    // Specifies which file extensions Webpack should resolve.
    extensions: ['.js', '.jsx', 'ts', 'tsx'],
  },
  // Configures additional plugins, such as the HtmlWebpackPlugin
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  // Sets up the development server configuration.
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    hot: true,
    open: true,
  },
};