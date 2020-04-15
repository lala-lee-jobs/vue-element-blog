import Vue from 'vue';
import './plugins/bootstrap-vue';

import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import MarkdownItVue from 'markdown-it-vue';
import 'markdown-it-vue/dist/markdown-it-vue.css';

import VueMoment from 'vue-moment';

import App from './App.vue';
import router from './router';
import store from './store';
import './assets/all.scss';

library.add(fas, far);

Vue.config.productionTip = false;

Vue.use(mavonEditor);
Vue.use(Loading);
Vue.use(VueMoment);

Vue.component('loading', Loading);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('markdown-it-vue', MarkdownItVue);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
