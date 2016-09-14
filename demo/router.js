const routers = {

  '/home': {
    component: require('./views/home.vue')
  },

  '/widgets/radio': {
    component: require('./views/radio.vue')
  },

  '/widgets/checkbox': {
    component: require('./views/checkbox.vue')
  },

  '/widgets/toggle': {
    component: require('./views/toggle.vue')
  },

  '/widgets/tabs': {
    component: require('./views/tabs.vue')
  },

  '/widgets/cells': {
    component: require('./views/cells.vue')
  },

  '/effects/scroll': {
    component: require('./views/scroll.vue')
  },

};
export default routers;
