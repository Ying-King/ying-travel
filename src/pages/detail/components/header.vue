<template>
  <div>
    <router-link to="/" tag="div" class="header-back" v-show="showBack">
      <span class="back-icon iconfont">&#xe624;</span>
    </router-link>
    <div class="header-fixed" v-show="!showBack" :style="opacityStyle">
      <router-link to="/">
        <span class="back-icon iconfont">&#xe624;</span>
      </router-link>
      景点详情
    </div>
  </div>
</template>
<script>
  export default {
    name: 'DetailHeader',
    data() {
      return {
        showBack: true,
        opacityStyle: {
          opacity: 0
        }
      };
    },
    created() {
      window.addEventListener('scroll', this.handleScroll);
    },
    activated() { // 每一次页面展示时执行
      window.addEventListener('scroll', this.handleScroll);
    },
    deactivated() { // 页面即将被隐藏时执行，对全局事件解绑
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        const top = document.documentElement.scrollTop;
        if (top > 60) {
          let opacity = top / 140;
          opacity = opacity > 1 ? 1 : opacity;
          this.opacityStyle = { opacity };
          this.showBack = false;
        } else {
          this.showBack = true;
        }
      }
    }
  };

</script>
<style lang="scss" scoped>
  @import '~assets/scss/mixins';
  .back-icon {
    color: $white;
    font-weight: bold;
  }
  .header-back {
    z-index: 2;
    position: absolute;
    left: .1rem /* 5/50 */;
    top: .1rem /* 5/50 */;
    width: .72rem /* 36/50 */;
    height: .72rem /* 36/50 */;
    line-height: .72rem /* 36/50 */;
    text-align: center;
    background: rgba(0, 0, 0, .5);
    border-radius: 50%;
  }
  .header-fixed {
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: $headerHeight;
    line-height: $headerHeight;
    text-align: center;
    color: $white;
    background: $bgColor;
    font-size: $titleFont;
    .back-icon {
      position: absolute;
      left: 0;
      top: 0;
      width: .8rem /* 40/50 */;
    }
  }
</style>
