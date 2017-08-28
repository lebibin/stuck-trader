import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    day: 1,
    funds: 10.000,
    stocks: [
      { id: 1, name: 'BMW', price: 100 },
      { id: 2, name: 'Google', price: 200 },
      { id: 3, name: 'Apple', price: 300 },
      { id: 4, name: 'Twitter', price: 10 },
      { id: 5, name: 'Facebook', price: 50 },
      { id: 6, name: 'Snapchat', price: 80 },
      { id: 7, name: 'Amazon', price: 150 },
      { id: 8, name: 'Netflix', price: 70 },
      { id: 9, name: 'Instagram', price: 110 },
      { id: 10, name: 'Grab', price: 50 },
      { id: 11, name: 'Uber', price: 100 }
    ],
    portfolio: [
    ]
  },
  getters: {
    day(state) {
      return state.day
    },
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
      let quantity = Number(payload.quantity)
      let portfolioIndex = state.portfolio.findIndex((p) => {
        return p.stock_id === payload.stock_id
      })

      if (portfolioIndex > -1) {
        let portfolio = state.portfolio[portfolioIndex]
        quantity += Number(portfolio.quantity)
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
      let quantity = Number(state.portfolio[portfolioIndex].quantity) - Number(payload.quantity)
      if (quantity > 0 ){
        state.portfolio.splice(portfolioIndex, 1, {
          stock_id: payload.stock_id,
          quantity
        })
      } else {
        state.portfolio.splice(portfolioIndex, 1)
      }
      state.funds += (price * payload.quantity) / 1000
    },
    endDay(state, payload) {
      let newStocks = []
      state.stocks.forEach((stock) => {
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
      let min = 1;
      let max = 50;
      // https://stackoverflow.com/a/8611855
      var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
      let fluctuation =  (Math.floor(Math.random() * (max - min)) + min) * plusOrMinus;
        newStocks.push({
          id: stock.id,
          name: stock.name,
          price: Math.max(stock.price + fluctuation, 0)
        })
      })
      state.stocks = newStocks
      state.day += 1
    },
    saveProgress(state, payload) {
      let storage = window.localStorage
      storage.setItem('day', state.day)
      storage.setItem('funds', state.funds)
      storage.setItem('stocks', JSON.stringify(state.stocks))
      storage.setItem('portfolio', JSON.stringify(state.portfolio))
    },
    loadProgress(state, payload) {
      let storage = window.localStorage
      state.day = Number(storage.getItem('day'))
      state.funds = Number(storage.getItem('funds'))
      state.stocks = JSON.parse(storage.getItem('stocks'))
      state.portfolio = JSON.parse(storage.getItem('portfolio'))
    }
  },
  actions: {
    buyStock({ commit }, payload) {
      commit('buyStock', payload)
    },
    sellStock({ commit }, payload) {
      commit('sellStock', payload)
    },
    endDay({ commit }, payload) {
      commit('endDay', payload)
    },
    saveProgress({ commit }, payload) {
      commit('saveProgress', payload)
    },
    loadProgress({ commit }, payload) {
      commit('loadProgress', payload)
    }
  }
})
