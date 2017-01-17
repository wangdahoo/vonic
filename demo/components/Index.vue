<template>
    <div class="page" v-nav="{ hideNavbar: true }">
      <div class="page-content">

        <div class="logo">
          <img src="../assets/vonic.svg" width="80" height="80"/>
        </div>

        <div class="text-center code-name">Vonic</div>

        <div class="text-center vonic-stars">
          <iframe src="//ghbtns.com/github-btn.html?user=wangdahoo&repo=vonic&type=watch&count=true"
                  allowtransparency="true"
                  frameborder="0"
                  scrolling="0"
                  width="120"
                  height="20">
          </iframe>
        </div>

        <div class="text-center code-desc">
          Mobile UI Components<br>based on Vue.js and ionic CSS
        </div>

        <div class="list" thin-border>
          <div class="item item-icon-left item-icon-right" @click="toDemo()">
            <i class="icon ion-heart assertive"></i>
            <span class="item-note">Demo</span>
            <i class="icon ion-ios-arrow-right"></i>
          </div>

          <div class="item item-icon-left item-icon-right" @click="toGitHub()">
            <i class="icon ion-social-github"></i>
            <span class="item-note">GitHub</span>
            <i class="icon ion-ios-arrow-right"></i>
          </div>

          <div class="item item-icon-left item-icon-right" @click="toDoc()">
            <i class="icon ion-ios-book positive"></i>
            <span class="item-note">Doc</span>
            <i class="icon ion-ios-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
</template>
<style lang="scss" scoped>
  .logo {
    width: 100%;
    text-align: center;
    img {
      margin: 30px auto 0 auto;
    }
  }

  .code-name, .code-desc {
    font-family: Candara, Calibri, Segoe, Segoe UI, Optima, Arial, sans-serif;
  }

  .code-name {
    font-size: 24px;
    line-height: 24px;
    color: #47B584;
    margin-bottom: 10px;
    transform: translate3d(2px,0,0);
    -webkit-transform: translate3d(2px,0,0);
  }

  .code-desc {
    color: #999;
    margin: 5px auto 15px auto;
  }

  .vonic-stars {
    padding-left: 27px;
    body {
      text-align: center;
    }
  }
</style>
<script>
  export default {
    data() {
      return {}
    },

    methods: {
      toDemo() {
        $router.forward({ path: '/home' })
      },

      toGitHub() {
        location.href = 'https://github.com/wangdahoo/vonic'
      },

      toDoc() {
        location.href = 'https://wangdahoo.github.io/vonic-doc/'
      }
    }
  }
</script>
