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

  '/effects/pull-to-refresh': {
    component (resolve) {
      require(['./views/pull-to-refresh.vue'], resolve);
    }
  },

  '/showcases/login': {
    component (resolve) {
      require(['./views/login.vue'], resolve);
    }
  },

};
export default routers;
