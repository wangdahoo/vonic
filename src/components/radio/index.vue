<template>
  <div class="list von-radio">
    <label class="item item-borderless item-icon-left"
           v-for="(option, i) in options" @click="onClick(i)"
    >
      <hairline-top v-if="i > 0"></hairline-top>
      <input type="radio" :name="radioId" v-model="v" :value="i" @click="onClick(i)" hidden>
      <span v-text="option"></span>
      <i
        class="icon"
        :class="{
          'ion-android-radio-button-off grey': v != i,
          'ion-android-radio-button-on assertive': v == i && theme == 'assertive',
          'ion-android-radio-button-on positive': v == i && theme == 'positive',
          'ion-android-radio-button-on balanced': v == i && theme == 'balanced',
          'ion-android-radio-button-on energized': v == i && theme == 'energized',
          'ion-android-radio-button-on calm': v == i && theme == 'calm',
          'ion-android-radio-button-on royal': v == i && theme == 'royal',
          'ion-android-radio-button-on dark': v == i && theme == 'dark'
        }"
      >
      </i>
      

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
      v: {
        get:function(){
          return this.value
        },
        set:function(){}
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
