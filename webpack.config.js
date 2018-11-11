const autoprefixer = require('autoprefixer');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const envs = {
  __DEV__: process.env.NODE_ENV === 'development',
  __PROD__: process.env.NODE_ENV === 'production',
};

module.exports = {
  entry: [
    './src/index.tsx',
  ],
  module: {
    rules: [{
      test: /\.(ts|tsx)$/,
      use: 'ts-loader',
    }, {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader', 'eslint-loader'],
    }, {
      test: /\.(css|scss)$/,
      loader: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
      }, {
        loader: 'postcss-loader',
        options: {
          plugins: [
            autoprefixer({
              browsers: ['ie >= 8', 'last 4 version'],
            }),
          ],
        },
      }, {
        loader: 'sass-loader',
      }],
    }, {
      test: /\.(ttf|eot|woff|woff2)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: './fonts/[name].[ext]',
        },
      },
    }, {
      test: /\.(png|svg|gif|jpg|jpeg)/,
      use: {
        loader: 'url-loader',
        options: {
          name: 'images/[name].[ext]',
          limit: 300000,
        },
      },
    }, {
      test: /\.(html)$/,
      use: {
        loader: 'html-loader',
      },
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    new webpack.DefinePlugin(envs),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'node_modules'),
    ],
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'app.js',
    publicPath: '/',
  },
  devServer: {
    hot: true,
    inline: false,
    contentBase: './public',
    historyApiFallback: true,
  },
};
