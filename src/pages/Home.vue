<script>
export default {
  methods: {
    goToProductsPage() {
      this.$router.push('/products');
    },
  },
};
</script>

<template>
  <div class="hero-section">
    <div class="hero-text">
      <h1>Welcome to E-Dine</h1>
      <p>Look for a recipes from all over the world and track your calories. </p>
      <button @click="goToProductsPage">
        View recipes
      </button>
    </div>
  </div>
</template>

<style scoped>
.hero-section {
  position: relative;
  text-align: center;
  color: white;
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 140px;
}

.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
}

.hero-text h1 {
  font-size: 2.5rem;
}

.hero-text button {
  background-color: #fa923f;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  margin-top: 20px;
}

.hero-text button:hover {
  background-color: #ff7730;
}
</style>
