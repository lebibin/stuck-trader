<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-3 col-md-3 col-lg-3" v-for="stock in stocks">
        <app-stock :stock="stock"></app-stock>
      </div>
    </div>
  </div>
</template>

<script>
import Stock from './Stock.vue'
export default {
  computed: {
    stocks() {
      return this.$store.getters.portfolio
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
