const Vue=require('vue')
const express=require('express')()
//创建服务端的渲染器
const renderer=require('vue-server-renderer').createRenderer()


//创建Vue实例
const app=new Vue({
	template:`<div>hello world</div>`
})

//服务端渲染的核心就在于
//通过vue-server-renderer插件的renderToString()方法,将vue实例转换为字符串插入到html文档中
express.get('/',(req,res)=>{
		renderer.renderToString(app,(err,html)=>{
			//console.log(html);
		if(err){return res.state(500).end('运行错误')}

		res.send(`
		<!DOCTYPE html>
		 <html lang="en">
			<head>
			<meta charset="UTF-8">
			<title>vueSSR渲染页面</title>
		</head>
		<body>
		${html}
		</body>
		</html>`

			)
	})
})
//服务器监听地址
express.listen(8881,()=>{
	console.log('服务器已启动！')
})