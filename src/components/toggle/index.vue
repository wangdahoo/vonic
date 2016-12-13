<template>
  <div class="item item-toggle von-toggle" thin-border>
    {{ text }}
    <label class="{{ toggleClass() }}" @click="onToggle()">
      <input type="checkbox" id="{{ toggleId }}">
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

    data() {
      return {
        toggleId: 'von-toggle-' + Math.random().toString(36).substring(3, 8)
      }
    },

    ready() {
      document.getElementById(this.toggleId).checked = this.value
    },

    methods: {
      toggleClass() {
        return 'toggle toggle-' + this.theme
      },

      onToggle() {
        this.value = document.getElementById(this.toggleId).checked
      }
    }
  }
</script>
