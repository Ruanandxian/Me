import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '../components/Home.vue'
import City from '../components/city/City.vue'
import Detail from '../components/detail/Detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
      // component: () => import('../components/Home.vue')
    },
    {
      path:'/city',
      name:'City',
      component:City
    },
    {
      path:'/detail/:id',
      name:'Detail',
      component:Detail
    }
  ],
  scrollBehavior(to,from,savePosition){
    return {x:0,y:0}
  }
})
