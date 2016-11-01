<template>
  <div class="swiper">
    <slot></slot>
  </div>
</template>
<style lang='scss'>

  .swiper {
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
  import Swiper from './swiper.js'
  import SwiperItem from './SwiperItem'

  export default{
    components:{

    },

    props: {
      direction: {
        type: String,
        default: 'vertical'
      },
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '100%'
      }
    },

    data(){
      return {
        swiper: undefined
      }
    },

    created() {

    },

    ready() {
      this.$el.style.width = this.width
      this.$el.style.height = this.height

      this.swiper = new Swiper({
        direction: this.direction
      })
    },

    methods: {
      go(index) {
        this.swiper.go(index)
      },

      next() {
        this.swiper.next()
      },

      prev() {
        this.swiper.prev()
      }

    }
  }
</script>
