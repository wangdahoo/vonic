import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/app.vue';
import Routers from './router';

Vue.use(VueRouter);

// 开启debug模式
Vue.config.debug = true;

// 路由配置
let router = new VueRouter({
  history: true
});

router.map(Routers);

router.beforeEach(() => {
  window.scrollTo(0, 0);
});

router.afterEach(() => {

});

router.redirect({
  '*': "/home"
});
router.start(App, 'app');

window.$router = router;
