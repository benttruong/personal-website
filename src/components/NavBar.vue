<template>
  <nav>
    <ul>
      <RouterLink class="link" to="/">About Me</RouterLink>
      <RouterLink class="link" to="/education">Education</RouterLink>
      <RouterLink class="link" to="/projects">Projects</RouterLink>
      <RouterLink class="link" to="/contact">Contact Me</RouterLink>
    </ul>
  </nav>
</template>

<style scoped>
ul {
  padding: 0;
}
.link {
  font-weight: bold;
  display: block;
}

.link:active {
  color: crimson;
}

.link:hover {
  border: 5px;
  border-color: antiquewhite;
  color: darksalmon;
}
</style>
