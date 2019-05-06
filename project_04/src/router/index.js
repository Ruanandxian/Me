import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '../components/Home.vue'
import About from '../components/About.vue'

Vue.use(Router)

export default new Router({
	mode:'history',//去除了#的hash模式,基于h5中的history.pushState()函数来添加历史记录
	scrollBehavior(to,from,savedPosition){
		//只有调用了history.pushState()
		//return 期望滚动到那个位置
		// 
//判断如果滚动条的位置存在直接返回当前位置，否则返回到起点
//savePosition这个属性的获取只有用户点击了前进后退按钮或者是调用go(-1),forward
		console.log(savedPosition);
		if(savedPosition){
			return savedPosition
		}else{
			return {x:0,y:0}
		}
	},
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path:'/about',
    	name:'About',
    	component:About
    }
  ]
})
