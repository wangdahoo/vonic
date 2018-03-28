<template>
  <div class="list list-ios von-checkbox">
    <div class="item item-borderless item-icon-left" v-for="(option, i) in options">
      <hairline-top v-if="i > 0"></hairline-top>

      <input type="checkbox" :name="checkboxName" :id="checkboxName + '-' + i"
        v-model="v" :value="i" @click="onClick(i)" hidden>
      <span v-text="option"></span>
      <i class="icon ion-ios-checkmark"
        :class="{
          'grey': v.indexOf(i) <= -1,
          'assertive': v.indexOf(i) > -1 && theme == 'assertive',
          'positive': v.indexOf(i) > -1 && theme == 'positive',
          'balanced': v.indexOf(i) > -1 && theme == 'balanced',
          'energized': v.indexOf(i) > -1 && theme == 'energized',
          'calm': v.indexOf(i) > -1 && theme == 'calm',
          'royal': v.indexOf(i) > -1 && theme == 'royal',
          'dark': v.indexOf(i) > -1 && theme == 'dark'
        }"
      >
      </i>

      <hairline-bottom v-if="i < options.length - 1"></hairline-bottom>
    </div>
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
      options: {
        type: Array,
        required: true
      },

      value: {
        type: [Array, Number],
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
        checkboxName: 'von-checkbox-' + Math.random().toString(36).substring(3, 6)
      }
    },

    methods: {
      onClick(i) {
        let index = this.v.indexOf(i)
        if (index == -1) {
          this.v.push(i)
        } else {
          this.v.splice(index, 1)
        }
        this.v.sort()
      }
    }
  }
</script>
