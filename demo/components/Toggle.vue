<template>
  <div class="page has-navbar" v-nav="{title: '开关按钮', showBackButton: true}">
    <div class="page-content padding-top">
      <von-toggle :text="toggleText" :value.sync="pushNotification"></von-toggle>
      <div class="item item-divider">开关状态: <span>{{ pushNotification ? '开启' : '关闭' }}</span></div>

      <div class="item item-divider">其他主题色</div>
      <von-toggle text="assertive" theme="assertive" :value="true"></von-toggle>
      <von-toggle text="positive" theme="positive" :value="true"></von-toggle>
      <von-toggle text="energized" theme="energized" :value="true"></von-toggle>
      <von-toggle text="calm" theme="calm" :value="true"></von-toggle>
      <von-toggle text="dark" theme="dark" :value="true"></von-toggle>
    </div>

  </div>
</template>
<script>
  export default{
    data(){
      return {
        toggleText: "是否开启推送",
        pushNotification: true
      }
    }
  }
</script>
