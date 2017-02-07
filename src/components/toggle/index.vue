<template>
  <div class="item item-toggle von-toggle" thin-border>
    <span v-text="text"></span>
    <label class="toggle" :class="themeClass()" @click="onToggle()">
      <input type="checkbox" ref="checkbox">

      <div class="track">
        <div class="handle"></div>
      </div>
    </label>
  </div>
</template>
<style lang="scss" scoped>
  .von-toggle {
    height: 50px;
  }
</style>
<script>
  export default{
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

    mounted() {
      this.$refs.checkbox.checked = this.value
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

      onToggle() {
        this.$emit('input', this.$refs.checkbox.checked)
      }
    }
  }
</script>
