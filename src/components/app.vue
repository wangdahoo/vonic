<template>
  <div von-app>
    <router-view transition="view" class="view"></router-view>

    <div class="backdrop"></div>

    <alert v-ref:alert></alert>
    <alert-ios v-ref:alert_ios></alert-ios>
    <confirm v-ref:confirm></confirm>
  </div>
</template>

<script>
  import { Alert, AlertIOS, Confirm } from './popup'

  export default {
    components: {
      Alert,
      'AlertIos': AlertIOS,
      Confirm
    },

    ready() {
      window.$alert = this.$refs.alert
      window.$alert_ios = this.$refs.alert_ios
      window.$confirm = this.$refs.confirm
    }
  }
</script>
