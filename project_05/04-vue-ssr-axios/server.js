const Vue=require('vue')
// const express=require('express')()
const exp=require('express')
const express=exp()
//创建服务端的渲染器
const renderer=require('vue-server-renderer').createRenderer()
//服务端渲染的bundle文件
const createApp=require('./dist/bundle.server.js')['default']


//设置静态资源目录
express.use('',exp.static(__dirname+'/dist'))
//客户端的bundle
const clientBundleFileUrl='/bundle.client.js';


//创建Vue实例
// const app=new Vue({
// 	template:`<div>hello world</div>`
// })
express.get('/api/getHomeInfo',(req,res)=>{
	res.send('SSR发送请求了');
})


//服务端渲染的核心就在于
//通过vue-server-renderer插件的renderToString()方法,将vue实例转换为字符串插入到html文档中
express.get('*',(req,res)=>{
	const context={url:req.url};
	createApp(context).then(app=>{

		console.log(context.state);
		let state=JSON.stringify(context.state);


		renderer.renderToString(app,(err,html)=>{
			//console.log(html);
		if(err){return res.state(500).end('运行错误')}

		res.send(`
		<!DOCTYPE html>
		 <html lang="en">
			<head>
			<meta charset="UTF-8">
			<title>vueSSR渲染页面</title>
			//桥梁
			<script>window.__INITIAL_STATE__=${state}</script>

			<script src='${clientBundleFileUrl}'></script>
		</head>
		<body>
		${html}
		</body>
		</html>`

			)
	})
	})
})
//服务器监听地址
express.listen(8881,()=>{
	console.log('服务器已启动！')
})