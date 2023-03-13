<script setup>



</script>

<template>
  <span class="section-header">Contact Me</span>
  <div class="container">
    <div class="info">
      <label for="name">Name:</label>
      <input type="text" id="name" />
    </div>
    <div class="info">
      <label for="email">Email:</label>
      <input type="email" id="email" />
    </div>
    <div class="message">
      <label for="message">Message:</label>
      <input type="text" id="message" />
    </div>
  </div>

  <div>
    <p id="test">{{ name }} - {{ email }} - {{ message }}</p>
  </div>
</template>

<style scoped>
label {
  padding: 0.25rem 0;
  font-size: larger;
  color: salmon;
  width: 30%;
}

.info {
  /* margin: 2rem; */
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-items: center;
}

input {
    padding: 0.5rem 0;
  height: 2rem;
  width: 70%;
}

.message {
    display: flex;
    flex-direction: column;
  padding: 1rem 0;
}

#message {
  width: 100%;
  height: 4rem;
}

.container{
    justify-items: center;
}
</style>
