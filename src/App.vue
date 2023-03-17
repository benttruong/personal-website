<script setup>
import MainHeader from './components/MainHeader.vue'
import NavBar from './components/NavBar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <MainHeader />
  </header>

  <main>
    <div class="main-container">
      <div class="side-container">
        <NavBar />
      </div>
      <div class="info-section">
        <RouterView />
      </div>
    </div>
  </main>
</template>

<style scoped>

@media (max-width: 768) {
  .side-container {
    width: 10%;
  }
  .info-section {
    width: 90%;
  }
}
</style>
