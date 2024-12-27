<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    submitForm() {
      console.log('Submitting:', this.form);
      // Add here your logic to send the form data to your server
    },
  },
};
</script>

<template>
  <div class="contacts-page">
    <h1>Contacts</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

    <div class="contact-info">
      <h2>Contact Us</h2>
      <p>Email: contact@example.com</p>
      <p>Phone: (123) 456-7890</p>
    </div>

    <div class="social-media">
      <h2>Follow Us</h2>
      <a href="https://facebook.com" target="_blank">Facebook</a>
      <a href="https://twitter.com" target="_blank">Twitter</a>
      <a href="https://instagram.com" target="_blank">Instagram</a>
    </div>

    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="form.name" required>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" required>
      </div>
      <div>
        <label for="message">Message:</label>
        <textarea id="message" v-model="form.message" required></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<style scoped>
.contacts-page {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}

.contact-info,
.social-media {
  margin-bottom: 20px;
}

a {
  display: inline-block;
  margin-right: 10px;
}

button {
  background-color: #007BFF;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
