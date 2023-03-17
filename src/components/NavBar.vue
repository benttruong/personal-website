<template>
  <nav>
    <ul>
      <li>
        <RouterLink class="link" to="/">
          <span class="material-symbols-outlined"> home </span>
          <p>About Me</p>
        </RouterLink>
      </li>
      <li>
        <RouterLink class="link" to="/background">
          <span class="material-symbols-outlined"> school </span>
          <p>Background</p>
        </RouterLink>
      </li>
      <li>
        <RouterLink class="link" to="/projects">
          <span class="material-symbols-outlined"> code_blocks </span>
          <p>Projects</p>
        </RouterLink>
      </li>
      <li>
        <RouterLink class="link" to="/contact">
          <span class="material-symbols-outlined"> contact_mail </span>
          <p>Contact Me</p>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
@media (max-width: 767px) {
  p {
    display: none;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  p {
    font-size: large;
  }
}

.link {
  display: flex;
}

ul {
  padding: 0;
  text-align: center;
}
span {
  padding: 1rem 0;
}

p { 
  padding-left: 0.5rem;
}

nav {
  padding: 0;
  font-size: x-large;
  padding: 0;
}


</style>
