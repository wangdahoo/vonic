<template>
  <div class="page has-navbar" v-nav="{title: '弹出', showBackButton: true}">
    <div class="page-content">

      <div class="row">
        <div class="col"></div>
        <div class="col">
          <button class="button button-positive button-block" id="btn-top" @click="onClicked()">上</button>
        </div>
        <div class="col"></div>
      </div>

      <div class="row">
        <div class="col"></div>
        <div class="col">
          <button class="button button-assertive button-block" id="btn-bottom">下</button>
        </div>
        <div class="col"></div>
      </div>

      <div class="row">
        <div class="col"></div>
        <div class="col">
          <button class="button button-balanced button-block" id="btn-left">左</button>
        </div>
        <div class="col"></div>
      </div>

      <div class="row">
        <div class="col"></div>
        <div class="col">
          <button class="button button-energized button-block" id="btn-right">右</button>
        </div>
        <div class="col"></div>
      </div>

      <div style="height: 1000px;"></div>

    </div>

    <popover direction="top" target="#btn-top">
      我在上面
    </popover>

    <popover direction="bottom" target="#btn-bottom">
      我在下面
    </popover>

    <popover direction="left" target="#btn-left">
      我在左边
    </popover>

    <popover direction="right" target="#btn-right">
      我在右边
    </popover>

  </div>
</template>
<style lang="scss" scoped>
  .row {
    margin: 0 auto;

    .col {
      padding: 0;
    }

    &:nth-of-type(1) {
      margin-top: 50px;
    }

    &:nth-of-type(2) {
      margin-bottom: 100px;
    }
  }

</style>
<script>
  export default{
    data() {
      return {
        username: ''
      }
    },

    methods: {
      onClicked() {
        console.log('button clicked')
      }
    }
  }
</script>
