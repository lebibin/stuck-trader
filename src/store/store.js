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
      { name: 'Facebook', price: 1 },
      { name: 'Snapchat', price: 50 },
      { name: 'Amazon', price: 150 },
      { name: 'Netflix', price: 50 },
      { name: 'Instagram', price: 0 },
      { name: 'Grab', price: 99 }
    ],
    portfolio: [
      { name: 'Grab', price: 99, quantity: 1000 }
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
  },
  mutations: {
    buyStock(state, payload) {
      let selectedPortfolioIndex = -1;
      let price = payload.stock.price
      let quantity = Number(payload.quantity)
      for(let i = 0; i < state.portfolio.length; i++) {
        let stock = state.portfolio[i]
        if (stock.name === payload.stock.name) {
          selectedPortfolioIndex = i
          break
        }
      }
      let stock = {
        name: payload.stock.name,
        price: payload.stock.price,
        quantity
      }
      if (selectedPortfolioIndex >= 0) {
        let currentQuantity = Number(state.portfolio[selectedPortfolioIndex].quantity)
        stock.quantity = quantity + currentQuantity
        state.portfolio.splice(selectedPortfolioIndex, 1, stock)
      } else {
        state.portfolio.push(stock)
      }
      state.funds -= (price * quantity) / 1000
    },
    sellStock(state, payload) {
      let selectedPortfolioIndex = -1;
      let price = payload.stock.price
      let quantity = Number(payload.quantity)
      for(let i = 0; i < state.portfolio.length; i++) {
        let stock = state.portfolio[i]
        if (stock.name === payload.stock.name) {
          selectedPortfolioIndex = i
          break
        }
      }
      if (selectedPortfolioIndex >= 0) {
        let currentQuantity = Number(state.portfolio[selectedPortfolioIndex].quantity)
        let updatedQuantity = currentQuantity - quantity;
        if (updatedQuantity > 0) {
          state.portfolio.splice(selectedPortfolioIndex, 1, {
            name: payload.stock.name,
            price: payload.stock.price,
            quantity: updatedQuantity
          })
        } else {
          state.portfolio.splice(selectedPortfolioIndex, 1)
        }
      }
      state.funds += (price * quantity) / 1000
    }
  },
  actions: {
    buyStock({ commit }, payload) {
      commit('buyStock', payload)
    },
    sellStock({ commit }, payload) {
      commit('sellStock', payload)
    }
  }
})
