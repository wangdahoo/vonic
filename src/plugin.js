import Promise from 'es6-promise'
Promise.polyfill()
import assign from 'object-assign'
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

const is_ios = () => {
 return /iPad|iPhone|iPod/.test(navigator.userAgent)
}

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
  routerOptions: {},

  pushMethod: 'push',

  // Page Transition
  pageTransition: undefined
}

const nextDirection = (direction) => {
  let el = document.querySelector('[von-app]')
  if (el) el.setAttribute('transition-direction', direction);
}

const setTitle = (title) => {
  let el = document.querySelector('[von-navbar="active"] > .title > span')
  if (el) el.textContent = title
}

class VonicApp {
  constructor(options) {
    this.routes = options.routes
    this.store = options.store
  }

  start() {
    const App = Vue.extend(VonApp)

    let routerOptions = assign(
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

    window.__page_transition__ = VonicAppConfig.pageTransition

    window.__disable_nav_title_transition__ = VonicAppConfig.disableNavTitleTransition || false
    if (!is_ios()) window.__disable_nav_title_transition__ = true

    let appOptions = {
      router,
      components: {
        VonApp
      },
      propsData: {
        meta: {
          pushMethod: VonicAppConfig.pushMethod
        }
      },
      methods: {
        setTitle: setTitle
      }
    }

    if (this.store) appOptions.store = this.store

    const app = new Vue(appOptions).$mount('von-app')

    window.$app = app

    let pushMethod = window.__push_method__ = VonicAppConfig.pushMethod
    router['_' + pushMethod] = router[pushMethod]

    router.forward = router[pushMethod] = (target) => {
      nextDirection('forward')
      setTimeout(() => { router['_' + pushMethod](target) })
    }

    router.back = (target) => {
      nextDirection('back')
      setTimeout(() => { router['_' + pushMethod](target) })
    }

    window.$router = router
  }
}

const CONFIG_LIST = ['beforeEach', 'afterEach', 'routerOptions', 'pushMethod',
  'disableNavTitleTransition', 'pageTransition']

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
    if (is_ios()) {
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
    if (CONFIG_LIST.indexOf(name) == -1) throw 'Unknown config name.'
    if (name == 'pushMethod' && value != 'push' && value != 'replace') throw 'Wrong value for config [pushMethod]'
    VonicAppConfig[name] = value
  },

  getConfig(name) {
    if (CONFIG_LIST.indexOf(name) == -1) throw 'Unknown config name.'
    return VonicAppConfig[name]
  },

  nextDirection: nextDirection,

  root() {
    return document.querySelector('[von-app]')
  },

  pageContentScrollTop(scrollTop) {
    const root = document.querySelector('[von-app]')
    if (typeof scrollTop == 'number') {
      const pages = root && root.querySelectorAll('.page .page-content')
      const content = pages[pages.length - 1]
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
