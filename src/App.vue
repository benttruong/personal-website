<script setup>
import MainHeader from './components/MainHeader.vue';
import AboutMe from './components/AboutMe.vue';

</script>

<template>
  <header>
    <MainHeader/>
  </header>

  <main>
    <div class="main-container">
      <div class="side-container">
        <a class="link" href="http://">Link 1</a>
        <a class="link" href="http://">Link 2</a>
        <a class="link" href="http://">Link 3</a>
      </div>
      <div class="info-section">
        <AboutMe/>
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
  padding: 10px;
  color: crimson ;
}

.info-section {
  padding: 10px;
  width: 80%;
}

.link {
  color: beige;
  font-weight: bold;
  display: block;
}


</style>
