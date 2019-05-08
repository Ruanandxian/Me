const webpack=require('webpack')
const merge=require('webpack-merge')
//引入的是webpack的主要配置文件
const base=require('./webpack.base.conf')
module.exports=merge(base,{
	target:'node',
	entry:'./src/entry-server.js',
	output:{
		filename:'bundle.server.js',
		libraryTarget:'commonjs2',
	},
	plugins:[
	]
})