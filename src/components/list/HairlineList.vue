<template>
  <div class="list list-borderless hl-list">
    <slot></slot>
  </div>
</template>
<style lang="scss">
  .hl-list {
    padding-top: 1px !important;

    &.hl-list-borderless, &.list-ios {
      .hl-item {
        &:first-of-type {
          .hairline-top:before {
            visibility: hidden;
          }
        }

        &:last-of-type {
          .hairline-bottom:after {
            visibility: hidden;
          }
        }
      }
    }
  }
</style>
