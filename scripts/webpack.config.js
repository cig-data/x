const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// const ReactManiFest = require('../config/reactFest.json')

const env = process.env.NODE_ENV

const prod = env === 'production'

module.exports = {
  stats: 'errors-only',
  target: 'web',
  mode: prod ? 'production' : 'development',
  entry: {
    select: ['./packages/select/lib/select.tsx'],
  },
  output: {
    path: path.resolve(__dirname, '../packages'),
    filename: '[name]/dist/index.js',
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
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      node: 'current',
                      browsers: [
                        'last 2 versions',
                        'ie >= 10',
                      ],
                    },
                  },
                ],
                '@babel/preset-react',
                '@babel/preset-typescript',
              ],
              plugins: [
                '@babel/plugin-proposal-export-default-from',
                '@babel/plugin-proposal-function-bind',
                '@babel/plugin-proposal-optional-chaining',
                '@babel/plugin-transform-runtime',
              ],
            },
          }, {
            loader: 'eslint-loader',
          },
        ],
      },
    ],
  },
  devtool: 'cheap-module-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [
    /*
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: ReactManiFest,
    }),
    */
    new CleanWebpackPlugin(),
  ],
}
