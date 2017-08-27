<template>
  <div class="panel panel-info" >
    <div class="panel-heading">
      <h4 class="panel-title">
        {{ stock.name }}
        <span>
          P: {{ stock.price }} | Q: {{ stock.quantity }}
        </span>
      </h4>
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
        <button class="btn btn-default btn-default"
          :class="{ 'btn-danger': !invalidQuantity}"
          :disabled="invalidQuantity"
          @click.prevent="sellStock(stock)">Sell</button>
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
      return(this.quantity <= 0 || this.quantity > this.stock.quantity)
    }
  },
  props: {
    stock: {
      type: Object,
      required: true
    }
  },
  methods: {
    sellStock(stock) {
      this.$store.dispatch('sellStock', {
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
