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
    user: {
      loggedIn: false,
      data: null,
    },
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
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
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
    fetchUser({ commit }, user) {
      commit('SET_LOGGED_IN', user !== null);
      if (user) {
        commit('SET_USER', user);
      } else {
        commit('SET_USER', null);
      }
    },
    signInAuto({ commit }) {
      return new Promise((resolve) => {
        auth.onAuthStateChanged((user) => {
          if (user) {
            commit('SET_USER', user);
          }
          resolve(user);
        });
      });
    },
    signInWithEmail(_context, { account, password }) {
      return auth.signInWithEmailAndPassword(account, password).then((user) => user);
    },
  },
  modules: {
  },
});
