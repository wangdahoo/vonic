<template>
  <div class="von-cascade" :class="{'transition-reversed': transitionReversed}">
    <label class="item item-icon-left" @click="pop()">
      <div v-if="filters.length == 0" class="text-center">请选择</div>
      <span v-if="filters.length > 0" class="icon ion-ios-arrow-thin-left"></span>
      <span v-if="filters.length > 0" class="item-note">
        {{ filterStr }}
      </span>
    </label>

    <div class="list">
      <label class="item item-cascade" v-for="op in options" @click="push(op)">
        {{ op }}
      </label>
    </div>
  </div>
</template>
<style lang='scss'>
  .von-cascade {
    .item-cascade:active {
      background-color: rgba(0,0,0,0.1);
    }
  }

  .item-slide-transition {
    transition: transform .3s ease-out;
    -webkit-transition: -webkit-transform .3s ease-out;
    transform: translate3d(0,0,0);
    -webkit-transform: translate3d(0,0,0);
  }
  .item-slide-enter {
    transform: translate3d(100%,0,0);
    -webkit-transform: translate3d(100%,0,0);
  }
  .item-slide-leave {
    opacity: 0;
  }

  .von-cascade.transition-reversed {
    .item-slide-enter {
      transform: translate3d(-100%,0,0);
      -webkit-transform: translate3d(-100%,0,0);
    }
    .item-slide-leave {
      opacity: 0;
    }
  }

</style>
<script>
  import Vue from 'vue'

  const filter = (filters, data) => {
    let options = []

    data.forEach((d) => {
      let r = true

      filters.forEach((f, i) => {
        r = r && f == d[i]
      })

      if (r) {
        let option = d[filters.length]
        if (!!option && options.findIndex((o) => { return o == option }) == -1) {
          options.push(option)
        }
      }
    })
    return options
  }

  export default {
    props: {
      data: {
        type: Array,
        required: true
      },

      value: {
        type: String,
        required: true
      },

      separator: {
        type: String,
        default: ' '
      }
    },

    data() {
      return {
        filters: [],
        options: [],
        filterStr: '',
        transitionReversed: false
      }
    },

    ready() {
      this.doFilter()
    },

    methods: {
      push(filter) {
        this.filters.push(filter)
        this.transitionReversed = false
        Vue.nextTick(() => {
          this.doFilter()
        })
      },

      pop() {
        if (this.filters.length == 0) return
        this.filters.pop()
        this.transitionReversed = true
        Vue.nextTick(() => {
          this.doFilter()
        })
      },

      doFilter() {
        this.options = filter(this.filters, this.data)
        if (this.filters.length == this.data[0].length) {
          this.value = this.getValue()
        } else {
          this.value = ''
        }

        this.filterStr = this.getValue()
      },

      getValue() {
        return this.filters.reduce((memo, f) => {
          return memo + this.separator + f
        }, '')
      }
    }
  }
</script>
