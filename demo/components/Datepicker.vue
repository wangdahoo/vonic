<template>
  <div class="page has-navbar" v-nav="{title: '日期选择器', showBackButton: true}">
    <div class="page-content padding-top">
      <datepicker v-model="myDate" label="生日" date-format="yyyy/mm/dd"></datepicker>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        myDate: '2016-12-01'
      }
    }
  }
</script>
