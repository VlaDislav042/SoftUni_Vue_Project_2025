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
  <progress v-if="favoritesStore.isLoading" />

  <div v-else-if="favoritesStore.favoriteProducts.length > 0" class="products">
    <ProductCard v-for="prod in favoritesStore.favoriteProducts" :key="prod.title" :product="prod" />
  </div>
</template>

<style scoped>
.products {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
}
</style>
