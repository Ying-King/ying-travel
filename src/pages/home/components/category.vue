<template>
  <div class="category">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(page, index) of pages" :key="index" >
        <div class="category-item" v-for="item of page" :key="item.id">
          <a :href="item.linkUrl">
            <div class="category-item-img">
              <img :src="item.imgUrl" alt="">
            </div>
            <p class="keywords">{{item.desc}}</p>
          </a>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
  export default {
    name: 'HomeCategory',
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination'
        },
        categoryList: [{
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          linkUrl: 'https://touch.piao.qunar.com/touch/list_常州_景点门票.html?cat=from_area%3Dts_type_nav%26from_index%3D0%26from_value%3D%25E6%2599%25AF%25E7%2582%25B9%25E9%2597%25A8%25E7%25A5%25A8%26dist_city%3D%25E5%25B8%25B8%25E5%25B7%259E',
          desc: '热门景点'
        }, {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          linkUrl: 'https://touch.piao.qunar.com/touch/list_常州_景点门票.html?cat=from_area%3Dts_type_nav%26from_index%3D0%26from_value%3D%25E6%2599%25AF%25E7%2582%25B9%25E9%2597%25A8%25E7%25A5%25A8%26dist_city%3D%25E5%25B8%25B8%25E5%25B7%259E',
          desc: '热门景点'
        }, {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          linkUrl: 'https://touch.piao.qunar.com/touch/list_常州_景点门票.html?cat=from_area%3Dts_type_nav%26from_index%3D0%26from_value%3D%25E6%2599%25AF%25E7%2582%25B9%25E9%2597%25A8%25E7%25A5%25A8%26dist_city%3D%25E5%25B8%25B8%25E5%25B7%259E',
          desc: '热门景点'
        }, {
          id: '0004',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          linkUrl: 'https://touch.piao.qunar.com/touch/list_常州_景点门票.html?cat=from_area%3Dts_type_nav%26from_index%3D0%26from_value%3D%25E6%2599%25AF%25E7%2582%25B9%25E9%2597%25A8%25E7%25A5%25A8%26dist_city%3D%25E5%25B8%25B8%25E5%25B7%259E',
          desc: '热门景点'
        }, {
          id: '0005',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          linkUrl: 'https://touch.piao.qunar.com/touch/list_常州_景点门票.html?cat=from_area%3Dts_type_nav%26from_index%3D0%26from_value%3D%25E6%2599%25AF%25E7%2582%25B9%25E9%2597%25A8%25E7%25A5%25A8%26dist_city%3D%25E5%25B8%25B8%25E5%25B7%259E',
          desc: '热门景点'
        }, {
          id: '0006',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          linkUrl: 'https://touch.piao.qunar.com/touch/list_常州_景点门票.html?cat=from_area%3Dts_type_nav%26from_index%3D0%26from_value%3D%25E6%2599%25AF%25E7%2582%25B9%25E9%2597%25A8%25E7%25A5%25A8%26dist_city%3D%25E5%25B8%25B8%25E5%25B7%259E',
          desc: '热门景点'
        }, {
          id: '0007',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          linkUrl: 'https://touch.piao.qunar.com/touch/list_常州_景点门票.html?cat=from_area%3Dts_type_nav%26from_index%3D0%26from_value%3D%25E6%2599%25AF%25E7%2582%25B9%25E9%2597%25A8%25E7%25A5%25A8%26dist_city%3D%25E5%25B8%25B8%25E5%25B7%259E',
          desc: '热门景点'
        }, {
          id: '0008',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          linkUrl: 'https://touch.piao.qunar.com/touch/list_常州_景点门票.html?cat=from_area%3Dts_type_nav%26from_index%3D0%26from_value%3D%25E6%2599%25AF%25E7%2582%25B9%25E9%2597%25A8%25E7%25A5%25A8%26dist_city%3D%25E5%25B8%25B8%25E5%25B7%259E',
          desc: '热门景点'
        }, {
          id: '0009',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          linkUrl: 'https://touch.piao.qunar.com/touch/list_常州_景点门票.html?cat=from_area%3Dts_type_nav%26from_index%3D0%26from_value%3D%25E6%2599%25AF%25E7%2582%25B9%25E9%2597%25A8%25E7%25A5%25A8%26dist_city%3D%25E5%25B8%25B8%25E5%25B7%259E',
          desc: '热门景点'
        }]
      };
    },
    computed: {
      pages() {
        const pages = [];
        this.categoryList.forEach((item, index) => {
          const page = Math.floor(index / 8);
          if (!pages[page]) {
            pages[page] = [];
          }
          pages[page].push(item);
        });
        return pages;
      }
    }
  };

</script>
<style lang="scss" scoped>
  @import '~assets/scss/mixins';

  .category {
    >>> .swiper-container {
      height: 0;
      padding-bottom: 45%;
    }
    padding-top: .1rem /* 5/50 */;
    background: $white;
    &-item {
      overflow: hidden;
      float: left;
      box-sizing: border-box;
      width: 25%;
      padding-top: .1rem /* 5/50 */;
      text-align: center;

      &-img {
        display: inline-block;
        width: 1.1rem /* 55/50 */;
        height: 1.1rem /* 55/50 */;

        img {
          width: 100%;
          height: 100%;
          margin: 0 auto;
        }
      }

      .keywords {
        font-size: .28rem /* 14/50 */;
        color: $textColor;
      }
    }
  }

</style>
