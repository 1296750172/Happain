const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devServer: {
    static: './dist',
    // 开启压缩
    compress: true,
    
  }
});