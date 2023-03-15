<script setup>
// import ProjectAndroid from '../components/Project-Android.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <span class="section-header">My Projects</span>
  <p style="text-align: center;">
    Here is a short list of the projects I have worked on during the time I was at Portland State
    University
  </p>
  <section class="project-links">
    <p>
      Projects:
      <RouterLink to="/projects/phonebillAndroid"> 1 </RouterLink>
      |
      <RouterLink to="/projects/AbilitiesAtWork"> 2 </RouterLink>
    </p>
  </section>
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
