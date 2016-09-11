<template>
  <div class="view-container">
    <von-header title="Login">
    </von-header>
    <div class="page">

      <h1 class="text-center">
        <i class="icon ion-ionic positive"></i>
      </h1>

      <div class="list login-form">
        <label class="item item-input">
          <input type="text" placeholder="Username" v-model="username">
        </label>
        <label class="item item-input">
          <input type="password" placeholder="Password" v-model="password">
        </label>
      </div>

      <div class="padding">
        <button class="button button-positive button-block" @click="login(username, password)">
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
        username: 'admin',
        password: 'admin',
        tips: 'Use \'admin\' as username & password.'
      }
    },

    methods: {
      login(username, password) {
        console.log(username, password);
      }
    }
  }
</script>

