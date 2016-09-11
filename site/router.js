const routers = {

  '/login': {
    component (resolve) {
      require(['./views/login.vue'], resolve);
    }
  },

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

};
export default routers;
