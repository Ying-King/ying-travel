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
    props: {
      list: Array
    },
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination'
        }
      };
    },
    computed: {
      pages() {
        const pages = [];
        this.list.forEach((item, index) => {
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
      height: 3.7rem /* 185/50 */;
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
