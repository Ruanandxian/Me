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
			const matchedComponents=router.getMatchedComponents()
			//no matched routes
			if(!matchedComponents.length){
				return reject({code:404})
			}
			resolve(app)
		},reject)

	})
}