<template>
  <!-- Main container for the contact page -->
  <div class="container">
    <h2>Contact Me</h2>
    <p>If you have any questions or would like to get in touch, please fill out the form below.</p>
    <!-- Contact form -->
    <form @submit.prevent="submitForm">
      <input v-model="name" placeholder="Your Name" required />
      <input v-model="email" placeholder="Your Email" type="email" required />
      <textarea v-model="message" placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
  data() {
    return {
      // Form fields for contact
      name: '',
      email: '',
      message: ''
    };
  },
  methods: {
    // Handles form submission (currently just shows an alert)
    submitForm() {
      alert('Message sent!');
      this.name = this.email = this.message = '';
    }
  }
};
</script>

<style scoped>
/* Main container styling for the contact page */
.container {
  max-width: 500px;
  margin: 2rem auto;
  background: #232323;
  border-radius: 1.2rem;
  box-shadow: 0 2px 18px rgba(0,0,0,0.15);
  padding: 2rem 1.5rem;
  color: #eee;
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
  width: 95vw;
}

h2 {
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

p {
  text-align: center;
  color: #aaa;
  margin-bottom: 1.5rem;
}

/* Contact form layout */
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Input and textarea styling */
input, textarea {
  background: #292929;
  border: none;
  padding: 0.8rem;
  color: #fff;
  border-radius: 0.7rem;
  font-size: 1rem;
  resize: none;
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
}

/* Button styling */
button {
  background: #4fc3f7;
  color: #222;
  border: none;
  padding: 0.8rem;
  border-radius: 0.7rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}

button:hover {
  background: #0288d1;
  color: #fff;
}

@media (max-width: 600px) {
  .container {
    padding: 1rem 0.5rem;
    border-radius: 0.7rem;
    margin: 1rem 0.2rem;
    width: 99vw;
    min-width: 0;
  }
  h2 {
    font-size: 1.1rem;
  }
  input, textarea, button {
    font-size: 0.95rem;
    padding: 0.6rem;
  }
  form {
    gap: 0.7rem;
  }
}
</style>
