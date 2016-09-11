<template>
  <div class="view-container">
    <von-header title="Radio">
    </von-header>

    <div class="page">
      <von-radio :options="genderOptions" :value.sync="gender"></von-radio>

      <p class="padding">
        checked: {{ gender }}
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>


</style>
<script>
  import VonHeader from '../../src/components/von-header.vue'
  import VonRadio from '../../src/components/von-radio.vue'

  export default{
    components: {
      VonHeader,
      VonRadio
    },

    data(){
      return {
        gender: 0,

        genderOptions: ["Male", "Female"]
      }
    }
  }
</script>
