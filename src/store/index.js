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
    articleID: '',
  },
  getters: {
    foundArticle(state) {
      const found = state.articles.find((item) => item.id === state.articleID);
      console.log('found', found);
      return found;
    },
  },
  mutations: {
    SET_LOADING(state, value) {
      state.loading = value;
    },
    SET_USER(state, payload) {
      state.user = payload;
    },
    SET_ARTICLES(state, payload) {
      state.articles = payload;
    },
    SET_ARTICLE_ID(state, payload) {
      state.articleID = payload;
    },
  },
  actions: {
    startLoading({ commit }) {
      commit('SET_LOADING', true);
    },
    stopLoading({ commit }) {
      commit('SET_LOADING', false);
    },
    changeArticleID({ commit }, payload) {
      commit('SET_ARTICLE_ID', payload);
    },
    async fetchArticles({ commit }) {
      commit('SET_LOADING', true);
      const result = await ref.get();
      const payload = [];
      result.forEach((item) => payload.push({ id: item.id, ...item.data() }));
      commit('SET_ARTICLES', payload);
      commit('SET_LOADING', false);
    },
    signInAuto({ commit }) {
      return new Promise((resolve) => {
        auth.onAuthStateChanged((user) => {
          commit('SET_USER', user);
          resolve(user);
        });
      });
    },
    signInWithEmail({ commit }, { account, password }) {
      commit('SET_LOADING', true);
      return auth.signInWithEmailAndPassword(account, password).then((user) => {
        commit('SET_LOADING', false);
        return user;
      });
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
