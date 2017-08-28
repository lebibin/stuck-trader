<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link to="home" class="navbar-brand">
          Stuck Trader
        </router-link>
      </div>
      <ul class="nav navbar-nav">
        <router-link
          tag="li"
          to="portfolio"
          active-class="active"
          >
          <a href="#">
            Portfolio
          </a>
        </router-link>
        <router-link
          tag="li"
          to="stocks"
          active-class="active"
          >
          <a href="#">
            Stocks
          </a>
        </router-link>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li>
          <a href="#" @click="endDay">
            {{ day  }}
          </a>
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
        <li><a href="#"><strong>Funds: ${{ funds }}</strong></a></li>
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
  computed: {
    funds() {
      return this.$store.getters.funds
    },
    day() {
      return "End Day #" + this.$store.getters.day
    }
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown
    },
    endDay() {
      this.$store.dispatch('endDay')
    },
    saveProgress() {
      this.$store.dispatch('saveProgress')
      this.toggleDropdown();
    },
    loadProgress() {
      this.$store.dispatch('loadProgress')
      this.toggleDropdown();
    }
  }
}
</script>

<style>
</style>
