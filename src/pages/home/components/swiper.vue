<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <a :href="item.linkUrl">
          <img class="swiper-img"
          :src="item.imgUrl"
          alt="">
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
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination', // 设置分页器
          loop: true, // 无缝滚动
          autoplay: 3000 // 开启自动轮播
        },
        swiperList: [{
          id: '0001',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/95274cec39fa73e3cccf35e24ec01c3b.jpg_750x200_1b6ffcfa.jpg',
          linkUrl: 'https://sale.piao.qunar.com/touch/topic/mk/t_2781.htm?cat=from_value%3DTOPIC-%E4%B8%8A%E6%B5%B7%E8%BF%AA%E5%A3%AB%E5%B0%BC%EF%BC%88%E6%97%A9%E9%B8%9F%E7%A5%A8%EF%BC%89%E3%80%90%E6%B2%AA%E4%BB%A5%E5%A4%96%E3%80%91%26from_area%3Dts_topic%26dist_city%3D%E5%B8%B8%E5%B7%9E%26from_index%3D4'
        }, {
          id: '0002',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/212caf070dc741cc1c10cc791c1c99f7.jpg_750x200_bab5b93a.jpg',
          linkUrl: 'https://touch.piao.qunar.com/touch/detail.htm?id=2319&cat=from_value%3DPOI-2319%26from_area%3Dts_topic%26dist_city%3D%E5%B8%B8%E5%B7%9E%26from_index%3D5'
        }, {
          id: '0003',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg',
          linkUrl: 'https://sale.piao.qunar.com/touch/mk/special.htm?cat=from_value%3DTOPIC-1%E5%85%83%E9%97%A8%E7%A5%A8%26from_area%3Dts_topic%26dist_city%3D%E5%B8%B8%E5%B7%9E%26from_index%3D3'
        }]
      };
    },
    computed: {
      showSwiper() {
        return this.swiperList.length;
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
