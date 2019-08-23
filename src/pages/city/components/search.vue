<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音">
  </div>
</template>
<script>
  export default {
    name: 'CitySearch'
  };

</script>
<style lang="scss" scoped>
  @import '~assets/scss/mixins';

  .search {
    height: $searchHeight;
    line-height: $searchHeight;
    padding: 0 .1rem /* 5/50 */;
    background: $bgColor;

    &-input {
      box-sizing: border-box;
      width: 100%;
      padding: 0 .1rem /* 5/50 */;
      border-radius: .06rem /* 3/50 */;
      text-align: center;
    }
  }

</style>
