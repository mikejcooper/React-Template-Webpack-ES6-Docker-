import path from 'path'
import webpack from 'webpack';



export default {
  debug: true,
  devtool: "inline-source-map",
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '/client/index.js')
  ],
  output: {
    filename: "bundle.js",
    path: '/',
    publicPath: '/',
    path: __dirname + "/build",
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.join(__dirname, 'client'),
          path.join(__dirname, 'server/shared')
        ],
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.js|.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack'
        ]
      }
    ]
  },
  resolve: {
    extentions: ['', '.js', '.less', '.css'],
    modulesDirectories: [
      'node_modules'
    ],
    root: path.resolve(__dirname),
    alias: {
      actions: 'client/modules/actions',
      reducers: 'client/modules/reducers',
      svgs: 'client/components/svgs',
    },
  },
  imageWebpackLoader: {
    mozjpeg: {
      quality: 65,
      progressive: true,
      interlaced: true
    },
    pngquant: {
      quality: "65-90",
      speed: 4
    },
    svgo: {
      plugins: [
        {
          removeViewBox: false
        },
        {
          removeEmptyAttrs: false
        }
      ]
    }
  }
}