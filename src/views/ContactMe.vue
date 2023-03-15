<script setup>
function send() {
  const name = document.getElementById('name').value
  const email = document.getElementById('email').value
  const message = document.getElementById('message').value

  console.log(
    '============ MESSAGE ============\n' +
      'Name: ' +
      name +
      '\n' +
      'Email: ' +
      email +
      '\n' +
      'Message: ' +
      message +
      '\n' +
      '============ ******* ============'
  )
}
</script>
<template>
  <span class="section-header">Contact Me</span>
  <form class="container" @submit.prevent="send">
  <p class="note">For the time being, this form does not actually have a backend to handle the data yet. When the form is completed and the Send button is clicked, there will be a message printed to the console log that confirms the event has been handled. The functionality of the form will be implemented in the future, along with expansion for the rest of this website.</p>
    <section class="info">
      <label for="name">Name:</label>
      <input type="text" id="name" required />
    </section>
    <section class="info">
      <label for="email">Email:</label>
      <input type="email" id="email" required />
    </section>
    <section class="message">
      <label for="message">Message:</label>
      <textarea type="text" id="message" required></textarea>
    </section>
    <section class="buttons">
      <button type="submit" id="send">Send</button>
      <button type="reset" id="clear">Clear</button>
    </section>
  </form>
</template>

<style scoped>
@media (max-width: 414px) {
  form {
    padding: 0;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  form {
    padding: 0 10%;
  }
}

@media (min-width: 1024px) {
  form {
    padding: 0 15%;
  }

  label {
    font-size: larger;
  }
}

label {
  padding: 0.25rem 0;
  font-weight:900;
  width: 30%;
}

.info {
  padding: 1rem 0;
  display: flex;
  flex-direction: row;
  justify-items: center;
}

input {
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

.buttons {
  text-align: center;
}

button {
  margin: 0 1rem;
  width: 25%;
  height: 2rem;
  color: antiquewhite;
  font-weight: bolder;
  border-radius: 10%;
  border: 2px;
  border-style: ridge;
}

#send {
  background-color: darkgreen;
}

#clear {
  background-color: darkred;
}

#send:hover,
#clear:hover {
  background-color: slateblue;
  cursor: pointer;
}

#send:active,
#clear:active {
  background-color: indigo;
}

.note {
  text-align: center;
  padding: 2%;
}

</style>
