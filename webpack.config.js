const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

const babelLoaderConfiguration = {
  test: /\.(jsx?|tsx?)$/,
  // Use 'include' for more explicit control over what Babel processes from node_modules
  include: [
    path.resolve(__dirname, 'src'), // Your app's source code
    path.resolve(__dirname, 'index.web.js'), // Your app's web entry point
    // Explicitly include react-native and its ecosystem libraries that need transpilation
    path.resolve(__dirname, 'node_modules/react-native'),
    path.resolve(__dirname, 'node_modules/react-native-web'), // Though aliased, ensure it's processable if it has modern JS
    path.resolve(__dirname, 'node_modules/@react-navigation'), // Process all @react-navigation packages
    path.resolve(__dirname, 'node_modules/react-native-gesture-handler'),
    path.resolve(__dirname, 'node_modules/react-native-screens'),
    path.resolve(__dirname, 'node_modules/react-native-safe-area-context'),
    path.resolve(__dirname, 'node_modules/react-native-reanimated'),
    path.resolve(__dirname, 'node_modules/@expo'),
    path.resolve(__dirname, 'node_modules/expo-modules-core'),
    // Add any other specific react-native libraries here if they cause issues
  ],
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['module:@react-native/babel-preset'],
      plugins: [
        '@babel/plugin-proposal-export-namespace-from',
      ],
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
    new Dotenv({
            path: './.env.local', // Explicitly use .env.local for development mode
          }),
          new webpack.DefinePlugin({ // <-- Add this plugin configuration
                 __DEV__: process.env.NODE_ENV === 'development',
                  // You can add other global constants here if needed
                }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      'react-native$': 'react-native-web',
      // Alias problematic libraries to their source files for better transpilation
      // Ensure these paths point to the main 'src/index.tsx' or 'src/index.ts' of each package
      '@react-navigation/core': path.resolve(__dirname, 'node_modules/@react-navigation/core/src/index.tsx'),
      '@react-navigation/native': path.resolve(__dirname, 'node_modules/@react-navigation/native/src/index.tsx'),
      '@react-navigation/elements': path.resolve(__dirname, 'node_modules/@react-navigation/elements/src/index.tsx'),
      '@react-navigation/native-stack': path.resolve(__dirname, 'node_modules/@react-navigation/native-stack/src/index.tsx'),
      '@react-navigation/bottom-tabs': path.resolve(__dirname, 'node_modules/@react-navigation/bottom-tabs/src/index.tsx'),
      '@react-navigation/routers': path.resolve(__dirname, 'node_modules/@react-navigation/routers/src/index.tsx'),
      'react-native-gesture-handler': path.resolve(__dirname, 'node_modules/react-native-gesture-handler/src/index.ts'),
      'react-native-screens': path.resolve(__dirname, 'node_modules/react-native-screens/src/index.tsx'),
      'react-native-safe-area-context': path.resolve(__dirname, 'node_modules/react-native-safe-area-context/src/index.tsx'),
    },
    extensions: ['.web.tsx', '.web.ts', '.tsx', '.ts', '.web.js', '.js', '.jsx', '.json'],
    mainFields: ['browser', 'module', 'main'],
    fullySpecified: false,
  },
};