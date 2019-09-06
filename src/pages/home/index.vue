<template>
  <div>
    <loading v-show="!recommendList.length && !swiperList.length"/>
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
  import Loading from 'common/loading';

  import axios from 'axios';
  import { mapState } from 'vuex';
  import {recommendUrl, recommendParams} from 'assets/js/config';

  export default {
    name: 'Home',
    components: {
      HomeHeader,
      HomeSwiper,
      HomeCategory,
      HomeRecommend,
      HomeWeekend,
      Loading
    },
    data() {
      return {
        lastCity: '',
        swiperList: [],
        categoryList: [],
        recommendList: [],
        weekendList: []
      };
    },
    computed: {
      ...mapState(['city'])
    },
    methods: {
      getHomeInfo() {
        axios.get('https://ying-king.github.io/data-mock/ying-travel/index.json?city=' + this.city).then(this.getHomeInfoSucc);
        axios.post(recommendUrl, recommendParams).then((res) => {
          res = res.data;
          this.recommendList = res.data.popularRecommend.hotViewSpots;
          console.log(this.recommendList);
        });
      },
      getHomeInfoSucc(res) {
        res = res.data;
        if (res.ret && res.data) {
          const data = res.data;
          this.swiperList = data.swiperList;
          this.categoryList = data.categoryList;
          this.weekendList = data.weekendList;
        }
        console.log(res.data);
      }
    },
    mounted() {
      this.lastCity = this.city;
      this.getHomeInfo();
    },
    activated() {
      if (this.lastCity !== this.city) {
        this.lastCity = this.city;
        this.getHomeInfo();
      }
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
