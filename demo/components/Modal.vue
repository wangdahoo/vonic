<template>
  <div class="page has-header">
    <von-header title="模态窗"></von-header>

    <div class="page-content">
      <div class="padding">
        <button class="button button-positive button-block" @click="showModal()">显示模态窗</button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>

</style>
<script>
  import {Page, VonHeader} from 'vonic'
  import MyModal from './MyModal'

  export default{
    components: {
      Page,
      VonHeader,
    },

    data(){
      return {
      }
    },

    methods: {
      showModal() {
        $vonicModal.fromComponent(MyModal)
      }
    }
  }
</script>
