<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img :src="bannerImg">
      <div class="banner-info">
        <div class="banner-title">
          {{this.sightName}}
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          {{this.bannerImgs.length}}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary
        :imgs="bannerImgs"
        v-show="showGallary"
        @close="handleGallaryClose"
      />
    </fade-animation>
  </div>
</template>
<script>
  import CommonGallary from 'common/gallary';
  import FadeAnimation from 'common/fadeAnimation';
  export default {
    name: 'DetailBanner',
    components: {
      CommonGallary,
      FadeAnimation
    },
    props: {
      sightName: String,
      bannerImg: String,
      bannerImgs: Array
    },
    data() {
      return {
        showGallary: false
      };
    },
    methods: {
      handleBannerClick() {
        this.showGallary = true;
      },
      handleGallaryClose() {
        this.showGallary = false;
      }
    }
  };

</script>
<style lang="scss" scoped>
  @import '~assets/scss/mixins';

  .banner {
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
    position: relative;

    img {
      width: 100%;
    }

    &-info {
      display: flex;
      position: absolute;
      left: .2rem /* 10/50 */;
      right: 0;
      bottom: .36rem /* 18/50 */;
      color: $white;

      .banner-title {
        flex: 1;
        font-size: $titleFont;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.70);
      }

      .banner-number {
        width: 1.2rem /* 60/50 */;
        height: .4rem /* 20/50 */;
        line-height: .4rem /* 20/50 */;
        background: rgba(0, 0, 0, .5);
        border-radius: .2rem;
        text-align: center;
      }
    }
  }

</style>
