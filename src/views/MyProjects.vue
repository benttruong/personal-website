<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <h1 class="section-header">My Projects</h1>
  <p style="text-align: center;">
    Here is a short list of the projects I have worked on during the time I was at Portland State
    University
  </p>
    <p class="project-links">
      Projects:
      <RouterLink to="/projects/phonebillAndroid"> 1 </RouterLink>
      |
      <RouterLink to="/projects/AbilitiesAtWork"> 2 </RouterLink>
    </p>
  <div class="project-container">
    <RouterView />
  </div>
</template>

<style scoped>
.project-links {
  text-align: center;
  font-size: large;
}
</style>
