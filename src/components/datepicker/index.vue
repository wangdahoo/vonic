<template>
  <div von-datepicker class="item item-borderless item-input" @click="showPicker()">
    <span v-if="label != ''" class="input-label" v-text="label"></span>
    <input ref="datetime" type="datetime" :value="v">

    <span v-text="formatedDate"></span>

    <div class="hairline-top"></div>
    <div class="hairline-bottom"></div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import Picker from './Picker.vue'
  import channel from './channel'

  const formatDate = (value, format) => {
    switch(format) {
      case 'yyyy/mm/dd':
        return value.split('-').join('/')
        break
      default:
        return value
    }
  }

  export default {
    props: {
      label: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default: ''
      },
      value: {
        type: String,
        default: ''
      },
      dateFormat: {
        type: String,
        default: 'yyyy-mm-dd',
        validator: function (value) {
          return ['yyyy-mm-dd', 'yyyy/mm/dd'].indexOf(value) > -1
        }
      }
    },

    computed: {
      v: function () {
        return this.value
      }
    },

    data() {
      return {
        picker: undefined, // picker vm
        formatedDate: '',
      }
    },

    mounted() {
      this.formatedDate = formatDate(this.value, this.dateFormat)
    },

    methods: {
      showPicker() {
        let el = document.createElement('div')
        el.setAttribute('von-picker', '')
        document.body.appendChild(el)

        let PickerComponent = Vue.extend(Picker)
        this.picker = new PickerComponent({
          data: {
            value: this.v
          }
        }).$mount('[von-picker]')

        channel.$on('PickerOkEvent', (value) => {
          this.v = value
          console.log('datetime input =>', this.$refs.datetime)
          this.$refs.datetime.value = value
          this.$emit('input', value)

          this.formatedDate = formatDate(value, this.dateFormat)
          if (this.picker)
            this.picker.hide()

          channel.$off('PickerOkEvent')
        })

        this.picker.show()
      }
    }
  }
</script>
