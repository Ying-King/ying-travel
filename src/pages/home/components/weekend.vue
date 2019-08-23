<template>
  <div class="weekend">
    <div class="weekend-title">
      <h2>周末去哪儿</h2>
    </div>
    <ul class="list">
      <li v-for="item of list"
        :key="item.id"
        class="item border-bottom"
      >
        <a :href="item.linkUrl" class="fulllink">
          <div class="item-img">
            <img :src="item.imgUrl" alt="">
          </div>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'HomeWeekend',
    props: {
      list: Array
    }
  };
</script>
<style lang="scss" scoped>
  @import '~assets/scss/mixins';

  .weekend {
    margin-top: .2rem /* 10/50 */;
    background: $white;

    &-title {
      position: relative;
      padding: .24rem 0 /* 12/50 */;

      h2 {
        margin-left: .08rem /* 4/50 */;
        height: .44rem /* 22/50 */;
        line-height: .44rem /* 22/50 */;
        font-size: $titleFont;
        color: $textColor;
      }
    }

    .list {
      .item {
        position: relative;
        display: block;
        margin-bottom: .1rem /* 5/50 */;
        font-size: $defaultFont;

        .fulllink {
          display: block;
          width: 100%;
          height: 100%;
        }

        &-img {
          overflow: hidden;
          height: 0;
          padding-bottom: 37.4375%;

          img {
            width: 100%;
          }
        }

        &-info {
          padding: .2rem /* 10/50 */;
        }

        &-title {
          color: $textColor;
          line-height: .32rem /* 16/50 */;
          @include ellipsis();
        }

        &-desc {
          color: $darkGrey;
          line-height: .36rem /* 18/50 */;
          @include ellipsis();
        }
      }
    }
  }
</style>
