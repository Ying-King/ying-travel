<template>
  <ul class="alphabet">
    <li class="alphabet-item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @click="handleLetterClick"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      {{item}}
    </li>
  </ul>
</template>
<script>
  export default {
    name: 'CityAlphabet',
    props: {
      cities: Object
    },
    data() {
      return {
        touchStatus: false, // 标识位
        startY: 0,
        timer: null
      };
    },
    computed: {
      letters() { // 计算属性中定义 letters 是一个数组，从 cities 数据中遍历得到数据
        const letters = [];
        for (let i in this.cities) {
          letters.push(i);
        }
        return letters;
      }
    },
    updated() {
      this.startY = this.$refs['A'][0].offsetTop; // A 字母距离 header区域下沿 高度
    },
    methods: {
      handleLetterClick(e) {
        this.$emit('change', e.target.innerText);
      },
      handleTouchStart() {
        this.touchStatus = true;
      },
      handleTouchMove(e) {
        if (this.touchStatus) {
          if (this.timer) {
            clearTimeout(this.timer);
          }
          this.timer = setTimeout(() => {
            const touchY = e.touches[0].clientY - 79; // 手指距离 header区域下沿 高度
            const index = Math.floor((touchY - this.startY) / 20); // 当前字母下标
            if (index >= 0 && index < this.letters.length) {
              this.$emit('change', this.letters[index]); // 也通过 $emit 向外发送事件
            }
          }, 16);
        }
      },
      handleTouchEnd() {
        this.touchStatus = false;
      }
    }
  };

</script>
<style lang="scss" scoped>
  @import '~assets/scss/mixins';

  .alphabet {
    position: absolute;
    top: 1.58rem /* 79/50 */;
    right: 0;
    bottom: 0;
    width: .4rem /* 20/50 */;
    @include flex-center(column);
    &-item {
      line-height: .4rem /* 20/50 */;
      color: $bgColor;
    }
  }
</style>
