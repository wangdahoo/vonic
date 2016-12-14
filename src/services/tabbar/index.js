import Vue from 'vue'
import Tabbar from './Tabbar'
import channel from './channel'

let _vm = undefined;

Vue.directive('tabbar', (data) => {
  if (_vm) _vm.$destroy(true)
  let el = document.createElement('div')
  el.setAttribute('von-tabbar', '')
  document.body.appendChild(el)

  setTimeout(() => {
    let props = {}
    if (data.menuColor) props.menuColor = data.menuColor
    if (data.activeMenuColor) props.activeMenuColor = data.activeMenuColor
    if (data.onMenuClick) props.onMenuClick = data.onMenuClick

    _vm = new Vue(Object.assign({}, Tabbar, {
      data: { 
        menus: data.menus, 
        menuIndex: 0, 
        state: 0 
      },
      propsData: props
    }))
  })
})

function vmReady() {
  let cnt = 0;
  return new Promise((resolve, reject) => {
    let timer = setInterval(() => {
      if (cnt > 100) {
        reject('Tabbar _vm undefined.')
        return
      }
      cnt++
      if (_vm) {
        clearInterval(timer)
        resolve()
      }
    }, 10)
  })
}

Vue.directive('tabbar-menu-index', (index) => {
  vmReady().then(() => {
    _vm.activate(index)
  })
})

channel.$on('hideTabbar', () => {
  if (_vm) _vm.$destroy(true)
})

window.$tabbar = window.$tabbarEmmiter = channel
