const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './front/index.html'
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'front'),
    },
    compress: true,
    port: 8000,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  performance:{
    hints: false
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'front'),
  },
};