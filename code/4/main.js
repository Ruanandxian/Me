import  Vue from 'vue'
console.log(Vue)
document.getElementById('abtn').onclick=function(){
		require.ensure([],function(){
			var A=require('./A.js');
			alert(A.data)
		})
};
document.getElementById('bbtn').onclick=function(){
		require.ensure([],function(){
			var B=require('./B.js');
			alert(B.data)
		})

};