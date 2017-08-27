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
          <input type="text" class="form-control" placeholder="Quantity">
        </div>
        <button class="btn btn-default">Buy</button>
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
