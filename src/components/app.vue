<template>
  <div von-app>
    <router-view transition="view" class="view"></router-view>

    <div class="backdrop"></div>

    <alert v-ref:alert></alert>
    <confirm v-ref:confirm></confirm>
  </div>
</template>

<script>
  import { Alert, Confirm } from './popup'

  export default {
    components: {
      Alert,
      Confirm
    },

    ready() {
      window.$alert = this.$refs.alert
      window.$confirm = this.$refs.confirm
    }
  }
</script>
