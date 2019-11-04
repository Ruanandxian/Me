<template>
  <div id="app">
    <keep-alive exclude="Detail">//加载一次就记住页面内容，下一次不会再发起ajax请求
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
</style>
