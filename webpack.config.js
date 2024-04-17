// This configuration file tells Webpack how to process and bundle your project files.
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
    path: path.resolve(__dirname, 'dist'), // Use path.resolve for absolute paths
  },
  module: {
    // Determines how different file types should be processed.
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        // // Specifies which file extensions Webpack should resolve.
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json', '.png'],
        },
        use: 'ts-loader',
      },
      {
        test: /\.css$/i,
        // only apply the specified loaders to CSS files located within the src directory
        include: path.resolve(__dirname, 'src'),
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
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
      directory: path.resolve(__dirname, 'dist'), // Use path.resolve for absolute paths
    },
    hot: true,
    open: true,
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      utils: path.resolve(__dirname, 'src/utils'),
    },
  },
};
