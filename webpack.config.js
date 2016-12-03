var path = require('path')
var webpack = require('webpack')
var pkg = require('./package.json')
var moment = require('moment')

module.exports = {
  entry: './demo/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, './node_modules')],
    alias: {
      'vonic': path.resolve(__dirname, './src/vonic.js'),
    }
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.(png|jpg|gif|svg)|((eot|woff|ttf|svg)[\?]?.*)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      },

      {
        test: /vue\-scroller.src.*?js$/,
        loader: 'babel'
      }
    ]
  },
  vue: {
    loaders: {
      scss: 'style!css!sass',
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
    module.exports.entry = './src/vonic.js'
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
      filename: 'build.js'
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
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ])

  if (process.env.BUILD == 'publish') {


    // Banner
    var banner = 'Vonic\nversion: ' + pkg.version + ' \nrepo: https://github.com/wangdahoo/vonic \nbuild: ' + moment().format('YYYY-MM-DD HH:mm:ss')
    module.exports.plugins.push(
      new webpack.BannerPlugin(banner, { entryOnly: true })
    )
  }
}
