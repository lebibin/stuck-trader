<template>
  <div class="container">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import SharedHeader from './components/shared/Header.vue'
export default {
  components: {
    appHeader: SharedHeader
  }
}
</script>

<style scoped>
.container {
  margin-top: 50px;
}
</style>
