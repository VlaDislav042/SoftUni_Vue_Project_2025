<script>
import ProductCard from '../pages/Product/components/ProductCard.vue';
import { useFavoritesStore } from '../stores/useFavoritesStore';

export default {
  components: {
    ProductCard,
  },
  setup() {
    return { favoritesStore: useFavoritesStore() };
  },
  async created() {
    await this.favoritesStore.loadFavorites();
  },
  unmounted() {
    this.favoritesStore.resetProducts();
  },
};
</script>

<template>
  <h1 style="text-align: center;">
    Liked
  </h1>
  <progress v-if="favoritesStore.isLoading" />

  <div v-else-if="favoritesStore.favoriteProducts.length > 0" class="products">
    <ProductCard v-for="prod in favoritesStore.favoriteProducts" :key="prod.title" :product="prod" />
  </div>
  <div v-else>
    <p>Looks like you haven't liked anything yet.</p>
  </div>
</template>

<style scoped>
.products {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
}

p {
  font-size: 24px;
  color: white;
  text-align: center;
  margin-top: 20px;
}
</style>
