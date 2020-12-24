const webpack = require('webpack')
const path = require('path')

const vendors = {
  react: [
    'react',
    'react-dom',
  ],
}

module.exports = {
  performance: {
    hints: false,
    maxEntrypointSize: 1024000,
    maxAssetSize: 1024000,
  },
  mode: 'production',
  entry: { ...vendors },
  output: {
    path: path.resolve(__dirname, '../config/'),
    filename: '[name].js',
    library: '[name]',
  },
  devtool: 'hidden-source-map',
  plugins: [
    new webpack.DllPlugin({
      path: '../config/[name]Fest.json',
      name: '[name]',
      context: __dirname,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
}
