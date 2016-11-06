<template>
  <div style="overflow: hidden">
    <div class="swiper">
      <slot></slot>
    </div>

    <pagination :size="itemCount" v-ref:pagination></pagination>
  </div>
</template>
<style lang='scss'>

  .swiper {
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: all 0.3s ease;

    .swiper-item {
      height: 100%;
      background-position: center center;
      background-size: cover;
      position: relative;
      overflow: hidden;
      float: left;

      &.swiper-item-active {
        .animated {
          animation-fill-mode: both;
          opacity: 1;
        }
      }

      &:not(.active) {
        .animated {
          animation: none;
          opacity: 0;
        }
      }
    }
  }

</style>
<script>
  import Vue from 'vue'
  import Swiper from './swiper.js'
  import SwiperPagination from './SwiperPagination'

  const widthAndHeightCoerce = (v) => {
    if (v[v.length - 1] != '%') return v + 'px'
    return v
  }

  const widthAndHeightValidator = (v) => {
    return /^[\d]+(\%|px)$/.test(v)
  }

  export default {
    components: {
      'pagination': SwiperPagination
    },

    props: {
      direction: {
        type: String,
        default: 'vertical'
      },
      width: {
        type: String,
        default: '100%',
        validator: widthAndHeightValidator,
        coerce: widthAndHeightCoerce
      },
      height: {
        type: String,
        default: '100%',
        validator: widthAndHeightValidator,
        coerce: widthAndHeightCoerce
      }
    },

    data(){
      return {
        swiper: undefined,
        itemCount: 0
      }
    },

    created() {

    },

    ready() {
      this.$el.style.width = this.width
      this.$el.style.height = this.height

      let swiper = new Swiper({
        direction: this.direction
      })

      swiper.on('swiped', (fromIndex, toIndex) => {
        this.$refs.pagination.activate(toIndex)
      })

      this.swiper = swiper

      this.itemCount = this.swiper.count

      Vue.nextTick(() => {
        this.$refs.pagination.init()
      })

    },

    methods: {
      go(index) {
        this.swiper.go(index)
      },

      next() {
        this.swiper.next()
        this.$refs.pagination.activate(this.swiper.activeIndex())
      },

      prev() {
        this.swiper.prev()
        this.$refs.pagination.activate(this.swiper.activeIndex())
      }

    }
  }
</script>
