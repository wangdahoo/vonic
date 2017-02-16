<template>
  <div class="page has-navbar" v-nav="{title: '开关按钮', showBackButton: true}">
    <div class="page-content padding-top">
      <von-toggle :text="toggleText" v-model="pushNotification"></von-toggle>
      <div class="item item-divider">开关状态: <span>{{ pushNotification ? '开启' : '关闭' }}</span></div>

      <div class="padding">
        <div class="button button-positive button-block" @click="triggerToggle()">手动切换</div>
      </div>

      <div class="item item-divider">其他主题色</div>
      <von-toggle text="assertive" theme="assertive" v-model="values[0]"></von-toggle>
      <von-toggle text="positive" theme="positive" v-model="values[1]"></von-toggle>
      <von-toggle text="energized" theme="energized" v-model="values[2]"></von-toggle>
      <von-toggle text="calm" theme="calm" v-model="values[3]"></von-toggle>
      <von-toggle text="dark" theme="dark" v-model="values[4]"></von-toggle>

    </div>

  </div>
</template>
<script>
  export default {
    data(){
      return {
        toggleText: "是否开启推送",
        pushNotification: true,

        values: [true, true, true, true, true]
      }
    },

    methods: {
      triggerToggle() {
        this.pushNotification = !this.pushNotification
      }
    }
  }
</script>
