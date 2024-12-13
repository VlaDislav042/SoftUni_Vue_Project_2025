<script>
export default {
  emits: ['select'],
};
</script>

<template>
  <footer class="footer">
    <div class="footer-container">
      <ul class="footer-links">
        <li><a href="#" @click.prevent="$emit('select', 'Home')">Home</a></li>
        <li><a href="#" @click.prevent="$emit('select', 'Products')">Products</a></li>
        <li><a href="#" @click.prevent="$emit('select', 'About')">About</a></li>
        <li><a href="#" @click.prevent="$emit('select', 'Contacts')">Contacts</a></li>
        <li><a href="#" @click.prevent="$emit('select', 'Cart')">Cart</a></li>
      </ul>
      <div class="social-icons">
        <a href="https://facebook.com" target="_blank" aria-label="Facebook">
          <i class="fab fa-facebook-f" />
        </a>
        <a href="https://twitter.com" target="_blank" aria-label="Twitter">
          <i class="fab fa-twitter" />
        </a>
        <a href="https://instagram.com" target="_blank" aria-label="Instagram">
          <i class="fab fa-instagram" />
        </a>
        <a href="https://youtube.com" target="_blank" aria-label="YouTube">
          <i class="fab fa-youtube" />
        </a>
      </div>
      <p class="footer-note">
        © 2024 Your Website. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--pico-background);
  padding: 1.5rem;
  color: var(--pico-text);
  text-align: center;
}

.footer-container {
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  padding: 0;
  list-style: none;
}

.footer-links li {
  margin: 0 0.5rem;
}

.footer-links a {
  text-decoration: none;
  color: var(--pico-text);
  font-size: 1rem;
  font-weight: bold;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: var(--pico-primary);
}

.social-icons {
  margin-top: 1rem;
  display: flex;
  gap: 1.5rem;
}

.social-icons a {
  font-size: 1.5rem;
  color: var(--pico-text);
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: var(--pico-primary);
}

.footer-note {
  margin-top: 1rem;
  font-size: 0.875rem;
  color: var(--pico-muted);
}
</style>
