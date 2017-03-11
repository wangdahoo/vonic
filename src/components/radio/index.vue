<template>
  <div class="list von-radio">
    <label class="item item-borderless item-icon-left"
           v-for="(option, i) in options"
    >
      <hairline-top v-if="i > 0"></hairline-top>
      <input type="radio" :name="radioId" v-model="v" :value="i" @click="onClick(i)">
      <i
        class="icon ion-ios-checkmark"
        :class="{
          'grey': v != i,
          'assertive': v == i && theme == 'assertive',
          'positive': v == i && theme == 'positive',
          'balanced': v == i && theme == 'balanced',
          'energized': v == i && theme == 'energized',
          'calm': v == i && theme == 'calm',
          'royal': v == i && theme == 'royal',
          'dark': v == i && theme == 'dark'
        }"
      >
      </i>
      <span v-text="option"></span>

      <hairline-bottom v-if="i < options.length - 1"></hairline-bottom>
    </label>
  </div>
</template>
<script>
  import HairlineTop from '../list/HairlineTop'
  import HairlineBottom from '../list/HairlineBottom'

  export default {
    components: {
      HairlineTop,
      HairlineBottom
    },

    props: {
      options: {
        type: Array,
        required: true
      },

      value: {
        type: [Number, String],
        required: true
      },

      theme: {
        type: String,
        default: 'assertive'
      }
    },

    computed: {
      v: function () {
        return this.value
      }
    },

    data() {
      return {
        radioId: 'von-radio-' + Math.random().toString(36).substring(3, 6)
      }
    },

    methods: {
      onClick(value) {
        this.v = value
        this.$emit('input', value)
      }
    }
  }
</script>
