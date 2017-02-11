<template>
  <hairline-item class="range">
    <slot name="text-left">
      <span v-text="min"></span>
    </slot>

    <input type="range" :min="min" :max="max" :value="v" @change="onChange($event.target.value)">

    <slot name="text-right">
      <span v-text="max"></span>
    </slot>
  </hairline-item>
</template>
<script>
  import HairlineItem from '../list/HairlineItem'

  export default {
    components: {
      HairlineItem
    },

    props: {
      value: Number,
      min: Number,
      max: Number
    },

    computed: {
      v: function () {
        return this.value
      }
    },

    methods: {
      onChange(value) {
        this.v = value
        this.$emit('input', parseInt(value))
      }
    }
  }
</script>
