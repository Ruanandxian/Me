<template>
  <div id="app">
    <h3 v-tack:left='rans'>我是自定义的指令</h3>
    <!-- <h1>我是自定义的指令</h1> -->
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
    <br>
    <button @click='posHandler'>调整位置</button>


    <div class='box' v-scroll='scrollLoad'>
      <p>在每个生命周期中el:绑定的dom节点binding存储的时一堆对象</p>
      <p>在每个生命周期中el:绑定的dom节点binding存储的时一堆对象</p>
      <p>在每个生命周期中el:绑定的dom节点binding存储的时一堆对象</p>
      <p>在每个生命周期中el:绑定的dom节点binding存储的时一堆对象</p>
      <p>在每个生命周期中el:绑定的dom节点binding存储的时一堆对象</p>
      <p>在每个生命周期中el:绑定的dom节点binding存储的时一堆对象</p>
      <p>在每个生命周期中el:绑定的dom节点binding存储的时一堆对象</p>
      <p>在每个生命周期中el:绑定的dom节点binding存储的时一堆对象</p>
      <p>在每个生命周期中el:绑定的dom节点binding存储的时一堆对象</p>
      <p>在每个生命周期中el:绑定的dom节点binding存储的时一堆对象</p>
      <p>在每个生命周期中el:绑定的dom节点binding存储的时一堆对象</p>
      <p>在每个生命周期中el:绑定的dom节点binding存储的时一堆对象</p>
      <p>在每个生命周期中el:绑定的dom节点binding存储的时一堆对象</p>
      <p>在每个生命周期中el:绑定的dom节点binding存储的时一堆对象</p>
      <p>在每个生命周期中el:绑定的dom节点binding存储的时一堆对象</p>
      <p>在每个生命周期中el:绑定的dom节点binding存储的时一堆对象</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      rans:300,
    }
  },
  methods:{
    posHandler(){
      this.rans+=3;
    },
    scrollLoad(){
      //滚动条的高度
      let scrollTop=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;

      //文档高度
      let bodyHeight=document.body.scrollHeight||document.documentElement.scrollHeight;
      if(scrollTop+window.innerHeight>=bodyHeight-50){
        //发起请求
        console.log('发起请求');
      }
    }
  }
};
</script>

<style>
body{
  height:2000px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
