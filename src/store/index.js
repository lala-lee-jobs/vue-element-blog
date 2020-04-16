import Vue from 'vue';
import Vuex from 'vuex';
import * as fireinit from '@/fireinit';

Vue.use(Vuex);
const articlesRef = fireinit.db.collection('Articles');
const { auth } = fireinit;

export default new Vuex.Store({
  state: {
    loading: false,
    articles: [],
    user: null,
    article: null,
  },
  getters: {
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
    SET_ARTICLE(state, payload) {
      state.article = payload;
    },
    DELETE_ARTICLE(state, payload) {
      const findIndex = state.articles.findIndex((item) => item.id === payload);
      state.articles.splice(findIndex, 1);
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
      const result = await articlesRef.get();
      const payload = [];
      result.forEach((item) => payload.push({ id: item.id, ...item.data() }));
      commit('SET_ARTICLES', payload);
      commit('SET_LOADING', false);
    },
    async fetchArticle({ commit }, payload) {
      commit('SET_LOADING', true);
      const result = await articlesRef.doc(payload).get();
      commit('SET_ARTICLE', result.data());
      commit('SET_LOADING', false);
    },
    async updateArticle({ commit }, { id, newArticle }) {
      commit('SET_LOADING', true);
      await articlesRef.doc(id).set(newArticle);
      commit('SET_LOADING', false);
    },
    async deleteArticle({ commit }, id) {
      commit('SET_LOADING', true);
      await articlesRef.doc(id).delete();
      commit('DELETE_ARTICLE', id);
      commit('SET_LOADING', false);
    },
    async addArticle({ commit }, { newArticle }) {
      commit('SET_LOADING', true);
      await articlesRef.add(newArticle);
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
