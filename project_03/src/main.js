import Vue from 'vue'
import App from './App.vue'


//组测一个全局的自定义指令
//v-tack 固定定位 顶部的距离有40px

//自定义指令：
	//语法Vue.directive('指定的名',{})
	//{}字面量方式创建
	//update更新数据的时候会调用update
	// 在每个生命周期中el:绑定的dom节点binding存储的时一堆对象

	//binding属性中的参数
	//arg v-tack:top
	//value:传递的值
Vue.directive('tack',{
	bind(el,binding,vnode){
		// console.log(el);
		console.log(binding);
		el.style.position='fixed';//固定定位
		el.style[binding.arg]=binding.value+'px';
	},
	update(el,binding,vnode){
		console.log(binding);
		el.style[binding.arg]=binding.value+'px';
	}
})

Vue.directive('scroll',{
	inserted:function(el,binding,vnode){
		window.addEventListener('scroll',vnode.context.scrollLoad);
		// console.log(vnode);
	}
})
new Vue({
  el: '#app',
  render: h => h(App)
})
