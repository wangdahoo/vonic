import Vue from 'vue'
import VueRouter from 'vue-router'
import FastClick from 'fastclick'
Vue.use(VueRouter)

import './services/backdrop'
import './services/loading'
import './services/popup/dialog.js'
import './services/popup/index.js'
import './services/cascadepanel/index.js'
import './services/actionsheet/index.js'
import './services/tabbar/index.js'
import './services/sidebar/index.js'
import './services/modal/index.js'

import './services/storage/index.js'

import VonApp from './components/app'

const defaultRouterOptions = {
  base: '/',
  linkActiveClass: 'router-link-active',
  mode: 'hash',
  scrollBehavior: undefined
}

let VonicAppConfig = {
  // Router Global Guards
  beforeEach: undefined,
  afterEach: undefined,

  // Router Options
  routerOptions: {}
}

const nextDirection = (direction) => {
  let el = document.querySelector('[von-app]')
  if (el) el.setAttribute('transition-direction', direction);
}

class VonicApp {
  constructor(options) {
    this.routes = options.routes
  }

  start() {
    const App = Vue.extend(VonApp)

    let routerOptions = Object.assign(
      {},
      defaultRouterOptions,
      VonicAppConfig.routerOptions,
      {
        routes: this.routes
      }
    )

    const router = new VueRouter(routerOptions)

    // set router global guards
    if (typeof VonicAppConfig.beforeEach == 'function')
      router.beforeEach(VonicAppConfig.beforeEach)
    if (typeof VonicAppConfig.afterEach == 'function')
      router.afterEach(VonicAppConfig.afterEach)

    const app = new Vue({
      router,
      components: {
        VonApp
      }
    }).$mount('von-app')

    router._push = router.push

    router.forward = router.push = (target) => {
      if (window.__block_touch__) return
      nextDirection('forward')
      setTimeout(() => { router._push(target) })
    }

    router.back = (target) => {
      if (window.__block_touch__) return
      nextDirection('back')
      setTimeout(() => { router._push(target) })
    }

    window.$router = router
  }
}

export default {
  install(Vue, options) {
    let app = new VonicApp(options)
    app.start()

    /* 类似的这种兼容性代码, 暂时放在这个位置 */
    /* for iOS 10, users can now pinch-to-zoom even when a website sets user-scalable=no in the viewport. */
    document.documentElement.addEventListener('touchstart', (e) => {
      if (e.touches.length > 1) {
        e.preventDefault()
      }
    }, false)

    /* iOS Safari - Disable double click to zoom */
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      let lastTouchEnd = 0;
      document.documentElement.addEventListener('touchend', (e) => {
        let now = (new Date()).getTime()
        if (now - lastTouchEnd < 300) {
          e.preventDefault()
        }
        lastTouchEnd = now
      }, false)
    }

    FastClick.attach(document.body)
  },

  setConfig(name, value) {
    if (['beforeEach', 'afterEach', 'routerOptions'].indexOf(name) == -1) throw 'Unknown config name.'
    VonicAppConfig[name] = value
  },

  getConfig(name) {
    if (['beforeEach', 'afterEach', 'routerOptions'].indexOf(name) == -1) throw 'Unknown config name.'
    return VonicAppConfig[name]
  },

  nextDirection: nextDirection,

  root() {
    return document.querySelector('[von-app]')
  },

  pageContentScrollTop(scrollTop) {
    const root = document.querySelector('[von-app]')
    if (typeof scrollTop == 'number') {
      const content = root && root.querySelectorAll('.page .page-content')[1]
      if (content) {
        content.scrollTop = scrollTop
      }
    } else {
      return root && root.querySelector('.page .page-content')
        ? root.querySelector('.page .page-content').scrollTop
        : 0
    }
  }
}
