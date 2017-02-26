var path = require('path');
var webpack = require('webpack');
var pkg = require('./package.json')
var moment = require('moment')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './demo/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader'
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)|((eot|woff|ttf|svg)[\?]?.*)$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      },

      {
        test: /vue-scroller.src.*?js$/,
        loader: 'babel-loader'
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'vonic': path.resolve(__dirname, './src/index.js'),
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {

  if (process.env.BUILD == 'publish') {
    module.exports.entry = './src/index.js'
    module.exports.output = {
      path: path.resolve(__dirname, './dist'),
      filename: 'vonic.min.js',
      libraryTarget: 'var',
      library: 'Vonic'
    }
    module.exports.externals = {
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'axios': 'axios'
    }
  } else { // docs
    module.exports.entry = [
      './demo/main.js'
    ]
    module.exports.output = {
      path: path.resolve(__dirname, './docs'),
      filename: '[name].js'
    }
  }

  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
      }
    })
  ])

  if (process.env.BUILD == 'doc') {
    module.exports.plugins = (module.exports.plugins || []).concat([
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: function (module, count) {
          // any required modules inside node_modules are extracted to vendor
          return (
            module.resource &&
            /\.js$/.test(module.resource) &&
            module.resource.indexOf(
              path.join(__dirname, './node_modules')
            ) === 0
          )
        }
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest',
        chunks: ['vendor']
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.tpl.html',
        inject: true
      })
    ])
  }

  if (process.env.BUILD == 'publish') {
    // Banner
    var banner = 'Vonic \nversion: ' + pkg.version + ' \nrepo: https://github.com/wangdahoo/vonic \nbuild: ' + moment().format('YYYY-MM-DD HH:mm:ss')
    module.exports.plugins.push(
      new webpack.BannerPlugin({
        banner: banner,
        entryOnly: true
      })
    )
  }
}
