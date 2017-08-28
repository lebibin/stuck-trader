import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    funds: 10.000,
    stocks: [
      { id: 1, name: 'BMW', price: 100 },
      { id: 2, name: 'Google', price: 200 },
      { id: 3, name: 'Apple', price: 300 },
      { id: 4, name: 'Twitter', price: 10 },
      { id: 5, name: 'Facebook', price: 1 },
      { id: 6, name: 'Snapchat', price: 50 },
      { id: 7, name: 'Amazon', price: 150 },
      { id: 8, name: 'Netflix', price: 50 },
      { id: 9, name: 'Instagram', price: 110 },
      { id: 10, name: 'Grab', price: 99 }
    ],
    portfolio: [
      { stock_id: 10, quantity: 1000 }
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
      let portfolio = []
      state.portfolio.forEach((p) => {
        let stock = state.stocks.find((s) => {
          return (s.id === p.stock_id)
        })
        if (stock) {
          portfolio.push(Object.assign({}, stock, {quantity: p.quantity}))
        }
      })
      return portfolio;
    }
  },
  mutations: {
    buyStock(state, payload) {
      let stock = state.stocks.find((s) => {
        return s.id == payload.stock_id
      })
      let price = Number(stock.price)
      let quantity = payload.quantity
      let portfolioIndex = state.portfolio.findIndex((p) => {
        return p.stock_id === payload.stock_id
      })

      if (portfolioIndex > -1) {
        let portfolio = state.portfolio[portfolioIndex]
        quantity += portfolio.quantity
      } else {
        portfolioIndex = state.portfolio.length
      }

      state.funds -= (price * payload.quantity) / 1000
      state.portfolio.splice(portfolioIndex, 1, {
        stock_id: payload.stock_id,
        quantity
      })
    },
    sellStock(state, payload) {
      let stock = state.stocks.find((s) => {
        return s.id == payload.stock_id
      })
      let price = Number(stock.price)

      let portfolioIndex = state.portfolio.findIndex((p) => {
        return p.stock_id === payload.stock_id
      })
      let quantity = state.portfolio[portfolioIndex].quantity - payload.quantity

      state.funds += (price * payload.quantity) / 1000
      state.portfolio.splice(portfolioIndex, 1, { 
        stock_id: payload.stock_id,
        quantity
      })
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
