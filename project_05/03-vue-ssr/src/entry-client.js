//编写客户端渲染

import {createApp} from './main'

const {app}=createApp();
const router=app.$router;


window.onload=function(){
	app.$mount('#app');
}