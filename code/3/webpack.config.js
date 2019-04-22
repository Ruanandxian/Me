// const HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
	entry:{
		//可以有多个入口，也可以有一个，如果有一个就默认从这一个入口开始解析
		"main":"./main.js"
	},
	output:{
		filename:'./build.js'
	},
	module:{
		loaders:[
			{
				test:/\.css$/,
				loader:'style-loader!css-loader'
			},
			{
				test:/\.(jpg|png|jpeg|gif|svg)$/,
				loader:'url-loader'
				// loader:'url-loader?limit=40000'图片大于40000
			},
			{
				test:/\.less$/,
				loader:'style-loader!css-loader!less-loader'
			}
		]
	},
	// plugins:[
	// 	new HtmlWebpackPlugin({
	// 		template:`./index.html`
	// 	})

	// ],
	watch:true,//文件监视改动 自动产出build.js
}