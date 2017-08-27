<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">Stuck Trader</a>
      </div>
      <ul class="nav navbar-nav">
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Stocks</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">End Day</a></li>
        <li class="dropdown" :class="{open: showDropdown}">
          <a class="dropdown-toggle" @click="toggleDropdown" href="#">
            Save & Load
            </a>
          <ul class="dropdown-menu">
            <li><a href="#" @click="saveProgress">Save</a></li>
            <li><a href="#" @click="loadProgress">Load</a></li>
          </ul>
        </li>
        <li><a href="#"><strong>Funds: $10.000</strong></a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showDropdown: false
    }
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown
    },
    saveProgress() {
      console.log("# TODO : Implement save progress!")
      this.toggleDropdown();
    },
    loadProgress() {
      console.log("# TODO : Implement load progress!")
      this.toggleDropdown();
    }
  }
}
</script>

<style>
</style>
