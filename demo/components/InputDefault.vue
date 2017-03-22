<template>
  <div class="page" v-nav="{title: '默认输入框', showBackButton: true}">

    <div class="page-content padding-top">

      <!-- type: text, password, email, tel -->
      <div class="item item-divider">
        有标签: {{username}}
      </div>
      <von-input type="text" v-model="username" placeholder="用户名" label="用户名"></von-input>
      <von-input type="password" v-model="password" placeholder="密码" label="密码" style="margin-bottom: 5px;"></von-input>

      <div class="padding">
        <button class="button button-positive button-block">确认</button>
      </div>

      <div class="item item-divider">
        无标签: {{tel}}
      </div>
      <von-input type="tel" v-model="tel" placeholder="手机"></von-input>

    </div>
  </div>
</template>
<script>
  export default{
    data() {
      return {
        username: '',
        password: '',
        tel: ''
      }
    }
  }
</script>
