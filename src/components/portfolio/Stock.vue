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
          <input type="text" class="form-control" placeholder="Quantity">
        </div>
        <button class="btn btn-default btn-danger">Sell</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    stock: {
      type: Object,
      required: true
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
