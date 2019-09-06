<template>
  <div class="recommend">
    <div class="recommend-title">
      <img src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="">
      <span>本周热门榜单</span>
      <a class="recommend-title-more" href="http://touch.piao.qunar.com/touch/weekHotSales.htm?cityName=常州">
        全部榜单
        <i class="iconfont">></i>
      </a>
    </div>
    <ul class="list">
      <router-link tag="li"
        v-for="item of list"
        :key="item.id"
        :to="{name: 'Detail',params: {id: item.id}}"
        class="item border-bottom"
      >
          <div class="item-img">
            <img :src="item.cimgurl" alt="">
          </div>
          <p class="item-title">{{item.name}}</p>
          <div class="item-desc">
            <span class="item-price">¥<em class="item-price-num">{{item.price}}</em>起</span>
          </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'HomeRecommend',
    props: {
      list: Array
    }
  };
</script>
<style lang="scss" scoped>
  @import '~assets/scss/mixins';

  .recommend {
    margin-top: .2rem /* 10/50 */;
    background: $white;

    &-title {
      position: relative;
      padding: .24rem 0 /* 12/50 */;

      img {
        display: inline-block;
        overflow: hidden;
        width: .3rem /* 15/50 */;
        height: .3rem /* 15/50 */;
        margin-left: .2rem /* 10/50 */;
        vertical-align: top;
      }

      span {
        display: inline-block;
        margin-left: .08rem /* 4/50 */;
        height: .44rem /* 22/50 */;
        line-height: .44rem /* 22/50 */;
        font-size: $titleFont;
        color: $textColor;
      }

      &-more {
        position: absolute;
        top: .36rem /* 18/50 */;
        right: .32rem /* 16/50 */;
        color: $darkGrey;
        font-size: $defaultFont;
        line-height: .28rem /* 14/50 */;
      }
    }

    .list {
      padding: 0 .24rem /* 12/50 */;
      overflow-x: scroll;
      white-space: nowrap;

      .item {
        position: relative;
        display: inline-block;
        box-sizing: border-box;
        padding: .06rem /* 3/50 */ .1rem /* 5/50 */ .2rem /* 10/50 */ 0;
        width: 3rem /* 150/50 */;
        font-size: $defaultFont;
        text-align: center;

        &-img {
          overflow: hidden;
          height: 0;
          padding-bottom: 100%;

          img {
            width: 100%;
          }
        }

        &-title {
          margin-top: .12rem /* 6/50 */;
          color: $textColor;
          line-height: .32rem /* 16/50 */;
        }

        &-desc {
          color: $darkGrey;
          line-height: .36rem /* 18/50 */;

          .item-price {
            color: $orange;

            &-num {
              font-size: $middleFont;
            }
          }
        }
      }
    }
  }
</style>
