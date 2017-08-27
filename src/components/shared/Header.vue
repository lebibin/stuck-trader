<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link to="home" class="navbar-brand">
          Stuck Trader
        </router-link>
      </div>
      <ul class="nav navbar-nav">
        <li>
          <router-link to="portfolio">
            Portfolio
          </router-link>
        </li>
        <li>
          <router-link to="stocks">
            Stocks
          </router-link>
        </li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li>
          <a href="#" @click="endDay">End Day</a>
        </li>
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
    endDay() {
      console.log("# TODO : Implement end day!")
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
