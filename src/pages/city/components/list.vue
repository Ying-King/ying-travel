<template>
  <div class="city-list" ref="wrapper">
  <div>
      <div class="list-tab">
      <ul>
        <li class="active">境内</li>
        <li class="">境外·港澳台</li>
      </ul>
    </div>
    <div class="list">
      <h2>当前城市</h2>
      <div class="mp-list">
        <div class="item  current mp-tr3">{{this.currentCity}}</div>
      </div>
      <h2>热门城市</h2>
      <ul class="mp-list">
        <li class="item mp-tr3"
          v-for="item of hot"
          :key="item.id"
          @click="handleCityClick(item.name)"
          ref="hot"
        >
          {{item.name}}
        </li>
      </ul>
      <h2>字母排序</h2>
      <ul class="mp-list">
        <li class="item mp-tr6"
          v-for="(item, key) of cities"
          :key="key"
          @click="handleLetterClick"
        >
          {{key}}
        </li>
      </ul>
      <div v-for="(item, key) of cities"
        :key="key"
        :ref="key"
      >
        <h2>{{key}}</h2>
        <ul class="mp-list">
          <li class="item mp-tr4"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >
            {{innerItem.name}}
          </li>
        </ul>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
  import BScroll from '@better-scroll/core';
  import { mapState, mapMutations } from 'vuex';

  export default {
    name: 'CityList',
    props: {
      hot: Array,
      cities: Object,
      letter: String
    },
    computed: {
      ...mapState({
        currentCity: 'city'
      })
    },
    methods: {
      handleCityClick(city) {
        this.changeCity(city);
        this.$router.push('/');
      },
      handleLetterClick(e) {
        this.$emit('change', e.target.innerText);
      },
      ...mapMutations(['changeCity'])
    },
    watch: {
      letter() {
        if (this.letter) {
          const element = this.$refs[this.letter][0];
          this.scroll.scrollToElement(element);
        }
      }
    },
    updated() {
      // better-scroll 初始化
      if (this.$refs.hot) {
        this.scroll = new BScroll(this.$refs.wrapper, {
          scrollY: true
        });
        console.log(this.scroll);
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import '~assets/scss/mixins';

  .city-list{
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
    .list-tab {
      height: .4rem /* 20/50 */;
      padding: .2rem /* 10/50 */ 1rem /* 50/50 */;
      line-height: .4rem /* 20/50 */;
      background-color: $bgColor;
      color: $white;

      ul {
        border: 1px solid #fff;
        border-radius: .02rem /* 1/50 */;
        overflow: hidden;

        li {
          width: 50%;
          float: left;
          text-align: center;
          background-color: $bgColor;
          font-size: $middleFont;
          color: $white;

          &.active {
            background-color: $white;
            color: $bgColor;
          }
        }
      }
    }

    .list {
      h2 {
        margin: .24rem /* 12/50 */ .3rem /* 15/50 */;
      }

      .mp-list {
        overflow: hidden;
        background-color: $white;

        .item {
          float: left;
          box-sizing: border-box;
          height: $listItemHeight;
          line-height: $listItemHeight;
          margin-bottom: -1px;
          font-size: $middleFont;
          color: $textColor;
          text-align: center;
          border-right: .02rem solid #ddd;
          border-bottom: .02rem solid #ddd;
        }
        .current {
          border: .02rem solid $bgColor;
          margin-bottom: 0;
        }

        .mp-tr3 {
          width: 33.33%;
          &:nth-child(3n) {
            border-right: none;
          }
        }

        .mp-tr4 {
          width: 25%;
          &:nth-child(4n) {
            border-right: none;
          }
        }

        .mp-tr6 {
          width: 16.66%;
          border: none;
        }
      }
    }
  }
</style>
