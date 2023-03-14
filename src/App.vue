<script setup>
import MainHeader from './components/MainHeader.vue';
import NavBar from './components/NavBar.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <header>
    <MainHeader/>
  </header>

  <main>
    <div class="main-container">
      <div class="side-container">
       <NavBar/>
      </div>
      <div class="info-section">
        <RouterView/>
      </div>
    </div>
    
  </main>
</template>

<style scoped>
.main-container {
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
}

.side-container {
  width: 20%;
  padding-right: 10px;
  line-height: 4rem;
}

.info-section {
  padding: 10px;
  width: 80%;
}



</style>
