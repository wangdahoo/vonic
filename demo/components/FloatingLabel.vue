<template>
  <div class="page has-header page-floating-label">
    <von-header title="Floating Label"></von-header>

    <div class="page-content padding-top">

      <div class="item item-divider">输入文字试试:</div>

      <von-input type="text" :value.sync="username" placeholder="Username" label="Username" floating-label="true"></von-input>
      <von-input type="email" :value.sync="email" placeholder="Email" label="Email" floating-label="true"></von-input>
      <von-input type="tel" :value.sync="phone" placeholder="Phone" label="Phone" floating-label="true"></von-input>

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
        email: '',
        phone: ''
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
