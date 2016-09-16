import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

class VonicApp {
  constructor(el, routers, defaultRouterUrl) {
    this.el = el
    this.routers = routers
    this.defaultRouterUrl = defaultRouterUrl
  }

  start() {
    let App = Vue.extend();
    let router = new VueRouter({
      history: true
    })
    router.map(this.routers)

    router.redirect({
      '*': this.defaultRouterUrl
    })
    router.start(App, this.el)

    window.$router = router
  }

  /**
   * 控制pageTransition方向
   * @param direction
   *  - forward
   *  - back
   */
  nextTransition(direction) {
    let el = document.querySelector(this.el)
    switch (direction) {
      case 'back':
        el.className = 'transition-reverse'
        setTimeout(() => {
          el.className = ''
        }, 500)
        break
      default:
        el.className = ''
    }

    return el.className ? 'back' : 'forward'
  }
}

import Storage from './services/storage'

export default {
  install(Vue, options) {
    Vue.transition('view', {enterClass: 'view-enter', leaveClass: 'view-leave'})

    const el = options.el
    const routers = options.routers
    const defaultRouterUrl = options.defaultRouterUrl

    let app = new VonicApp(el, routers, defaultRouterUrl)
    app.start()

    window.$vonic = app
    window.$storage = Storage

    // 类似的这种兼容性代码, 暂时放在这个位置
    // for iOS 10, users can now pinch-to-zoom even when a website sets user-scalable=no in the viewport.
    document.documentElement.addEventListener('touchstart', function (event) {
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    }, false);
  }
}
