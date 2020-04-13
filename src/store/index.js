import Vue from 'vue';
import Vuex from 'vuex';
import db from './firestore';

Vue.use(Vuex);
const ref = db.collection('Articles');
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articles: [],
  },
  mutations: {
    SET_ARTICLES(state, payload) {
      state.articles = payload;
    },
  },
  actions: {
    async fetchArticles({ commit }) {
      const result = await ref.get();
      const payload = [];
      result.forEach((item) => payload.push({ id: item.id, ...item.data() }));
      commit('SET_ARTICLES', payload);
    },
  },
  modules: {
  },
});
