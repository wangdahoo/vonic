<template>
  <div class="list von-radio" thin-border>
    <label class="item item-icon-left"
           v-for="(index, option) in options">
      <input type="radio" name="{{ radioId }}" @click="onOptionClick(index)">
      <i class="{{ 'icon ion-ios-checkmark ' + (value == index ? theme : 'grey') }}"></i>
      <span>{{ option }}</span>
    </label>
  </div>
</template>
<style lang="scss" scoped>
  @import "../scss/variables";
  @import "../scss/mixins";

  .von-radio {
    padding-left: 16px;
    background-color: #fff;

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

  export default{
    props: {
      options: {
        type: Array,
        required: true
      },

      value: {
        type: Number,
        required: true
      },

      theme: {
        type: String,
        default: 'assertive'
      }
    },

    data() {
      return {
        radioId: 'von-radio-' + Math.random().toString(36).substring(3, 8)
      }
    },

    methods: {
      onOptionClick($index) {
        this.value = $index
      }
    }
  }
</script>
