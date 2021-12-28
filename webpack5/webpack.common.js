const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {DefinePlugin} = require('webpack')
const copyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  entry: {
    index: './src/index.js',
    login: './src/login.js',

  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Production',
      template: './public/index.html',
    }),
    new DefinePlugin({
      BASE_URL: '"./"'
    }),
    new copyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          globOptions: {
            ignore: ['**/index.html']
          }
        }
      ]
    })
  ],
  module: {
    rules: [
      // 处理css
      {
        test: /\.css$/,
        use: [
          'style-loader', 
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
      // 通过babel转换js
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname,'src')
        ],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      chrome: '51',
                      ie: '9'
                    },
                    modules: false,
                    useBuiltIns: 'entry',
                    corejs: 2
                  }
                ]
              ]
            }
          }
        ]        
      },
      // 图片
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name]_[hash][ext][query]'
        }
      },
      // 字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/i,
        use: ['xml-loader'],
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue','.css','.json'],
    alias: {
      '@' : path.resolve(__dirname,'src')
      
    }
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // 清空
    clean: true,
    // 网页访问的   文件目录
    publicPath: '/'
  },
};