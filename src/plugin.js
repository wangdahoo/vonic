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

const defaultRouterOptions = {
  hashbang: true,
  history: false,
  abstract: false,
  root: null,
  linkActiveClass: 'v-link-active',
  saveScrollPosition: false,
  transitionOnLoad: false,
  suppressTransitionError: false
}

let VonicAppConfig = {
  beforeEach: undefined,
  afterEach: undefined,
  routerOptions: {}
}

const nextDirection = (direction) => {
  let el = document.querySelector('[von-app]')
  if (el) el.setAttribute('transition-direction', direction);
}

class VonicApp {
  constructor(routes, defaultRouteUrl) {
    this.routes = routes
    this.defaultRouteUrl = defaultRouteUrl
  }

  start() {
    let app = Vue.extend(VonApp)

    let router = new VueRouter(Object.assign({},
      defaultRouterOptions, VonicAppConfig.routerOptions))

    router.map(this.routes)

    if (typeof VonicAppConfig.beforeEach == 'function')
      router.beforeEach(VonicAppConfig.beforeEach)
    if (typeof VonicAppConfig.afterEach == 'function')
      router.afterEach(VonicAppConfig.afterEach)

    router.redirect({
      '*': this.defaultRouteUrl
    })

    router.start(app, 'von-app')

    router._go = router.go

    router.forward = router.go = (target) => {
      if (window.__block_touch__) return
      nextDirection('forward')
      setTimeout(() => { router._go(target) })
    }

    router.back = (target) => {
      if (window.__block_touch__) return
      nextDirection('back')
      setTimeout(() => { router._go(target) })
    }

    window.$router = router
  }
}

export default {
  install(Vue, options) {
    Vue.transition('view', {enterClass: 'view-enter', leaveClass: 'view-leave'})

    const routes = options.routes
    const defaultRouteUrl = options.defaultRouteUrl
    const defaultNavTheme = options.defaultNavTheme

    let app = new VonicApp(routes, defaultRouteUrl)
    app.start()
    window.$app = app

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

    /* Safari - disable double click to zoom */
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
