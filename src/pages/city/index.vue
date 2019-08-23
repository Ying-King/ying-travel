<template>
  <div>
    <city-header/>
    City
  </div>
</template>
<script>
  import CityHeader from './components/header';

  export default {
    name: 'City',
    components: {
      CityHeader
    }
  };

</script>
<style lang="scss" scoped>
  @import '~assets/scss/mixins';

</style>
