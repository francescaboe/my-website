// This configuration file tells Webpack how to process and bundle your project files.
// TODO: add absolute path
const prod = process.env.NODE_ENV === 'production';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  // Sets the mode for the build process (development or production).
  mode: prod ? 'production' : 'development',
  // Specifies the entry point for your application.
  entry: './src/index.tsx',
  // Defines where the bundled files will be saved.
  output: {
    path: __dirname + '/dist/',
  },
  module: {
    // Determines how different file types should be processed.
    rules: [
      {
        test: /\.(ts|tsx)$/, // test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        // // Specifies which file extensions Webpack should resolve.
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json'],
        },
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  // sets the config for source maps
  devtool: prod ? undefined : 'source-map',
  // Configures additional plugins, such as the HtmlWebpackPlugin
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin(),
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