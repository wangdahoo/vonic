<template>
  <div style="overflow: hidden" :style="{
    'width': w,
    'height': h
  }">
    <div class="swiper">
      <slot></slot>
    </div>

    <pagination v-if="direction == 'horizontal'"
      :size="itemCount"
      :pager-color="pagerColor"
      :pager-bg-color="pagerBgColor"
      ref="pagination"></pagination>
  </div>
</template>
<style lang='scss'>

  .swiper {
    width: 100%;
    height: 100%;
    overflow: hidden;

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

  const re = /^[\d]+(\%)?$/

  const widthAndHeightValidator = (v) => {
    return re.test(v)
  }

  const widthAndHeightCoerce = (v) => {
    if (v[v.length - 1] != '%') return v + 'px'
    return v
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
        validator: widthAndHeightValidator
      },
      height: {
        type: String,
        default: '100%',
        validator: widthAndHeightValidator
      },
      pagerColor: {
        type: String,
        default: '#333'
      },
      pagerBgColor: {
        type: String,
        default: '#333'
      }
    },

    computed: {
      w: function () {
        return widthAndHeightCoerce(this.width)
      },

      h: function () {
        return widthAndHeightCoerce(this.height)
      }
    },

    data(){
      return {
        swiper: undefined,
        itemCount: 0
      }
    },

    mounted() {
      // console.log(this.w, this.h)
      // this.$el.style.width = this.w
      // this.$el.style.height = this.h

      Vue.nextTick(() => {

        let swiper = new Swiper({
          direction: this.direction
        })

        swiper.on('swiped', (fromIndex, toIndex) => {
          if (this.$refs.pagination)
            this.$refs.pagination.activate(toIndex)
        })

        this.swiper = swiper

        this.itemCount = this.swiper.count

        Vue.nextTick(() => {
          if (this.$refs.pagination)
            this.$refs.pagination.init()
        })

      })

    },

    methods: {
      go(index) {
        this.swiper.go(index)
      },

      next() {
        this.swiper.next()
        if (this.$refs.pagination)
          this.$refs.pagination.activate(this.swiper.activeIndex())
      },

      prev() {
        this.swiper.prev()
        if (this.$refs.pagination)
          this.$refs.pagination.activate(this.swiper.activeIndex())
      }
    }
  }
</script>
