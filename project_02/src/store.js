import Vue from 'vue'

// 1.导入Vuex
import Vuex from 'vuex'

// 2.注入

Vue.use(Vuex)

export default new Vuex.Store({
	// 5大将
	state:{
		count:1,
		msg:'学习Vuex',
		list:[
		{
			id:1,msg:'生活'
		},
		{
			id:2,msg:'HELLO'
		},
		{
			id:3,msg:'World'
		},
		{
			id:4,msg:'生活'
		},


		]
	},
	getters:{
		lists(state){
			return state.list;

		},
		item:(state)=>(i)=>{
			return state.list[i]
		}

	},
	mutations:{
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
		}
	},
	actions:{
		//异步数据在actions操作
		addCountByasync({commit},payload){
			setTimeout(()=>{
				commit('addCountByasync2',payload.num)
			},1000)
		}
	}
})