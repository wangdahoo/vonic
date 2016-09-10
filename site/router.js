const routers = {

  '/login': {
    component (resolve) {
      require(['./views/login.vue'], resolve);
    }
  },

  '/dashboard': {
    component (resolve) {
      require(['./views/dashboard.vue'], resolve);
    }
  },
};
export default routers;
