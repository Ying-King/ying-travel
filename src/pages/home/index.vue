<template>
  <div>
    <home-header />
    <home-swiper :list="swiperList"/>
    <home-category :list="categoryList"/>
    <home-recommend :list="recommendList"/>
    <home-weekend :list="weekendList"/>
    <div class="price-desc">
      票面价是指通过景区指定窗口售卖的纸质门票上标注的价格
    </div>
  </div>
</template>
<script>
  import HomeHeader from './components/header';
  import HomeSwiper from './components/swiper';
  import HomeCategory from './components/category';
  import HomeRecommend from './components/recommend';
  import HomeWeekend from './components/weekend';

  import axios from 'axios';

  export default {
    name: 'Home',
    components: {
      HomeHeader,
      HomeSwiper,
      HomeCategory,
      HomeRecommend,
      HomeWeekend
    },
    data() {
      return {
        swiperList: [],
        categoryList: [],
        recommendList: [],
        weekendList: []
      };
    },
    methods: {
      getHomeInfo() {
        axios.get('/api/index.json').then(this.getHomeInfoSucc);
      },
      getHomeInfoSucc(res) {
        res = res.data;
        if (res.ret && res.data) {
          const data = res.data;
          this.swiperList = data.swiperList;
          this.categoryList = data.categoryList;
          this.recommendList = data.recommendList;
          this.weekendList = data.weekendList;
        }
        console.log(res);
      }
    },
    mounted() {
      this.getHomeInfo();
    }
  };

</script>
<style lang="scss" scoped>
  @import '~assets/scss/mixins';

  .price-desc {
    margin-top: .1rem /* 5/50 */;
    padding: .14rem /* 7/50 */ .1rem /* 5/50 */;
    font-size: $defaultFont;
    line-height: .32rem /* 16/50 */;
    background: $white;
    color: $darkGrey;
  }
</style>
