<template>
  <label class="item item-icon-right">
    <span>{{ text }}</span>
    <i class="icon" :class="{'ion-ios-circle-outline': !checked, 'ion-ios-checkmark assertive': checked}"></i>
  </label>
</template>
<style lang="scss" scoped>
  .item {
    padding: 10px 15px;
    font-size: 14px;
    line-height: 20px;
  }

  .item-icon-right {
    .icon {
      font-size: 28px;
      right: 6px;
    }
  }

  .ion-ios-circle-outline {
    color: #ccc;
  }
</style>
<script>
  export default{
    props: {
      text: String,
      checked: {
        type: Boolean,
        default() {
          return false
        }
      }
    }
  }
</script>
