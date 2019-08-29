<template>
  <div>
    <div class="search">
      <input class="search-input"
        type="text"
        placeholder="输入城市名或拼音"
        v-model="keyword"
      >
    </div>
    <div class="search-content border-bottom"
      ref="result"
      v-show="keyword"
    >
      <ul>
        <li class="search-item"
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import BScroll from '@better-scroll/core';
  import { mapMutations } from 'vuex';
  export default {
    name: 'CitySearch',
    props: {
      cities: Object
    },
    data() {
      return {
        keyword: '',
        list: [],
        timer: null
      };
    },
    computed: {
      hasNoData() {
        return !this.list.length;
      }
    },
    watch: {
      keyword() {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        if (!this.keyword) { // 清空 input
          this.list = [];
          return;
        }
        this.timer = setTimeout(() => {
          const result = [];
          for (let i in this.cities) {
            this.cities[i].forEach((value) => {
              if (value.spell.indexOf(this.keyword) > -1) {
                result.push(value);
              }
            });
          }
          this.list = result;
        }, 100);
      }
    },
    methods: {
      handleCityClick(city) {
        this.changeCity(city);
        this.$router.push('/');
      },
      ...mapMutations(['changeCity'])
    },
    updated() {
      this.scroll = new BScroll(this.$refs.result, {
        mouseWheel: true,
        click: true,
        tap: true
      });
    }
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

  .search-content {
    overflow: hidden;
    position: absolute;
    top: 1.58rem /* 79/50 */;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background: #eee;

    .search-item {
      padding-left: .2rem /* 10/50 */;
      line-height: .6rem /* 30/50 */;
      color: $textColor;
      background: $white;
    }
  }

</style>
