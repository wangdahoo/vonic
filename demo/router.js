const routers = {

  '/home': {
    component (resolve) {
      require(['./views/home.vue'], resolve);
    }
  },

  '/widgets/radio': {
    component (resolve) {
      require(['./views/radio.vue'], resolve);
    }
  },

  '/widgets/checkbox': {
    component (resolve) {
      require(['./views/checkbox.vue'], resolve);
    }
  },

  '/widgets/toggle': {
    component (resolve) {
      require(['./views/toggle.vue'], resolve);
    }
  },

  '/effects/scroll': {
    component (resolve) {
      require(['./views/scroll.vue'], resolve);
    }
  },

};
export default routers;
