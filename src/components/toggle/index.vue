<template>
  <div class="item item-toggle von-toggle">
    {{ text }}
    <label class="toggle" @click="onToggle()">
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
      }
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
      onToggle() {
        this.value = document.getElementById(this.toggleId).checked
      }
    }
  }
</script>
