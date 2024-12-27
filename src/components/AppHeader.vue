<script>
import { useCartStore } from '../stores/useCartStore';
import { useUserStore } from '../stores/useUserStore';

export default {
  setup() {
    return { userStore: useUserStore(), cartStore: useCartStore() };
  },
  data() {
    return {
      links: [
        { name: 'home', label: 'Home' },
        { name: 'recipes', label: 'Recipes' },
        { name: 'about', label: 'About' },
        { name: 'contacts', label: 'Contacts' },
        { name: 'liked', label: 'Liked' },
        { name: 'register', label: 'Register' },
        { name: 'login', label: 'Login' },

      ],
    };
  },
  computed: {
    username() {
      return this.userStore.user?.username ?? '';
    },
    filteredLinks() {
      // If username exists, filter out the login and register links
      if (this.username) {
        return this.links.filter(link => link.name !== 'login' && link.name !== 'register');
      }
      // If no user is logged in, return all links
      return this.links;
    },
    cartLength() {
      return this.cartStore.products.size;
    },
  },
  async created() {
    await this.userStore.reAuthUser();
  },
  methods: {
    onCartClick() {
      this.$router.push({ name: 'cart' });
    },
  },
};
</script>

<template>
  <header>
    <nav>
      <ul class="nav-list">
        <li class="logo-container">
          <img src="file:///C:/Users/Acer/Downloads/46c1b88c-af0c-4ba2-aef3-50f61752ac55.webp">
        </li>
      </ul>
      <ul class="nav-list">
        <li v-for="link in filteredLinks" :key="link.path">
          <router-link :to="{ name: link.name }">
            {{ link.label }}
          </router-link>
        </li>
        <li>
          <button type="button" class="primary" @click="onCartClick">
            Cart <span v-if="cartLength">{{ cartLength }}</span>
          </button>
        </li>
        <li>
          <button v-if="username" type="button" class="outline">
            {{ username }}
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin-bottom: 4rem;
  background-color: #fffbe6;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding-top: 20px;
  padding-bottom: 20px;
}

nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #ffd966;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 5rem;
  height: 5rem;
}

.logo-container img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  object-fit: contain;
}

.logo-container:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}

.nav-list {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 1.5rem;
}

.nav-list a button {
  text-decoration: none;
  color: #333;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  background-color: #ffd966;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.nav-list a:hover {
  transform: scale(1.1);
  background-color: #ffe8a1;
}

@media (max-width: 768px) {
  nav {
    flex-direction: column;
  }

  .nav-list {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
