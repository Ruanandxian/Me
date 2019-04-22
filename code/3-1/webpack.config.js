// const HtmlWebpackPlugin=require('html-webpack-plugin');
var path=require('path')
// const HTMLWebpackPlugin=require('html-webpack-plugin');
const webpack=require('webpack')
const packagejson=require('./package.json')
module.exports={
	entry:{
		//可以有多个入口，也可以有一个，如果有一个就默认从这一个入口开始解析
		"main1":"./main1.js",
		"main2":"./main2.js",
		"vendor":Object.keys(packagejson.dependencies)
	},
	output:{
		path:path.resolve('./dist'),
		filename:'[name].js'
	},
	watch:true,//文件监视改动 自动产出build.js
	plugins:[
		new webpack.optimize.CommonsChunkPlugin({

			name:['vendor','runtime'],
			filename:'[name].js',
			minChunks:Infinity//用来在第三方库中分离自定义的公共模块
		}),
		new webpack.optimize.CommonsChunkPlugin({

			name:'common',
			filename:'[name].js',
			chunks:['main1','main2']//从main1.js和main2.js中抽离出来
		})


	]
}