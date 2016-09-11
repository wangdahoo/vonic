<template>
  <div class="view-container">
    <von-header title="Login" show-back-button="false">
    </von-header>
    <div class="page">

      <h1 class="text-center">
        <i class="icon ion-ionic positive"></i>
      </h1>

      <div class="list login-form">
        <label class="item item-input">
          <input type="tel" placeholder="Username">
        </label>
        <label class="item item-input">
          <input type="password" placeholder="Password">
        </label>
      </div>

      <div class="padding">
        <button class="button button-positive button-block" @click="login()">
          login
        </button>
      </div>

      <p>
        <i class="ion-ios-information"></i> {{ tips }}
      </p>

    </div>
  </div>
</template>
<style lang="scss" scoped>

  @import "../scss/variables";

  h1 {
    font-size: 48px;
  }

  .login-form {
    margin-bottom: 0;
  }

  p {
    margin: 0;
    color: $assertive;
    padding: 0 15px;
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
        tips: 'Use \'admin\' as username & password.'
      }
    },

    methods: {
      login() {
        $router.go('home')
      }
    }
  }
</script>

