import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    funds: 100.000,
    stocks: [
      { name: 'BMW', price: 100 },
      { name: 'Google', price: 200 },
      { name: 'Apple', price: 300 },
      { name: 'Twitter', price: 10 },
      { name: 'Facebook', price: 0 },
      { name: 'Snapchat', price: 50 },
      { name: 'Amazon', price: 150 },
      { name: 'Netflix', price: 50 },
      { name: 'Instagram', price: 0 },
      { name: 'Grab', price: 99 }
    ],
    portfolio: [
      { name: 'Google', price: 200, quantity: 10 },
      { name: 'Twitter', price: 10, quantity: 20 },
      { name: 'Facebook', price: 0, quantity: 100 },
      { name: 'Instagram', price: 0, quantity: 50 }
    ]
  },
  getters: {
    funds(state) {
      return state.funds.toFixed(3)
    },
    stocks(state) {
      return state.stocks
    },
    portfolio(state) {
      return state.portfolio
    }
  }
})
