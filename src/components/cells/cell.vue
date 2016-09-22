<template>
  <div class="{{ cssClass }}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      class: String
    },

    data() {
      return {
        cssClass: this.class ? 'col ' + this.class : 'col'
      }
    }
  }
</script>
