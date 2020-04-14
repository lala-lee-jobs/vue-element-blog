import Vue from 'vue';
import Vuex from 'vuex';
import * as fireinit from '@/fireinit';

Vue.use(Vuex);
const ref = fireinit.db.collection('Articles');
const { auth } = fireinit;

export default new Vuex.Store({
  state: {
    loading: false,
    articles: [],
    user: null,
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
  mutations: {
    LOADING(state, value) {
      state.loading = value;
    },
    SET_ARTICLES(state, payload) {
      state.articles = payload;
    },
    SET_USER(state, payload) {
      state.user = payload;
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
    signInAuto({ commit }) {
      return new Promise((resolve) => {
        auth.onAuthStateChanged((user) => {
          commit('SET_USER', user);
          resolve(user);
        });
      });
    },
    signInWithEmail(_context, { account, password }) {
      return auth.signInWithEmailAndPassword(account, password).then((user) => user);
    },
    signOut({ commit }) {
      return auth.signOut().then(() => {
        commit('SET_USER', null);
      });
    },
  },
  modules: {
  },
});
