<template>
  <div class="header">
    <div class="header-left">
      <a class="iconfont back-icon" href="#">&#xe624;</a>
    </div>
    <div class="header-input">
      <a href="#">
        <i class="iconfont">&#xe632;</i>
        输入城市/景点/游玩主题
      </a>
    </div>
    <router-link to="/city">
      <div class="header-right">
        城市<i class="iconfont arrow-icon">&#xe64a;</i>
      </div>
    </router-link>
  </div>
</template>
<script>
  export default {
    name: 'HomeHeader'
  };

</script>
<style lang="scss" scoped>
  @import '~assets/scss/mixins';

  .header {
    display: flex;
    line-height: $headerHeight;
    background: $bgColor;

    &-left {
      float: left;
      height: 100%;
      width: .64rem /* 32/50 */;
      font-size: .4rem /* 20/50 */;
      font-weight: bold;
      text-align: center;
      a {
        color: $white;
      }
    }

    &-input {
      flex: 1;
      height: .64rem /* 32/50 */;
      line-height: .64rem /* 32/50 */;
      margin: .14rem /* 7/50 */;
      padding-left: .1rem /* 5/50 */;

      background: $white;
      border-radius: .1rem /* 5/50 */;
      a {
        color: $grey;
      }
    }

    &-right {
      float: right;
      height: 100%;
      width: 1.24rem /* 62/50 */;
      text-align: center;
      color: $white;

      .arrow-icon {
        margin-left: .04rem /* 2/50 */;
        font-size: .24rem /* 12/50 */;
      }
    }
  }
</style>
