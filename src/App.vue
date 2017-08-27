<template>
  <div class="container">
    <app-header></app-header>
    <app-index></app-index>
    <app-stocks></app-stocks>
    <app-portfolio></app-portfolio>
  </div>
</template>

<script>
import SharedHeader from './components/shared/Header.vue'
import Index from './components/Index.vue'
import StocksIndex from './components/stocks/Index.vue'
import PortfolioIndex from './components/portfolio/Index.vue'
export default {
  components: {
    appHeader: SharedHeader,
    appIndex: Index,
    appStocks: StocksIndex,
    appPortfolio: PortfolioIndex
  }
}
</script>

<style scoped>
.container {
  margin-top: 50px;
}
</style>
