<template>
  <div class="von-input-wrapper" :class="{'has-floating-label': floatingLabel == 'true'}">
    <label class="item item-input thin-border von-input" :class="{'item-floating-label': floatingLabel == 'true'}">
      <span v-if="label != ''" class="input-label" :class="{'has-input': floatingLabel == 'true' && !!value}" v-text="label"></span>
      <!-- text -->
      <input v-if="type == 'text'" type="text" :placeholder="placeholder" ref="input" :value="value"
        @compositionstart="compositionStart($event)"
        @compositionend="compositionEnd($event)"
        @input="input($event)"
        @focus="focus($event)"
        @blur="blur($event)"
      >

      <!-- password -->
      <input v-if="type == 'password'" type="password" :placeholder="placeholder" ref="input" :value="value"
        @input="updateValue($event.target.value)"
        @focus="focus($event)"
        @blur="blur($event)">

      <!-- email -->
      <input v-if="type == 'email'" type="email" :placeholder="placeholder" ref="input" :value="value"
        @input="updateValue($event.target.value)"
        @focus="focus($event)"
        @blur="blur($event)">

      <!-- tel -->
      <input v-if="type == 'tel'" type="tel" :placeholder="placeholder" ref="input" :value="value"
        @input="updateValue($event.target.value)"
        @focus="focus($event)"
        @blur="blur($event)">
    </label>

    <span class="input-clear" :class="{'active': showClearButton}" @click="clear()"></span>
  </div>
</template>
<script>
  import Vue from 'vue'

  let lock = false

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
        default: 'false',
        validator(val) {
          return val == 'true' || val == 'false'
        }
      }
    },

    data() {
      return {
        showClearButton: false
      }
    },

    methods: {
      clear() {
        this.$refs.input.value = ''
        this.$emit('input', '')
        this.showClearButton = false
      },

      updateValue(value) {
        this.$refs.input.value = value
        this.$emit('input', value)
      },

      input($event) {
        if (lock) {
          $event.preventDefault()
          return
        }

        let value = $event.target.value
        this.$refs.input.value = value
        this.$emit('input', value)
      },

      compositionStart($event) {
        lock = true
      },

      compositionEnd($event) {
        lock = false
        this.$emit('input', this.$refs.input.value)
      },

      focus($event) {
        this.showClearButton = true
      },

      blur($event) {
        this.showClearButton = false
      }
    },

    watch: {
      value: function (newValue) {
        this.showClearButton = !!newValue
      }
    }
  }
</script>
<style lang="scss" scoped>
  .von-input-wrapper {
    position: relative;

    &.has-floating-label {
      .input-clear {
        top: 14px + 28px;
      }
    }

    .von-input {
      height: 50px;
      padding: 13px 15px;
      position: relative;

      .input-label {
        font-size: 14px;
        line-height: 20px;
      }

      input {
        font-size: 14px;
      }

    }

    .input-clear {
      position: absolute;
      top: 14px;
      right: 9px;
      z-index: 3;

      width: 24px;
      height: 24px;
      background-image: url(../../assets/clear@3x.png);
      background-size: 12px 12px;
      background-repeat: no-repeat;
      background-position: 5px 5px;

      visibility: hidden;
      &.active {
        visibility: visible;
      }
    }

    .item-floating-label {
      height: 75px;
      background: #FFF;
      .input-label {
        padding-top: 2px;
        font-size: 16px;
        line-height: 20px;
        font-weight: 400;
      }
    }
  }
</style>
