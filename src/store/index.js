import { createStore } from 'vuex';

export default createStore({
  state: {
    user: null,
    authorizationToken: null,
    listUser: [],
    error: '',
  },
  getters: {},
  mutations: {
    setUser(state, payload) {
      state.user = payload;
      console.log(`🌊 | file: index.js | line 14 | state.user`, state.user);
    },
    setAuthorizationToken(state, payload) {
      state.authorizationToken = payload;
    },
    setListUser(state, payload) {
      state.listUser = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
  },
  actions: {
    getListUser(context) {
      fetch('https://api.npoint.io/fdc481fbd7f82fc24f4d')
        .then((response) => response.json())
        .then((data) => context.commit('setListUser', data));
    },
    login(context, { email, password }) {
      const listUser = context.state.listUser;
      const md5 = require('md5');
      let loginUser = null;
      let authToken = '';
      for (let user of listUser) {
        if (user.email === email && user.password === md5(password)) {
          loginUser = user;
          authToken = md5(user.email + user.password);
          context.commit('setUser', loginUser);
          context.commit('setAuthorizationToken', authToken);
          localStorage.setItem('authToken', authToken);
        }
      }
      loginUser == null
        ? context.commit('setError', 'Incorrect Email or Password')
        : context.commit('setError', '');
    },
    logout(context) {
      context.commit('setUser', null);
      context.commit('setAuthorizationToken', '');
      localStorage.setItem('authToken', "");
    },
  },
  modules: {},
});
