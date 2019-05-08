import {createApp} from './main'

export default context=>{
	return new Promise((resolve,reject)=>{
		const {app}=createApp()
		const router=app.$router

		const {url} =context
		const {fullPath}=router.resolve(url).route

		if(fullPath!==url){
			return reject({url:fullPath})
		}

		//更改路由
		router.push(url)

		// wait until router has resolved possible async hooks
		router.onReady(()=>{
			//获取相应路由下的组件
			const matchedComponents=router.getMatchedComponents()
			//没有路由匹配，返回状态码
			//no matched routes
			if(!matchedComponents.length){
				return reject({code:404})
			}
			//遍历路由下所有的组件，如果有需要服务端渲染的请求，则进行请求
			Promise.all(matchedComponents.map(component=>{
				if(component.serverRequest){
				return component.serverRequest(app.$store)
				}	
			})).then(()=>{
				//将状态存储起来
			context.state=app.$store.state;
			resolve(app)
		}).catch(reject)
		},reject)
	})
}