//编写客户端渲染

import {createApp} from './main'

const {app}=createApp();
const router=app.$router;


if(window.__INITIAL_STATE__){
	app.$store.replaceState(window.__INITIAL_STATE__)
}

window.onload=function(){
	app.$mount('#app');
}