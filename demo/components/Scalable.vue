<template>
  <div class="page has-navbar page-scalable" v-nav="{title: '缩放', showBackButton: true, onBackButtonClick: back}">
    <div class="page-content">
      <scalable width="100%" height="100" style="background-color: #FFF;">
        <p>
          Font Size = 16px (相当于8px)
        </p>
      </scalable>
    </div>
  </div>
</template>
<style lang="scss">
  .page-scalable {
    p {
      text-align: center;
      font-size: 16px;
      margin-top: 20px;
    }
  }

</style>
<script>
  import { Scalable } from 'vonic'

  export default {
    components: {
      Scalable
    },

    data(){
      return {

      }
    },

    methods: {
      back() {
        $router.back({path: '/'})
      }
    }
  }
</script>
