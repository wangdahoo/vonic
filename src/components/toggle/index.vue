<template>
  <div class="item item-borderless item-toggle von-toggle">
    <hairline-top></hairline-top>
    <span v-text="text"></span>
    <label class="toggle" :class="themeClass()">
      <input v-if="value" type="checkbox" ref="checkbox" :value="value" checked
        @click="onToggle($event.target.checked)">
      <input v-if="!value" type="checkbox" ref="checkbox" :value="value"
        @click="onToggle($event.target.checked)">

      <div class="track">
        <div class="handle"></div>
      </div>
    </label>
    <hairline-bottom></hairline-bottom>
  </div>
</template>
<script>
  import HairlineTop from '../list/HairlineTop'
  import HairlineBottom from '../list/HairlineBottom'

  export default{
    components: {
      HairlineTop,
      HairlineBottom
    },

    props: {
      text: {
        type: String,
        required: true
      },
      value: {
        type: Boolean,
        required: true
      },
      theme: {
        type: String,
        default: 'balanced'
      },
    },

    methods: {
      themeClass() {
        return {
          'toggle-assertive': this.theme == 'assertive',
          'toggle-positive': this.theme == 'positive',
          'toggle-balanced': this.theme == 'balanced',
          'toggle-energized': this.theme == 'energized',
          'toggle-calm': this.theme == 'calm',
          'toggle-royal': this.theme == 'royal',
          'toggle-stable': this.theme == 'stable',
          'toggle-dark': this.theme == 'dark'
        }
      },

      onToggle(value) {
        this.$emit('input', value)
      }
    }
  }
</script>
