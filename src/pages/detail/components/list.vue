<template>
  <div>
    <div class="baseinfo">
      <div class="baseinfo-flex">
        <div class="baseinfo-flex-card">
          <p class="title text"><span class="score">{{this.infoList.cmtscore}}</span>分&nbsp;&nbsp;&nbsp;
           {{this.infoList.cmttag}}
          </p>
          <p>{{this.infoList.cmtusertotal}} 条评论</p>
          <span class="iconfont back-icon">&#xe624;</span>
        </div>
        <div class="baseinfo-flex-card">
          <p class="title">景点简介</p>
          <p>开放时间、贴士</p>
          <span class="iconfont back-icon">&#xe624;</span>
        </div>
      </div>
      <div class="baseinfo-address border-top">地址：{{this.infoList.address}}</div>
    </div>
    <div class="item"
      v-for="(item, index) of list.saleunits"
      :key="index"
    >
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.name}}
      </div>
      <div class="item-children border-top">
        <div class="item-title">成人票</div>
        <div class="title text">￥<span class="score">{{item.price}}</span>&nbsp;起</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'DetailList',
    props: {
      infoList: Object,
      list: Object
    }
  };

</script>
<style lang="scss" scoped>
  @import '~assets/scss/mixins';
  .baseinfo {
    position: relative;
    top: -.1rem;
    padding: .1rem /* 5/50 */ .2rem /* 10/50 */ 0 .2rem /* 10/50 */;
    background: $white;
    border-radius: .1rem /* 5/50 */ .1rem /* 5/50 */ 0 0;

    &-flex {
      display: flex;
      width: 100%;
      padding: .1rem /* 5/50 */ 0;
      &-card {
        flex: 1;
        position: relative;
        .back-icon {
          position: absolute;
          top: .28rem /* 14/50 */;
          right: .2rem /* 10/50 */;
          transform: rotate(180deg);
        }
        p {
          padding-left: .3rem /* 15/50 */;
          line-height: .32rem /* 16/50 */;
          font-size: $defaultFont;
          color: $darkGrey;
        }
      }
    }

    &-address {
      padding: .2rem /* 10/50 */ 0 .2rem /* 10/50 */ .3rem /* 15/50 */;
      line-height: .36rem /* 18/50 */;
      color: $textColor;
    }
  }

  .title {
    font-size: $middleFont;
    line-height: .48rem /* 24/50 */;
    color: $textColor;
    &.text {
      color: $orange;
    }
    .score {
      font-size: .44rem /* 22/50 */;
      line-height: .44rem /* 22/50 */;
    }
  }

  .item {
    margin-top: .2rem /* 10/50 */;
  }
  .item-title {
    display: flex;
    padding-left: .2rem /* 10/50 */;
    line-height: .8rem /* 40/50 */;
    font-size: $titleFont;
    background: $white;
    &-icon {
      display: inline-block;
      box-sizing: border-box;
      margin-top: .2rem /* 10/50 */;
      margin-right: .2rem /* 10/50 */;
      width: .36rem /* 18/50 */;
      height: .36rem /* 18/50 */;
      background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
      background-size: .4rem /* 20/50 */ 3rem /* 150/50 */;
    }
  }

  .item-children {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: $white;
    padding: 0 .56rem /* 28/50 */;
    .text {
      color: red;
    }
  }

  .border-top::before {
    background: #dadada;
    z-index: 3;
  }
</style>
