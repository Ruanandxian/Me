<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe658;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe63c;</span>城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon">&#xe65c;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader"
};
</script>


<style lang='stylus' scoped>
@import '~styles/varibles.styl';

.header {
  display: flex;
  line-height: 0.86rem;
  background: $bgColor;
  color: #fff;

  .header-left {
    width: 0.64rem;
    float: left;

    .back-icon {
      text-align: center;
      font-size: 0.4rem;
    }
  }

  .header-input {
    flex: 1;
    height: 0.64rem;
    line-height: 0.64rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    padding-left: 0.2rem;
    background: #fff;
    border-radius: 0.1rem; // 添加圆角
    color: #ccc;
  }

  .header-right {
    width: 1.24rem;
    float: right;
    text-align: center;

    .arrow-icon {
      margin-left: -0.04rem;
      font-size: 0.3rem;
    }
  }
}
</style>
