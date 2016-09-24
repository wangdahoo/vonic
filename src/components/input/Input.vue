<template>
  <label class="item item-input" :class="{'item-floating-label': floatingLabel == 'true'}">
    <span v-if="label != ''" class="input-label" :class="{'has-input': floatingLabel == 'true' && !!value}">{{label}}</span>
    <input type="{{type}}" placeholder="{{ placeholder }}" v-model="value">
  </label>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      validator(val) {
        return val == 'text' || val == 'password' || val == 'email' || val == 'tel'
      },
      default: 'text'
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    value:{
      type: [String, Number],
      required: true
    },

    floatingLabel: {
      type: String,
      default: 'false'
    }
  }
}
</script>

<style lang="scss" scoped>

  @mixin placeholder($color: $input-color-placeholder, $text-indent: 0) {
    &::-moz-placeholder { // Firefox 19+
      color: $color;
    }
    &:-ms-input-placeholder {
      color: $color;
    }
    &::-webkit-input-placeholder {
      color: $color;
      // Safari placeholder margin issue
      text-indent: $text-indent;
    }
  }

  .item-input {
    padding: 13px 15px;

    .input-label {
      line-height: 20px;
    }

    input {
      font-size: 16px;

      &::-webkit-input-placeholder {
        line-height: 22px;
      }
    }
  }

  .item-floating-label {
    background: #FFF;
    .input-label {
      font-size: 16px;
      line-height: 20px;
      font-weight: 400;
    }
  }
</style>
