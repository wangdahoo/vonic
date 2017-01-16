<template>
  <div class="list von-checkbox" thin-border>
    <label class="item item-icon-right"
           v-for="(option, i) in options">
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
    </label>
  </div>
</template>
<style lang="scss" scoped>
  @import "../scss/variables";

  .von-checkbox {
    .item-icon-right {
      .icon {
        font-size: 36px;
        right: 5px;
      }
    }

    input[type=checkbox] {
      position: absolute;
      top: -50000px;
      left: -50000px;
    }
  }
</style>
<script>
  export default{
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
