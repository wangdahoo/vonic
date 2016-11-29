<template>
  <div class="list von-cascade">
    <label v-for="($index, f) in fields" class="item item-icon-right cascade-field" @click="showSelect($index)">
      {{ f }}
      <i class="icon ion-ios-arrow-right grey"></i>
      <span class="item-note">{{ value[$index] }}</span>
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
    let filters = value.reduce((v, memo) => {
      return !!v ? memo += seperator + v : memo
    }, "").split(seperator);

    console.log(filters)
    return filters
  }

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
        
      }
    },

    created() {
      this.value = initVal(this.fields.length)
    },
    
    methods: {
      showSelect(index) {
        
      }
    }
  }
</script>
