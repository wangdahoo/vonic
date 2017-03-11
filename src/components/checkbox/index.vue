<template>
  <div class="list list-ios von-checkbox">
    <label class="item item-borderless item-icon-right"
           v-for="(option, i) in options">
      <hairline-top v-if="i > 0"></hairline-top>

      <input type="checkbox" :name="checkboxName" :id="checkboxName + '-' + i"
        v-model="v" :value="i" @click="onClick(i)">
      <span v-text="option"></span>
      <i
        :class="{
          'icon ion-ios-checkmark-empty assertive': v.indexOf(i) > -1 && theme == 'assertive',
          'icon ion-ios-checkmark-empty positive': v.indexOf(i) > -1 && theme == 'positive',
          'icon ion-ios-checkmark-empty balanced': v.indexOf(i) > -1 && theme == 'balanced',
          'icon ion-ios-checkmark-empty energized': v.indexOf(i) > -1 && theme == 'energized',
          'icon ion-ios-checkmark-empty calm': v.indexOf(i) > -1 && theme == 'calm',
          'icon ion-ios-checkmark-empty royal': v.indexOf(i) > -1 && theme == 'royal',
          'icon ion-ios-checkmark-empty dark': v.indexOf(i) > -1 && theme == 'dark'
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
      v: function () {
        return this.value
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
