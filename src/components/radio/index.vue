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
<style lang="scss" scoped>
  @import "../scss/variables";
  @import "../scss/mixins";

  .von-radio {
    padding-left: 16px;
    background-color: #fff;
    padding-top: 2px;

    .item {
      padding: 15px 15px 15px 30px;
      font-size: 14px;
      line-height: 20px;

      &:first-of-type, &:last-of-type {
        border: none;
      }
    }

    .item-icon-left {
      .icon {
        font-size: 24px;
        left: -6px;

        &.grey {
          color: #BBB;
        }
      }
    }

    .ion-ios-circle-outline {
      color: #ccc;
    }

    input[type=radio] {
      position: absolute;
      top: -50000px;
      left: -50000px;
    }
  }
</style>
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
