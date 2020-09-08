const ip = require('ip')
const path = require('path')
const webpack = require('webpack')
const StylelintWebpackPlugin = require('stylelint-webpack-plugin')

module.exports = {
  stats: 'errors-only',
  target: 'web',
  mode: 'development',
  entry: {
    app: ['./packages/mock/lib/index.tsx'],
  },
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'lib/[name].js',
    chunkFilename: 'lib/[name].[chunkhash:5].js',
    publicPath: '/packages/mock/',
  },
  devServer: {
    overlay: {
      errors: true,
      warnings: false,
    },
    open: true,
    hotOnly: true,
    inline: true,
    port: 6789,
    publicPath: '/packages/mock/',
    openPage: 'packages/mock/index.html',
    host: ip.address(),
    disableHostCheck: true,
    historyApiFallback: true,
    contentBase: './',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript',
              ],
            },
          }, {
            loader: 'eslint-loader',
          },
        ],
      }, {
        test: /\.jsx?$/,
        use: 'react-hot-loader/webpack',
        include: /node_modules/,
      },
    ],
  },
  devtool: 'cheap-module-eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new StylelintWebpackPlugin({
      context: './packages',
      files: '**/style.ts',
      emitErrors: true,
      configFile: '.stylelintrc.js',
      failOnError: false,
      quiet: false,
    }),
  ],
}
