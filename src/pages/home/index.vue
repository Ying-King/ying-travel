<template>
  <div>
    <home-header/>
    <home-swiper/>
    <home-category/>
    Home
  </div>
</template>
<script>
  import HomeHeader from './components/header';
  import HomeSwiper from './components/swiper';
  import HomeCategory from './components/category';
  export default {
    name: 'Home',
    components: {
      HomeHeader,
      HomeSwiper,
      HomeCategory
    }
  };

</script>
<style lang="scss" scoped>

</style>
