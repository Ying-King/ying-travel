<template>
  <div class="header">
    <router-link to="/home">
      <div class="header-left iconfont">&#xe624;</div>
    </router-link>
    <h1 class="header-title">城市选择</h1>
  </div>
</template>
<script>
  export default {
    name: 'CityHeader'
  };

</script>
<style lang="scss" scoped>
  @import '~assets/scss/mixins';

  .header {
    height: $headerHeight;
    line-height: $headerHeight;
    background: $bgColor;
    text-align: center;

    &-left {
      float: left;
      height: 100%;
      width: .64rem /* 32/50 */;
      font-size: .4rem /* 20/50 */;
      font-weight: bold;
      color: $white;
    }

    &-title {
      margin: 0 1rem /* 50/50 */;
      font-size: $titleFont;
      color: $white;
    }
  }

</style>
