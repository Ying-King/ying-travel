<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <a :href="item.linkUrl">
          <img class="swiper-img"
          :src="item.imgUrl">
        </a>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
  export default {
    name: 'HomeSwiper',
    props: {
      list: Array
    },
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination', // 设置分页器
          loop: true, // 无缝滚动
          autoplay: 3000 // 开启自动轮播
        }
      };
    },
    computed: {
      showSwiper() {
        return this.list.length;
      }
    }
  };

</script>
<style lang="scss" scoped>
  @import '~assets/scss/mixins';

  .wrapper {
    /* 防止网速过慢时页面布局的抖动 */
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 26.67%;
    background: $grey;

    >>>.swiper-pagination-bullet-active {
      background: $white !important;
    }

    .swiper-img {
      width: 100%;
    }
  }

</style>
