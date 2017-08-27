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
        { name: 'BMW', price: 100, quantity: 10 },
        { name: 'Google', price: 200, quantity: 100 },
        { name: 'Apple', price: 300, quantity: 200 },
        { name: 'Twitter', price: 20, quantity: 150 },
      ]
    }
  },
  components: {
    appStock: Stock
  }
}
</script>

<style scoped>
span {
  float: right;
  font-weight: bold;
}
</style>
