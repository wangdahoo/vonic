import VueRouter from 'vue-router'
import FastClick from 'fastclick'
import Storage from './services/storage'
import app from './components/app'

let VonAppConfig = {
  beforeEach: undefined,
  afterEach: undefined,
  useHistory: false
}

class VonApp {
  constructor(routers, defaultRouterUrl) {
    this.routers = routers
    this.defaultRouterUrl = defaultRouterUrl
  }

  start() {
    let router = new VueRouter({
      history: VonAppConfig.useHistory
    })

    router.map(this.routers)

    if (typeof VonAppConfig.beforeEach == 'function')
      router.beforeEach(VonAppConfig.beforeEach)
    if (typeof VonAppConfig.afterEach == 'function')
      router.afterEach(VonAppConfig.afterEach)

    router.redirect({
      '*': this.defaultRouterUrl
    })

    router.start(app, '[von-app]')

    router.nextDirection = (direction) => {
      document.querySelector('[von-app]').setAttribute('transition-direction', direction);
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

    let vonApp = new VonApp(routers, defaultRouterUrl)
    vonApp.start()

    // FastClick
    FastClick.attach(document.body)

    // App Instance
    window.$app = vonApp

    // Local Storage Service
    window.$storage = Storage

    // 类似的这种兼容性代码, 暂时放在这个位置
    // for iOS 10, users can now pinch-to-zoom even when a website sets user-scalable=no in the viewport.
    document.documentElement.addEventListener('touchstart', (e) => {
      if (e.touches.length > 1) {
        e.preventDefault()
      }
    }, false)

    // disable double click to zoom
    let lastTouchEnd = 0;
    document.documentElement.addEventListener('touchend', (e) => {
      let now = (new Date()).getTime()
      if (now - lastTouchEnd < 300) {
        e.preventDefault()
      }

      lastTouchEnd = now
    }, false)
  },

  setConfig(name, value) {
    if (['beforeEach', 'afterEach', 'useHistory'].indexOf(name) == 1) throw 'Unknown config name.'
    VonAppConfig[name] = value
  },

  getConfig(name) {
    if (['beforeEach', 'afterEach', 'useHistory'].indexOf(name) == 1) throw 'Unknown config name.'
    return VonAppConfig[name]
  }
}
