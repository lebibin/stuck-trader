import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Index from './components/Index.vue'
import StocksIndex from './components/stocks/Index.vue'
import PortfolioIndex from './components/portfolio/Index.vue'

export const routes = [
  { path: '/', component: Index, name: 'home' },
  { path: '/stocks', component: StocksIndex, name: 'stocks' },
  { path: '/portfolio', component: PortfolioIndex, name: 'portfolio' },
  { path: '*', redirect: '/' }
]

export const router = new VueRouter({
  routes,
  mode: 'history'
})
