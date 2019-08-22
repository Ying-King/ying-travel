<template>
  <div class="weekend">
    <div class="weekend-title">
      <h2>周末去哪儿</h2>
    </div>
    <ul class="list">
      <li v-for="item of weekendList"
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
    data() {
      return {
        weekendList: [{
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/74/fd61f19f3f1cc1.jpg_r_640x214_6ebc0c51.jpg',
          linkUrl: 'http://piao.qunar.com/touch/toSku.htm?skuId=292&skuName=觅龙城的故事&cat=from_area%3Dts_sku%26from_index%3D0%26from_value%3D%25E8%25A7%2585%25E9%25BE%2599%25E5%259F%258E%25E7%259A%2584%25E6%2595%2585%25E4%25BA%258B%26dist_city%3D%25E5%25B8%25B8%25E5%25B7%259E',
          title: '觅龙城的故事',
          desc: '两千多年历史的常州，道不尽悠悠历史'
        }, {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/74/fd61f19f3f1cc1.jpg_r_640x214_6ebc0c51.jpg',
          linkUrl: 'http://piao.qunar.com/touch/toSku.htm?skuId=292&skuName=觅龙城的故事&cat=from_area%3Dts_sku%26from_index%3D0%26from_value%3D%25E8%25A7%2585%25E9%25BE%2599%25E5%259F%258E%25E7%259A%2584%25E6%2595%2585%25E4%25BA%258B%26dist_city%3D%25E5%25B8%25B8%25E5%25B7%259E',
          title: '觅龙城的故事',
          desc: '两千多年历史的常州，道不尽悠悠历史'
        }, {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/74/fd61f19f3f1cc1.jpg_r_640x214_6ebc0c51.jpg',
          linkUrl: 'http://piao.qunar.com/touch/toSku.htm?skuId=292&skuName=觅龙城的故事&cat=from_area%3Dts_sku%26from_index%3D0%26from_value%3D%25E8%25A7%2585%25E9%25BE%2599%25E5%259F%258E%25E7%259A%2584%25E6%2595%2585%25E4%25BA%258B%26dist_city%3D%25E5%25B8%25B8%25E5%25B7%259E',
          title: '觅龙城的故事',
          desc: '两千多年历史的常州，道不尽悠悠历史'
        }]
      };
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
