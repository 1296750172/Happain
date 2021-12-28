const { merge } = require('webpack-merge');
 const common = require('./webpack.common.js');

 module.exports = merge(common, {
   mode: 'development',
   devtool: 'inline-source-map',
   devServer: {
     hot:true,
     hotOnly: true,
     static: './dist',
    //  开启压缩
     compress: true,
    //  错误页面
     historyApiFallback: true,
     proxy: {
      //  
       '/api': {
         target: 'https://www.baidu.com',
         pathRewrite: {
           '^/api':''
         },
         changeOrigin: true
       }
     }
   }
 });
