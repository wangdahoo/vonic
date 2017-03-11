<template>
  <div v-if="circles.length > 0" class="swiper-pagination">
    <span v-for="($index, c) in circles"
          class="circle"
          :style="{
            'backgroundColor': activeIndex == $index ? pagerColor : pagerBgColor,
            'opacity': (pagerColor == pagerBgColor) ? (activeIndex == $index ? '1' : '0.4') : '1'
          }"></span>
  </div>
</template>
<script>
  const re_color = /^#([0-9A-Fa-f]{3})|([0-9A-Fa-f]{6})$/;

  export default {
    props: {
      size: {
        type: Number,
        default: 0
      },

      pagerColor: {
        type: String,
        validator(v) {
          return re_color.test(v)
        },
        required: true
      },

      pagerBgColor: {
        type: String,
        validator(v) {
          return re_color.test(v)
        },
        required: true
      }
    },

    data() {
      return {
        circles: [],
        activeIndex: 0
      }
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
