<template>
  <div class="panel panel-success">
    <div class="panel-heading">
      <h3 class="panel-title">
        {{ stock.name }}
        <span>
          P: {{ stock.price }}
        </span>
      </h3>
    </div>
    <div class="panel-body">
      <form class="form-inline">
        <div class="form-group">
          <input
          type="number"
          class="form-control"
          placeholder="Quantity"
          v-model="quantity"
          >
        </div>
        <button class="btn btn-default"
          :class="{ 'btn-success': !invalidQuantity }"
          :disabled="invalidQuantity"
          @click.prevent="buyStock(stock)">Buy</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quantity: null
    }
  },
  computed: {
    invalidQuantity() {
      let total = (this.stock.price * this.quantity) / 1000
      return (this.quantity <= 0 || (this.funds < total))
    },
    funds() {
      return this.$store.getters.funds
    }
  },
  props: {
    stock: {
      type: Object,
      required: true
    }
  },
  methods: {
    buyStock(stock) {
      this.$store.dispatch('buyStock', {
        stock,
        quantity: this.quantity
      })
      this.quantity = null
    }
  }
}
</script>

<style>
span {
  float: right;
  font-weight: bold;
}
</style>
