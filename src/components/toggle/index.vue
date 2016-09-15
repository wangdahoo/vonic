<template>
  <div class="item item-toggle von-toggle">
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
  import uuid from 'node-uuid'

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
        toggleId: 'toggle-' + uuid.v4().substr(0, 8)
      }
    },

    ready() {
      document.getElementById(this.toggleId).checked = this.value
    },

    methods: {
      toggleClass() {
        console.log('toggle toggle-' + this.theme)
        return 'toggle toggle-' + this.theme
      },

      onToggle() {
        this.value = document.getElementById(this.toggleId).checked
      }
    }
  }
</script>
