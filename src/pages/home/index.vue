<template>
  <div>
    <home-header/>
    <home-swiper/>
    <home-category/>
    <home-recommend/>
    <home-weekend/>
  </div>
</template>
<script>
  import HomeHeader from './components/header';
  import HomeSwiper from './components/swiper';
  import HomeCategory from './components/category';
  import HomeRecommend from './components/recommend';
  import HomeWeekend from './components/weekend';
  export default {
    name: 'Home',
    components: {
      HomeHeader,
      HomeSwiper,
      HomeCategory,
      HomeRecommend,
      HomeWeekend
    }
  };

</script>
<style lang="scss" scoped>

</style>
