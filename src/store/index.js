import { createStore } from 'vuex';

export default createStore({
  state: {
    user: null,
  },
  getters: {},
  mutations: {
    setUser(state, payload) {
      state.user = payload;
      console.log(`🌊 | file: index.js | line 11 | state.user`, state.user);
    },
  },
  actions: {
    async login(context, { email, password }) {
      setTimeout(() => {
        context.commit('setUser', { email, password });
      }, 200);
    },
  },
  modules: {},
});
