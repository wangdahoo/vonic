<template>
  <div class="page has-header page-floating-label">
    <von-header title="Floating Label"></von-header>

    <div class="page-content padding-top">

      <von-input type="text" :value.sync="username" placeholder="用户名" label="用户名" floating-label="true"></von-input>
      <von-input type="password" :value.sync="password" placeholder="密码" label="密码" floating-label="true"></von-input>

      <div class="padding">
        <button class="button button-positive button-block">确认</button>
      </div>

    </div>
  </div>
</template>

<script>
  import {Page, VonHeader, VonInput} from 'vonic'

  export default{
    components: {
      Page,
      VonHeader,
      VonInput
    },

    data(){
      return {
        username: '',
        password: ''
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
