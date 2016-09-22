<template>
  <div class="cells">
    <div class="row">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
  @import "../scss/variables";
  @import "../scss/mixins";

  .cells {
    @include thin-border-custom($default-border-color, 0, top);

    &:last-of-type {
      margin-bottom: 10px;
    }

    background-color: #FFF;

    .row {
      padding: 0;

      @include thin-border-custom($default-border-color, 0, bottom);

      .col {
        margin: 0;
        padding: 0;
        text-align: center;
        @include thin-border-custom($default-border-color, 0, right);
        &:last-of-type {
          border-right-width: 0;
        }
      }
    }
  }
</style>
