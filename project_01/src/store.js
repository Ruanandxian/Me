import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
export default new Vuex.Store({
	state:{
		num:0
	},
	getters:{
		getShopNum(state){
			return state.num;
		}
	},
	mutations:{
		addShopNum(state,num){
			state.num+=num;
		},
		changeShopNum(state,num){
			state.num=num;
		}
	},
	actions:{
		addShopNumByAction({commit},num){
			commit('addShopNum',num)
		},
		changeShopNum({commit},num){
			commit('changeShopNum',num)
		}
	}

})