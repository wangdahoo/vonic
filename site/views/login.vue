<template>
  <div class="view-container">
    <von-header title="登录" show-back-button="false">
    </von-header>
    <div class="page">

      <h1 class="text-center">
        <i class="icon ion-ionic dark"></i>
      </h1>

      <div class="list login-form">
        <label class="item item-input">
          <input type="tel" placeholder="手机">
        </label>
        <label class="item item-input">
          <input type="password" placeholder="密码">
        </label>
      </div>

      <div class="padding">
        <button class="button button-positive button-block" @click="login()">
          登录
        </button>
      </div>

    </div>
  </div>
</template>
<style lang="scss" scoped>
  .page {
    height: 100%;
    background-color: #f4f4f4;
    padding: 54px 0 0 0;
  }

  h1 {
    font-size: 40px;
  }

  .login-form {
    margin-bottom: 0;
  }
</style>
<script>
  import VonHeader from '../../src/components/von-header.vue'

  export default{
    components: {
      VonHeader
    },

    data(){
      return {
        msg: 'please login'
      }
    },

    methods: {
      login() {
        $router.go('dashboard')
      }
    }
  }
</script>

