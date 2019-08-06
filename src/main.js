// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
// import router from './routes.js';
import router from './router';

import Framework7 from 'framework7/framework7.esm.bundle.js';

import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';
// Import F7 Styles
import 'framework7/css/framework7.css';

// Import Icons and App Custom Styles
import './css/icons.css';
import './css/app.css';

Framework7.use(Framework7Vue);

Vue.config.productionTip = false;

/* eslint-disable no-new */
/* eslint-disable */
new Vue({
/* eslint-disable */
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

