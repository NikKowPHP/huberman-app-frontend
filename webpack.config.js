const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const babelLoaderConfiguration = {
  test: /\.(jsx?|tsx?)$/,
  // Add exception for react-native-reanimated, @expo, expo-modules-core, @react-navigation
  exclude: [/node_modules\/(?!react-native-reanimated|@expo|react-native|expo-modules-core|@react-navigation)/],
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['module:@react-native/babel-preset'],
    },
  },
};

const fontLoaderConfiguration = {
  test: /\.ttf$/,
  use: ['file-loader'],
};

const assetFileLoaderConfiguration = {
  test: /\.(gif|jpe?g|png|svg)$/,
  use: {
    loader: 'url-loader',
    options: {
      name: '[hash].[ext]',
    },
  },
};

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'index.web.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 9000,
  },
  module: {
    rules: [
      babelLoaderConfiguration,
      assetFileLoaderConfiguration,
      fontLoaderConfiguration,
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'), // Added alias for @/*
      'react-native$': 'react-native-web',
    },
    // Updated extensions to include .ts and prioritize web/ts
    extensions: ['.web.tsx', '.web.ts', '.tsx', '.ts', '.web.js', '.js', '.jsx', '.json'],
  },
}
