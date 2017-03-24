var path = require('path');
var webpack = require('webpack');
var pkg = require('./package.json')
var moment = require('moment')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

var scssRule = process.env.NODE_ENV == 'production'
  ? {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: [
          {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          },
          'sass-loader'
        ]
      })
    }
  : {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader'
    }

var rules = [
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
  scssRule,
  {
    test: /\.(png|jpg|gif|svg)|((eot|woff|ttf|svg)[\?]?.*)$/,
    loader: 'url-loader',
    query: {
      limit: 10000,
      name: '[name].[ext]'
    }
  }
]

module.exports = {
  entry: './demo/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: rules,
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'vonic': path.resolve(__dirname, './src/index.js')
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
      library: 'Vonic',
      libraryTarget: 'umd',
      umdNamedDefine: true
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
    new ExtractTextPlugin(process.env.BUILD == 'publish' ? 'vonic.min.css' : 'app.css'),
    new OptimizeCssPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
      }
    })
  ])

  if (process.env.BUILD == 'doc') {
    module.exports.plugins = module.exports.plugins.concat([
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

    module.exports.plugins = module.exports.plugins.concat([
      new webpack.BannerPlugin({
        banner: banner,
        entryOnly: true
      })
    ])
  }
}
