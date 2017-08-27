<template>
  <div class="container">
    <app-header></app-header>
    <transition
      enter-active-class="animated fadeInUp"
      leave-active-class="animated fadeOutDown"
      mode="out-in"
      appear
      >
      <router-view></router-view>
    </transition>
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
