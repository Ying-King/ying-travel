<template>
  <div>
    <home-header/>
    <home-swiper/>
    Home
  </div>
</template>
<script>
  import HomeHeader from './components/header';
  import HomeSwiper from './components/swiper';
  export default {
    name: 'Home',
    components: {
      HomeHeader,
      HomeSwiper
    }
  };

</script>
<style lang="scss" scoped>

</style>
