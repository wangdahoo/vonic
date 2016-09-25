import Vue from 'vue'
import VueRouter from 'vue-router'
import FastClick from 'fastclick'
Vue.use(VueRouter)

import VonApp from './components/app'
import Storage from './services/storage'

class VonicApp {
  constructor(routers, defaultRouterUrl) {
    this.routers = routers
    this.defaultRouterUrl = defaultRouterUrl
  }

  start() {
    let App = Vue.extend(VonApp);
    let router = new VueRouter({
      history: false
    })
    router.map(this.routers)

    router.beforeEach(() => {
      // destroy modals
      $vonicModal.destroy()

      // save position
      let content = document.querySelector('.page-content')
      let scrollTop = content && content.scrollTop
      window.__last_page_position__ = Storage.get('von:last_page_position') || 0;
      Storage.set('von:last_page_position', scrollTop || 0)
    })

    router.afterEach(() => {
      Vue.nextTick(() => {
        let content = document.querySelectorAll('.page-content')[1]
        // console.log(content, window.__last_page_position__);
        if (content)
          content.scrollTop = window.__last_page_position__
      })
    })

    router.redirect({
      '*': this.defaultRouterUrl
    })

    router.start(App, 'von-app')

    window.$router = router
  }

  /**
   * 控制pageTransition方向
   * @param direction
   *  - forward
   *  - back
   */
  nextTransition(direction) {
    let el = document.querySelector('[von-app]')
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

export default {
  install(Vue, options) {
    Vue.transition('view', {enterClass: 'view-enter', leaveClass: 'view-leave'})

    const routers = options.routers
    const defaultRouterUrl = options.defaultRouterUrl

    let app = new VonicApp(routers, defaultRouterUrl)
    app.start()

    window.$vonic = app
    window.$storage = Storage

    // FastClick
    FastClick.attach(document.body)

    // 类似的这种兼容性代码, 暂时放在这个位置
    // // for iOS 10, users can now pinch-to-zoom even when a website sets user-scalable=no in the viewport.
    // document.documentElement.addEventListener('touchstart', (e) => {
    //   if (e.touches.length > 1) {
    //     e.preventDefault();
    //   }
    // }, false);
    //
    // // disable double click to zoom
    // let lastTouchEnd = 0;
    // document.documentElement.addEventListener('touchend', (e) => {
    //   let now = Date.now();
    //   if (now - lastTouchEnd < 300) {
    //     e.preventDefault();
    //   }
    //
    //   lastTouchEnd = now
    // }, false);
  }
}
