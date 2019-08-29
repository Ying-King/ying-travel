<template>
  <div>
    <div class="container">
      <img class="loading" src="https://pic.c-ctrip.com/VacationH5Pic/taocan/dp2/loading.gif">
      <div>加载中...</div>
    </div>
    <div class="mask"></div>
  </div>
</template>

<script>
  export default {
    name: 'Loading'
  };

</script>

<style lang="scss" scoped>
  .container {
    z-index: 101;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 1.32rem /* 66/50 */;
    height: 1.32rem /* 66/50 */;
    padding: .3rem /* 15/50 */;
    background: #fff;
    border-radius: .12rem /* 6/50 */;
    text-align: center;
    .loading {
      width: 1rem /* 50/50 */;
      height: 1rem /* 50/50 */;
      margin: 0 auto;
    }
  }

  .mask {
    z-index: 100;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .6);
  }

</style>
