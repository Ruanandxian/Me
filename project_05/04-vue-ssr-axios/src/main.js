// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {createRouter} from './router'
import {createStore} from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
//单例
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
export function createApp(){
	const router=createRouter();
	const store=createStore();
	const app=new Vue({
		store,
  		router,
  		components: { App },
  		template: '<App/>'
})
	return {app}

}