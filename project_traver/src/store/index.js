import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)


export default new Vuex.Store({
    state:state,
    // actions:{
    //     changecity(ctx,city){
    //         ctx.commit('changecity',city)
    //     }
    // },
    mutations:mutations,
    // getters:{
    //     doubleCity(state){
    //         return state.city+' '+state.city
    //     }
    // }
})