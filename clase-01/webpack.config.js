var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
      'webpack-dev-server/client?http://0.0.0.0:3000',
      'webpack/hot/only-dev-server',
      './src/index.jsx'
    ],
    output: {
      path: path.join(__dirname, 'build'),
      filename: 'bundle.js',
      publicPath: '/'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
              test   : /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              loaders: ['react-hot', 'babel']
            }, {
              test: /\.json$/,
              loader: 'json',
              include: path.join(__dirname, 'src')
            }
        ]
    }
};
