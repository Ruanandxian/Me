import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Home from '@/components/Home/Home'
// import Vip from '@/components/Vip/vip'
// import Cart from '@/components/Cart/Cart'
// import Search from '@/components/Search/search'
// import NewsList from '@/components/News/NewsList'
// import NewsDetail from '@/components/News/NewsDetail'
// import PhotoList from '@/components/Photo/PhotoList'
// import PhotoDetail from '@/components/Photo/PhotoDetail'
// import GoodList from '@/components/Good/GoodList'
// import GoodsDetail from '@/components/Good/GoodsDetail'
// import GoodsComment from '@/components/Good/GoodsComment'

const Home =()=>import( '@/components/Home/Home');
const Vip =()=>import( '@/components/Vip/vip');
const Cart =()=>import( '@/components/Cart/Cart');
const Search =()=>import( '@/components/Search/search');
const NewsList =()=>import( '@/components/News/NewsList');
const NewsDetail =()=>import( '@/components/News/NewsDetail');
const PhotoList =()=>import( '@/components/Photo/PhotoList');
const PhotoDetail =()=>import( '@/components/Photo/PhotoDetail');
const GoodList =()=>import( '@/components/Good/GoodList');
const GoodsDetail =()=>import( '@/components/Good/GoodsDetail');
const GoodsComment =()=>import( '@/components/Good/GoodsComment');


// const Foo = () => import('./Foo.vue')







//使用vue-router插件 Vue.prototype.$router=Router;
Vue.use(Router)


//匹配的路由规则
export default new Router({
  linkActiveClass:'link-active',
  routes: [
  	{
  		path:'',
  		redirect:'/home'
  	},
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/vip',
      name: 'vip',
      component: Vip
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    //新闻列表
      {
      path: '/news/list',
      name: 'news.list',
      component: NewsList
    },
    {
      path:'/news/detail',
      name:'detail',
      component:NewsDetail,
      props:{
        title:'新闻详情'
      }
    },
    {
      path:'/photo/list/:categoryId',
      name:'photo.list',
      component:PhotoList
    },
    {
      path:'/photo/detail',
      name:'photo.detail',
      component:PhotoDetail
    },
    {
      path:'/good/list/:page',
      name:'good.list',
      component:GoodList
    },
    {
      path:'/good/detail/:id',
      name:'good.detail',
      component:GoodsDetail
    },
    {//商品图文介绍
      path:'/good/photo/info',
      name:'photo.info',
      component:NewsDetail,
      props:{
        title:'图文介绍'
      }
    },
    {
      //商品评论
      path:'/good/photo/comment',
      name:'good.comment',
      component:GoodsComment
    }
  ]
})
