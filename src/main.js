import Vue from 'vue';

import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';

import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/element';
import './assets/all.scss';

Vue.config.productionTip = false;
Vue.use(mavonEditor);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
