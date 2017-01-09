<template>
  <div class="page has-navbar" v-nav="{title: '计数器', showBackButton: true}">
    <div class="page-content">
      <div class="item item-divider">
        单独使用：
      </div>
      <div class="padding">
        <counter style="width: 200px;" :value.sync="cnt"></counter>
      </div>

      <div class="item item-divider">
        列表布局组件内：
      </div>
      <list>
        <item>
          购买数量：{{ qty }} 件
          <counter class="item-counter" theme="energized" :value.sync="qty"></counter>
        </item>
      </list>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .item-counter {
    width: 160px;
    position: absolute;
    top: 10px;
    right: 10px;
  }
</style>
<script>
  export default{
    data(){
      return {
        cnt: 0,
        qty: 0
      }
    }
  }
</script>
