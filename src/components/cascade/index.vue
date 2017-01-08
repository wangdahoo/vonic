<template>
  <div class="list list-ios thin-border von-cascade">
    <label v-for="($index, f) in fields"
           class="item item-ios item-icon-right"
           @click="showCascadePanel($index)">
      {{ f }}
      <i class="icon ion-ios-arrow-right"></i>
      <span class="item-note">{{ value[$index] }}</span>
    </label>
  </div>
</template>
<style lang='scss' scoped>
  @import "../scss/item";

  .von-cascade {
    padding-left: 16px;
    background: #FFF;

    .item-icon-right {
      .icon {
        color: #DDD;
      }
    }
  }
</style>
<script>
  import Vue from 'vue'
  import channel from '../app/channel'

  const filter = (filters, data) => {
    let options = []

    data.forEach((d) => {
      let r = true
      filters.forEach((f, i) => {
        r = r && f == d[i]
      })
      if (r) {
        let option = d[filters.length]

        if (!!option && options.indexOf(option) == -1) {
          options.push(option)
        }
      }
    })

    return options
  }

  export default {
    props: {
      fields: {
        type: Array,
        required: true
      },

      ajaxUrl: {
        type: String,
        default: undefined
      },

      ajaxData: {
        type: String,
        default: undefined
      },

      data: {
        type: Array
      },

      value: {
        type: Array,
        required: true
      }
    },

    data() {
      return {
        options: []
      }
    },

    ready() {
      if (this.ajaxUrl) {
        axios.get(this.ajaxUrl)
          .then(response => response.data)
          .then((data) => {
            this.data = this.ajaxData ? data[this.ajaxData] : data
            this.options = this.filter()
          })
      } else {
        this.options = this.filter()
      }
    },

    methods: {
      showCascadePanel(index) {
        let v = this.value, f = this.fields

        if (index > v.length) {
          channel.$emit('VonicNotification', {
            message: '请先选择' + f[index - 1]
          })

          return
        }

        let title = f[index]
        let options = this.filter(index)
        // console.log('show cascade panel =>', title, options)

        $cascadePanel
          .show(title, options)
          .then((optionIndex) => {
            if (optionIndex == -1) return

            this.value.splice(index, 1, options[optionIndex])
            this.resetDown(index)
          })
      },

      filter(index) {
        let filters = [];
        for (let i = 0; i < index; i++) filters.push(this.value[i])
        return filter(filters, this.data)
      },

      resetDown(index) {
        let len = index + 1
        this.value.splice(len, this.value.length - len)
      }
    }
  }
</script>
