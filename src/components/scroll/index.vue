<template>
  <div class="scroll"
       :class="{
         'pull-down': (state === 0),
         'pull-up': (state === 1),
         refreshing: (state === 2),
         touching: touching
       }"
      @touchstart="onRefresh ? touchStart($event) : undefined"
      @touchmove="onRefresh ? touchMove($event) : undefined"
      @touchend="onRefresh ? touchEnd($event) : undefined"
      @scroll="(onInfinite || infiniteLoading) ? onScroll($event) : undefined"
       >
    <div class="scroll-inner"
      :style="{ transform: 'translate3d(0, ' + top + 'px, 0)' }"
      >
      <div class="pull-to-refresh-layer" v-if="!!onRefresh">
        <slot name="refresh">
          <div class="preloader"></div>
          <div class="pull-to-refresh-arrow"></div>
          <span class="label-down">Pull Down to Refresh</span>
          <span class="label-up">Release to Refresh</span>
          <span class="label-refresh">Refreshing...</span>
        </slot>
      </div>
      <slot></slot>
      <div class="infinite-layer" v-if="onInfinite">
        <slot name="infinite">
          <div class="infinite-preloader"></div>
          <div>Loading...</div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    offset: {
      type: Number,
      default: 44
    },
    onRefresh: {
      type: Function,
      default: undefined,
      required: false
    },
    onInfinite: {
      type: Function,
      default: undefined,
      require: false
    }
  },
  data () {
    return {
      top: 0,
      state: 0, // 0:down, 1: up, 2: refreshing
      startY: 0,
      touching: false,

      infiniteLoading: false
    }
  },
  methods: {
    touchStart (e) {
      this.startY = e.targetTouches[0].pageY
      this.touching = true
    },
    touchMove (e) {
      if (this.$el.scrollTop > 0 || !this.touching) {
        return
      }
      let diff = e.targetTouches[0].pageY - this.startY
      if (diff > 0) e.preventDefault()
      this.top = Math.pow(diff, 0.8) + (this.state === 2 ? this.offset : 0)

      if (this.state === 2) { // in refreshing
        return
      }
      if (this.top >= this.offset) {
        this.state = 1
      } else {
        this.state = 0
      }
    },
    touchEnd (e) {
      this.touching = false
      if (this.state === 2) { // in refreshing
        this.state = 2
        this.top = this.offset
        return
      }
      if (this.top >= this.offset) { // do refresh
        this.refresh()
      } else {  // cancel refresh
        this.state = 0
        this.top = 0
      }
    },
    refresh () {
      this.state = 2
      this.top = this.offset
      this.onRefresh(this.refreshDone)
    },
    refreshDone () {
      this.state = 0
      this.top = 0
    },

    infinite () {
      this.infiniteLoading = true
      this.onInfinite(this.infiniteDone)
    },

    infiniteDone () {
      this.infiniteLoading = false
    },

    onScroll (e) {
      if (this.infiniteLoading) {
        return
      }
      let outerHeight = this.$el.clientHeight
      let innerHeight = this.$el.querySelector('.scroll-inner').clientHeight
      let scrollTop = this.$el.scrollTop
      let ptrHeight = this.onRefresh ? this.$el.querySelector('.pull-to-refresh-layer').clientHeight : 0
      let infiniteHeight = this.$el.querySelector('.infinite-layer').clientHeight
      let bottom = innerHeight - outerHeight - scrollTop - ptrHeight

      if (bottom < infiniteHeight) this.infinite()
    }
  }
}
</script>
<style lang="scss" scoped>
@import './scroll.scss';
</style>
