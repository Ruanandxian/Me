// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import VueJsonp from 'vue-jsonp'
import Moment from 'moment'
// import 'lib-flexible'

Vue.config.productionTip = false

import store from './store.js'


//使用mint-ui引入全部的组件
// import Mint from 'mint-ui';
// Vue.use(Mint);

import {Toast,Loadmore,Swipe,SwipeItem,Lazyload,Header,Button,Switch,Badge,Indicator} from 'mint-ui'
Vue.component(Toast.name,Toast);
Vue.component(Header.name,Header);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
Vue.component(Button.name,Button);
Vue.component(Badge.name,Badge);
Vue.component(Switch.name,Switch);
Vue.component(Loadmore.name,Loadmore);
Vue.use(Toast);
Vue.use(Lazyload);






import 'mint-ui/lib/style.css'

//引入自己书写的全局css
import '../static/css/global.css'


//配置公共的url
// Axios.defaults.baseURL='http://v.juhe.cn/toutiao';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// Axios.defaults.baseURL='http://www.hrxy.com';
// Axios.defaults.headers['Content-Type'] = 'application/json charset=UTF-8';
Vue.prototype.$axios = Axios;
Vue.use(VueJsonp);
// Vue.use(Axios);


//图片查看器
import VuePreView from 'vue-preview'
Vue.use(VuePreView)


//注册全局的导航栏组件
import Navbar from './components/Common/Navbar'
Vue.component(Navbar.name,Navbar);

//注册全局的评论组件
import Comment from './components/Common/Comment.vue'
Vue.component(Comment.name,Comment);

//注册全局的轮播图组件
import Myswiper from './components/Common/Myswiper.vue'
Vue.component(Myswiper.name,Myswiper);

// import Button from 'mint-ui';

// Vue.component(Button.name, Button);


//定义自己的moment全局过滤器
Vue.filter('converTime',function(data,formatStr){
	return Moment(data).format(formatStr);

})
// Vue.filter('converTime',function(data){
// 	return Moment(data).fromNow();

// })


//控制字数显示过滤器
Vue.filter('controlshow',function(str,num){
	//如果当前字符串长度小于num,返回原值
	if(str.length<=num){
		return str;
	}
	//如果当前字符串长度大于num，则截取
	if(str.length>num){
		return str.substr(0,num-1)+'...';
	}
})


// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    //加载提示框
    // Mint.Indicator.open({text:'爱你😍'});
    Indicator.open({text:'爱你😍'});

    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    // Mint.Indicator.close();
    Indicator.close();
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });


//将bus挂载到vue的原型上🚌
import EventBus from './EventBus.js'
Vue.prototype.$bus=EventBus;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  //挂载store实例
  store,
  router,
  components: { App },
  template: '<App/>'
})
