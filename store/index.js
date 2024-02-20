import Vuex from "vuex";
import Vue from "vue";
import { signup, getUsers } from "../api/auth";
Vue.use(Vuex);

const createStore = () => {
  return new Vuex.Store({
    state: {
      users: null,
    },
    getters: {
      getUser: (state) => state.users,
    },
    actions: {
      async registerUser({ commit }, userData) {
        const { data } = await signup(userData);
        commit("setUser", data);
        alert("Đăng kí thành công!");
      },
      async getUser({ commit }, user) {
        const { data } = await getUsers();
        const result = data.find((item) => item.email == user.email);
        if (result) {
          alert("Đăng nhập thành công!");
        }
      },
    },
    mutations: {
      setUser(state, user) {
        state.users = user;
      },
    },
  });
};

export default createStore;
