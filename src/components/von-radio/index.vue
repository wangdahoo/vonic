<template>
  <div class="list von-radio-list">
    <von-radio-option v-for="option in options"
                      :text="option.text"
                      :checked="checked == $index"
                      @click="onOptionClick($index)">
    </von-radio-option>
  </div>
</template>
<style lang="scss">
  .von-radio-list {

  }
</style>
<script>
  import _ from 'lodash'
  import VonRadioOption from './von-radio-option.vue'

  export default{
    components: {
      VonRadioOption
    },

    props: {
      options: {
        type: Array,
        default() {
          return [];
        }
      },
      checked: {
        type: [String, Number],
        default() {
          return 0
        }
      }
    },

    methods: {
      onOptionClick($index) {
        this.checked = $index;
      }
    }
  }
</script>
