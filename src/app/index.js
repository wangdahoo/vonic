import assign from 'object-assign'
import VonApp from './components/App'
import state from './state'
import {is_ios} from './utils'

const defaultConfig = {
  pushMethod: 'push',
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

export default {
  install(Vue, options) {
    const router = options.router // the router instance

    let pushMethod = state.__push_method__ = options.pushMethod || defaultConfig.pushMethod
    router['_' + pushMethod] = router[pushMethod]

    // Setup Router
    router.forward = router[pushMethod] = (target) => {
      nextDirection('forward')
      setTimeout(() => { router['_' + pushMethod](target) })
    }

    router.back = (target) => {
      nextDirection('back')
      setTimeout(() => { router['_' + pushMethod](target) })
    }
    // / Setup Router - End

    const store = options.store

    const appOptions = {
      router,
      components: { VonApp },
      propsData: {
        meta: { // What for?
          pushMethod: pushMethod
        }
      }
    }

    // vuex store
    if (!store) appOptions.store = store

    const app = new Vue(appOptions).$mount('von-app')

    Vue.prototype.$app = window.$app = app
    window.$router = router

    return store
      ? {app, router, store}
      : {app, router}
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
