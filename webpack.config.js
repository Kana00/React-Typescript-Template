const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

module.exports = {
  entry: {
    /* All files that need to be grouped together into a <script src='...'> */
    hot_module: 'react-hot-loader/patch',
    start: './src/start.tsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]_[hash].bundle.js'
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    /* disable total refresh on the page for each saved file */
    hot: true,
  },
  plugins: [
    /* Before bundling, remove files in dist folder */
    new WebpackCleanupPlugin(),
    /* Generate index.html file in dist with all bundled file needed */
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        /* TypeScript need this to handle javascrit source map */
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        /* when found import 'mystyle.css' -> put in <head> a <style> stringified*/
        test: /\.css$/,
        use: ['style-loader', 'css-loader',],
      },
      {
        test: /\.s[ac]ss$/i,
        /* Chaine this 3 loaders */
        use: ['style-loader', 'css-loader', 'sass-loader',],
      },
      {
        /*
         * When import file though → import myFileURL from './my-image.png'
         * myFileURL contain the final URL of the file/image/font in the site
        */
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader',],
      },
    ],
  }
};
