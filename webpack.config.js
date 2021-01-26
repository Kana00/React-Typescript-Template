const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: {
    /* All files that need to be grouped together into a <script src='...'> */
    hot_module: 'react-hot-loader/patch',
    start: './src/start.tsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]_[hash].bundle.js',
    publicPath: "/"
  },
  mode: (process.env.environment === 'production') ? 'production' : 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    historyApiFallback: true
  },
  plugins: [
    /* Before bundling, remove files in dist folder */
    new WebpackCleanupPlugin(),
    /* Generate index.html file in dist with all bundled file needed */
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new FaviconsWebpackPlugin('./src/assets/images/favicon.svg')
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(j|t)s(x)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            babelrc: false,
            presets: [
              '@babel/preset-env',
              '@babel/preset-typescript',
              '@babel/preset-react',
            ],
            plugins: ['react-hot-loader/babel'],
          },
        },
      },
      {
        /* TypeScript need this to handle javascrit source map */
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
        exclude: /node_modules/,
      },
      {
        /* when found import 'mystyle.css' -> put in <head> a <style> stringified*/
        test: /\.css$/,
        use: ['style-loader', 'css-loader',],
      },
      {
        test: /\.s[ac]ss$/i,
        /* Chaine this 3 loaders */
        use: ['style-loader', 'css-loader', 'sass-loader'],
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
