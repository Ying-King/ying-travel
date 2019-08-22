<template>
  <div>
    <home-header/>
    <home-swiper/>
    <home-category/>
    <home-recommend/>
    Home
  </div>
</template>
<script>
  import HomeHeader from './components/header';
  import HomeSwiper from './components/swiper';
  import HomeCategory from './components/category';
  import HomeRecommend from './components/recommend';
  export default {
    name: 'Home',
    components: {
      HomeHeader,
      HomeSwiper,
      HomeCategory,
      HomeRecommend
    }
  };

</script>
<style lang="scss" scoped>

</style>
