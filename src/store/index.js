import Vue from "vue";
import Vuex from "vuex";
import ProductService from '@/services/ProductService.js'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    products: [],
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products
    }
  },
  actions: {
    fetchProducts({ commit }) {
      ProductService.getCellphones()
        .then(response => {
          commit('SET_PRODUCTS', response.data)
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    }
  }
});

export default store;