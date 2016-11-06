<template>
  <div v-if="circles.length > 0" class="swiper-pagination">
    <span v-for="($index, c) in circles" class="circle" :class="{'active': activeIndex == $index}"></span>
  </div>
</template>
<style lang='scss'>
  @import "../scss/variables";
  @import "../scss/mixins";

  .swiper-pagination {
    width: 100%;
    height: 20px;
    left: 0;
    margin-top: -20px;
    line-height: 16px;

    .circle {
      display: inline-block;
      width: 6px;
      height: 6px;
      border: 1px solid $assertive;
      border-radius: 50%;
      background-color: $light;

      margin-right: 4px;
      &:last-of-type {
        margin-right: 0;
      }

      &.active {
        background-color: $assertive;
      }
    }
  }
</style>
<script>
  export default {
    props: {
      size: {
        type: Number,
        default: 0
      }
    },

    data() {
      return {
        circles: [],
        activeIndex: 0
      }
    },

    ready() {

    },

    methods: {
      init() {
        let circles = []
        for (let i = 0; i < this.size; i++) {
          circles.push(i)
        }

        this.circles = circles
      },

      activate(index) {
        this.activeIndex = index
      }
    }
  }
</script>
