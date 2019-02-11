// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './vuex/store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'jquery'
import KeenUI from 'keen-ui';
import 'keen-ui/dist/keen-ui.css';

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(KeenUI);
Vue.use(Vuex);

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  const type = to.meta.type

  if (type === 'login') {
    if (window.localStorage.getItem('user')) {
      next()
    } else {
      next('/LoginAlert')
    }
  } else {
    next() 
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

