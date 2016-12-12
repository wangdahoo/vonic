import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import './services/actionsheet'
import './services/backdrop'
import './services/popup'
import './services/sidebar'
import './services/storage'
import './services/tabbar'

import VonApp from './components/app'

import FastClick from 'fastclick'

let VonicAppConfig = {
  beforeEach: undefined,
  afterEach: undefined,
  useHistory: false
}

class VonicApp {
  constructor(routers, defaultRouterUrl) {
    this.routers = routers
    this.defaultRouterUrl = defaultRouterUrl
  }

  start() {
    let app = Vue.extend(VonApp)

    let router = new VueRouter({
      history: VonicAppConfig.useHistory
    })

    router.map(this.routers)

    if (typeof VonicAppConfig.beforeEach == 'function')
      router.beforeEach(VonicAppConfig.beforeEach)
    if (typeof VonicAppConfig.afterEach == 'function')
      router.afterEach(VonicAppConfig.afterEach)

    router.redirect({
      '*': this.defaultRouterUrl
    })

    router.start(app, 'von-app')

    router.nextDirection = (direction) => {
      let target = document.querySelector('[von-app]')
      if (target) target.setAttribute('transition-direction', direction);
    }

    router._go = router.go

    router.forward = router.go = (target) => {
      router.nextDirection('forward');
      setTimeout(() => { router._go(target) })
    }

    router.back = (target) => {
      router.nextDirection('back');
      setTimeout(() => { router._go(target) })
    }

    window.$router = router
  }
}

export default {
  install(Vue, options) {
    Vue.transition('view', {enterClass: 'view-enter', leaveClass: 'view-leave'})

    const routers = options.routers
    const defaultRouterUrl = options.defaultRouterUrl
    const defaultNavTheme = options.defaultNavTheme

    let app = new VonicApp(routers, defaultRouterUrl)
    app.start()
    window.$app = app

    // FastClick
    FastClick.attach(document.body)

    // Nav Theme
    if (defaultNavTheme) {
      setTimeout(() => {
        document.querySelector('[von-nav]').setAttribute('theme', defaultNavTheme)
      })
    }

    /* 类似的这种兼容性代码, 暂时放在这个位置 */
    /* for iOS 10, users can now pinch-to-zoom even when a website sets user-scalable=no in the viewport. */
    document.documentElement.addEventListener('touchstart', (e) => {
      if (e.touches.length > 1) {
        e.preventDefault()
      }
    }, false)

    // 暂时取消限制
    /* Disable double click to zoom */
    // let lastTouchEnd = 0;
    // document.documentElement.addEventListener('touchend', (e) => {
    //   let now = (new Date()).getTime()
    //   if (now - lastTouchEnd < 300) {
    //     e.preventDefault()
    //   }
    //   lastTouchEnd = now
    // }, false)
  },

  setConfig(name, value) {
    if (['beforeEach', 'afterEach', 'useHistory'].indexOf(name) == -1) throw 'Unknown config name.'
    VonicAppConfig[name] = value
  },

  getConfig(name) {
    if (['beforeEach', 'afterEach', 'useHistory'].indexOf(name) == -1) throw 'Unknown config name.'
    return VonicAppConfig[name]
  }
}
