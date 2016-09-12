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

  '/effects/scroll': {
    component (resolve) {
      require(['./views/scroll.vue'], resolve);
    }
  },

};
export default routers;
