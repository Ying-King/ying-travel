<template>
  <div class="header">
    <div class="header-left">
      <a class="iconfont back-icon" href="#">&#xe624;</a>
    </div>
    <div class="header-input">
      <a href="http://piao.qunar.com/touch/list_%E5%B8%B8%E5%B7%9E.html?isSearch=1&cityName=%E5%B8%B8%E5%B7%9E">
        <i class="iconfont">&#xe632;</i>
        输入城市/景点/游玩主题
      </a>
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <i class="iconfont arrow-icon">&#xe64a;</i>
      </div>
    </router-link>
  </div>
</template>
<script>
  import { mapState } from 'vuex';

  export default {
    name: 'HomeHeader',
    computed: {
      ...mapState(['city'])
    }
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
      min-width: 1.04rem /* 52/50 */;
      padding: 0 .1rem /* 5/50 */;
      text-align: center;
      color: $white;

      .arrow-icon {
        margin-left: .04rem /* 2/50 */;
        font-size: .24rem /* 12/50 */;
      }
    }
  }
</style>
