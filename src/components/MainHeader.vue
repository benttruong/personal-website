<script setup></script>

<template>
  <header>
    <h1 class="page-name">Ben Truong</h1>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  margin: auto;
}

.logo {
  margin: 0 1rem;
  border-radius: 50%;
  width: 125px;
  height: 125px;
}

.page-name {
  font-weight: 900;
  font-size: xxx-large;
  color: aliceblue;
  font-family: 'Playfair Display', serif;
}

@media (max-width: 414px) {
  .logo {
    width: 75px;
    height: 75px;
  }
  .page-name {
    font-size: xx-large;
  }
}

@media (min-width: 415px) and (max-width: 1023px) {
  .logo {
    width: 100px;
    height: 100px;
  }
  .page-name {
    font-size: xx-large;
  }
}
</style>
