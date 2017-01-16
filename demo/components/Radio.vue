<template>
  <div class="page has-navbar" v-nav="{title: '单选框', showBackButton: true}">

    <div class="page-content">
      <div class="item item-divider">
        选择性别:
      </div>

      <von-radio :options="genderOptions" v-model="gender"></von-radio>

      <p class="padding">
        option index: {{ gender }}<br>
        option text: {{ genderOptions[gender] }}
      </p>
    </div>

  </div>
</template>
<script>
  export default{
    data(){
      return {
        gender: 0,
        genderOptions: ["男", "女"]
      }
    }
  }
</script>
