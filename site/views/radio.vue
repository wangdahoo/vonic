<template>
  <div class="view-container">
    <von-header title="Radio">
    </von-header>

    <div class="page">
      <von-radio :options="gender"></von-radio>
    </div>
  </div>
</template>
<style lang="scss" scoped>


</style>
<script>
  import VonHeader from '../../src/components/von-header.vue'
  import VonRadio from '../../src/components/von-radio/index.vue'

  export default{
    components: {
      VonHeader,
      VonRadio
    },

    data(){
      return {
        gender: [{
          text: 'Male'
        },{
          text: 'Female'
        }]
      }
    },

    methods: {

    }
  }
</script>
