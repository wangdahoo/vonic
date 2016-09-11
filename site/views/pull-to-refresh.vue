<template>
  <div class="view-container">
    <von-header title="Pull to Refresh">
    </von-header>

    <von-page>
      Page Content
    </von-page>

  </div>
</template>
<style lang="scss" scoped>

</style>
<script>
  import VonHeader from '../../src/components/von-header.vue'
  import VonPage from '../../src/components/page'

  export default{
    components: {
      VonHeader,
      VonPage
    },

    data(){
      return {}
    },

    methods: {}
  }
</script>
