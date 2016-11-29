<template>
  <div class="list von-list">
    <slot></slot>
  </div>
</template>
<style lang='scss'>
  @import "../scss/variables";
  @import "../scss/mixins";

  .von-list {
    padding-left: 16px;
    background-color: #fff;
    
    .item.von-item {
      &:first-of-type, &:last-of-type {
        border: none;
      }
    }
  }

  .item.von-item {
    min-height: 50px;
    padding: 15px 15px 15px 0;
    font-size: 14px;
    line-height: 20px;

    &[thin] {
      min-height: 36px;
      padding: 8px 8px 8px 0;
      font-size: 14px;
      line-height: 20px;
    }

    &.item-avatar {
      min-height: 80px;
      padding: 16px 16px 16px 58px;

      img:first-of-type {
        top: 16px;
        left: 0;
        min-width: 48px;
        min-height: 48px;
      }

      .title {
        font-size: 16px;
        line-height: 22px;
        margin-bottom: 6px;
      }

      .item-note {
        float: left;
      }
    }

    &.item-icon-right, &.item-icon-left {
      .icon {
        font-size: 21px;
        margin-right: -9px;
      }

      .item-note {
        margin-right: 15px;
      }
    }
  }

</style>
