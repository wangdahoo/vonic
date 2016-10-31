<template>
  <div von-app>
    <navbar></navbar>
    <router-view transition="view" class="view"></router-view>
  </div>

  <div class="backdrop"></div>

  <modal v-ref:modal></modal>

  <alert v-ref:alert></alert>
  <alert-ios v-ref:alert_ios></alert-ios>

  <confirm v-ref:confirm></confirm>
  <confirm-ios v-ref:confirm_ios></confirm-ios>

  <loading v-ref:loading></loading>
</template>

<script>
  import Vue from 'vue'
  import VueRouter from 'vue-router'
  Vue.use(VueRouter)

  import Navbar from './Navbar.vue'
  import { Alert, AlertIOS, Confirm, ConfirmIOS } from '../popup'
  import { Modal } from '../modal'
  import { Loading } from '../loading'

  export default {
    components: {
      Navbar,
      Alert,
      'AlertIos': AlertIOS,
      Confirm,
      'ConfirmIos': ConfirmIOS,
      Modal,
      Loading
    },

    data() {
      return {
        gradeClass: 'grade-a'
      }
    },

    ready() {
      // grade-a for ios, grade-b for android & other
      if (utils.is_ios_device()) {
        this.gradeClass = 'grade-a'
      } else {
        this.gradeClass = 'grade-b'
      }
      document.querySelector('body').className = this.gradeClass

      window.$alert = this.$refs.alert
      window.$alert_ios = this.$refs.alert_ios
      window.$confirm = this.$refs.confirm
      window.$confirm_ios = this.$refs.confirm_ios
      window.$loading = this.$refs.loading
      window.$vonicModal = this.$refs.modal
    }
  }
</script>
