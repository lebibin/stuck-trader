<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-3 col-md-3 col-lg-3" v-for="stock in stocks">
        <app-stock :stock="stock"></app-stock>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Stock from './Stock.vue'
export default {
  data() {
    return {
      stocks: [
        { name: 'BMW', price: 100 },
        { name: 'Google', price: 200 },
        { name: 'Apple', price: 300 },
        { name: 'Twitter', price: 10 },
        { name: 'Facebook', price: 0 },
        { name: 'Snapchat', price: 50 },
        { name: 'Amazon', price: 150 },
        { name: 'Netflix', price: 50 },
      ]
    }
  },
  components: {
    appStock: Stock
  }
}
</script>

<style scoped>
</style>
