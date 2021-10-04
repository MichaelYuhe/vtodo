import { createStore } from "vuex";

export default createStore({
  state: {
    isLogin: false,
    configs: [
      {
        title: "theme",
        property: true,
        id: 1
      },
      {
        title: "enableDelete",
        property: true,
        id: 2
      }
    ],
    currentCategory: "All"

  },
  mutations: {
    signIn(state) {
      state.isLogin = true
    },
    changeProperty(state, id) {
      state.configs.find(config => config.id === id).property = !state.configs.find(config => config.id === id).property  
    },
    changeCategory(state, title) {
      state.currentCategory = title
    }

  },
  actions: {},
  modules: {},
});
