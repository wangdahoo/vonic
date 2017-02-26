<template>
  <div class="page has-navbar" v-nav="{hideNavbar: true}">
    <div class="page-content">

      <div class="logo">
        <img src="../assets/vonic.svg" width="80" height="80"/>
      </div>

      <div class="text-center code-name">VONIC</div>

      <div class="text-center code-desc">
        Mobile UI Components<br>based on Vue.js and ionic CSS
      </div>

      <div class="list list-borderless">
        <hl-item class="item-icon-left item-icon-right" @click.native="demo()">
          <i class="icon ion-heart assertive"></i>
          <span class="item-note">Demo</span>
          <i class="icon ion-ios-arrow-right"></i>
        </hl-item>

        <hl-item class="item-icon-left item-icon-right" @click.native="github()">
          <i class="icon ion-social-github"></i>
          <span class="item-note">GitHub</span>
          <i class="icon ion-ios-arrow-right"></i>
        </hl-item>

        <hl-item class="item-icon-left item-icon-right" @click.native="doc()">
          <i class="icon ion-ios-book positive"></i>
          <span class="item-note">Doc</span>
          <i class="icon ion-ios-arrow-right"></i>
        </hl-item>
      </div>

      <div class="vonic-stars">
        <iframe src="//ghbtns.com/github-btn.html?user=wangdahoo&repo=vonic&type=watch&count=true"
                allowtransparency="true"
                frameborder="0"
                scrolling="0"
                width="120"
                height="20">
        </iframe>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  .logo {
    width: 100%;
    text-align: center;
    img {
      margin: 30px auto 0 auto;
    }
  }

  .code-name {
    // font-family: "Monoton", sans-serif;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 24px;
    line-height: 24px;
    color: #47B584;
    margin-bottom: 10px;
    padding: 5px 0 0 2px;
  }

  .code-desc {
    color: #999;
    margin: 5px auto 15px auto;
    // font-family: "Josefin Sans", sans-serif;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }

  .vonic-stars {
    position: absolute;
    top: 10px;
    left: 10px;
    body {
      text-align: center;
    }
  }

  *::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
</style>
<script>
  export default {
    data() {
      return {}
    },

    methods: {
      demo() {
        $router.forward({ path: '/home' })
      },

      github() {
        location.href = 'https://github.com/wangdahoo/vonic'
      },

      doc() {
        location.href = 'https://wangdahoo.github.io/vonic-doc/zh-CN/'
      }
    }
  }
</script>
