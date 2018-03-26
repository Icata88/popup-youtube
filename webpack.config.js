var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },  
  module: {
  	loaders: [
  		{
	        test : /\.js?/,
	        include : APP_DIR,
	        loader : 'babel-loader'  			
  		},


      {
        test: /\.scss$/,
        include: APP_DIR + '/styles',
        loader: ['style', 'css', 'sass'],        
      },

      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192' 
      },
  	]
  }
};

module.exports = config;