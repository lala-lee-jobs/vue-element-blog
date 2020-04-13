import Vue from 'vue';
import Vuex from 'vuex';
import db from './firestore';

Vue.use(Vuex);
const ref = db.collection('Articles');
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    articles: [],
  },
  mutations: {
    LOADING(state, payload) {
      state.loading = payload;
    },
    SET_ARTICLES(state, payload) {
      state.articles = payload;
    },
  },
  actions: {
    async fetchArticles({ commit }) {
      commit('LOADING', true);
      const result = await ref.get();
      const payload = [];
      result.forEach((item) => payload.push({ id: item.id, ...item.data() }));
      commit('SET_ARTICLES', payload);
      commit('LOADING', false);
    },
  },
  modules: {
  },
});
