<template>
  <div class="list von-cascade">
    <label v-for="($index, f) in fields" class="item item-icon-right cascade-field">
      {{ f }}
      <i class="icon ion-ios-arrow-right grey"></i>
      <span class="item-note">{{ value[$index] }}</span>

      <select :id="selectIdPrefix + '-' + $index" v-model="value[$index]" @change="">
        <option value=""></option>
        <option v-for="($index, option) in options[$index]" :value="option">{{ option }}</option>
      </select>
    </label>
  </div>
</template>
<style lang='scss'>
  .von-cascade {
    padding-left: 16px;
    background: #FFF;

    .item {
      padding-left: 0px;
    }

    .item-icon-right .icon {
      color: #ccc;
      font-size: 24px;
      right: 0;
    }

    .cascade-field {
      .item-note {
        padding-right: 15px;
      }

      select {
        position: absolute;
        top: -50000px;
        left: -50000px;
      }
    }
  }
</style>
<script>
  import Vue from 'vue'

  const initVal = (len) => {
    let v = []
    for (let i=0; i<len; i++) v.push('')
    return v
  }

  const getFilters = (value) => {
    let seperator = " | ";
    let filters = value.reduce((pre, cur) => {
      return !!pre ? (!!cur ? pre + seperator + cur : pre) : (cur || "")
    }, "").split(seperator);
    return filters
  }

  const filter = (filters, data) => {
    console.log(filters)
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

    console.log(options);
    return options
  }

  export default {
    props: {
      fields: {
        type: Array,
        required: true
      },

      data: {
        type: Array,
        required: true
      },

      value: {
        type: Array,
        required: true
      }
    },

    data() {
      return {
        selectIdPrefix: Math.random().toString(32).substr(3,8),
        options: []
      }
    },

    created() {
      this.value = initVal(this.fields.length)
    },

    ready() {
      let options = [filter([], this.data)]
      for (let i=1; i<this.fields.length; i++) {
        options.push([])
      }

      this.options = options
    },
    
    methods: {
     
    },

    watch: {
      value: function (newVal) {
        let index = newVal.indexOf("")
        this.options[index] = filter(getFilters(newVal), this.data)
        console.log(this.options)
      }
    }
  }
</script>
