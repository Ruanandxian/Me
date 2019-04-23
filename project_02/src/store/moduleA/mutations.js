import Vue from 'vue'

export default{
			//修改数据只能在mutations
		addNum(state,num){
			state.count+=num;
		},

		// 不要在这里操作异步数据
		addCountByasync(state,payload){
			setTimeout(()=>{
				state.count+=payload.num;
			},1000)
		},
		addCountByasync2(state,num){
				state.count+=num;
		},
		changeState(state,name){
			// state.myProp.name=name;
			//Mutation需遵守Vue的响应规则
			//1.最好提前在你的store中初始化好所有的属性
			// 2.当需要在对象上添加新属性时，你应该

			
		//手动设置 给state中的状态 添加属性

			Vue.set(state.myProp,'name',name);
		},
}