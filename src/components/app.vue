<template>
  <div von-app>
    <router-view transition="view" class="view"></router-view>

    <div class="backdrop"></div>

    <alert v-ref:alert></alert>
    <alert-ios v-ref:alert_ios></alert-ios>
    <confirm v-ref:confirm></confirm>
    <confirm-ios v-ref:confirm_ios></confirm-ios>
  </div>
</template>

<script>
  import { Alert, AlertIOS, Confirm, ConfirmIOS } from './popup'

  export default {
    components: {
      Alert,
      'AlertIos': AlertIOS,
      Confirm,
      'ConfirmIos': ConfirmIOS
    },

    ready() {
      window.$alert = this.$refs.alert
      window.$alert_ios = this.$refs.alert_ios
      window.$confirm = this.$refs.confirm
      window.$confirm_ios = this.$refs.confirm_ios
    }
  }
</script>
