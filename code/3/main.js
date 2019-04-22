import Vue from './vue.js'
import './main.css'
import './main.less'

import App from './App.js'

import {num1,num2,add} from './App.js'



console.log(num1);
console.log(num2);
add(3,6);
new Vue({
	el:'#app',
	components:{
		App
	},
	template:`<App/>`
});