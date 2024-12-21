<script>
import { useFavoritesStore } from '../../../stores/useFavoritesStore';

export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return { favoritesStore: useFavoritesStore() };
  },
  computed: {
    isFavorite() {
      return this.favoritesStore.isFavorite(this.product.id);
    },
  },
};
</script>

<template>
  <article>
    <img :src="product.image">
    <h2>{{ product.name }}</h2>
    <p><b>Products</b>: {{ product.ingredients.join(", ") }}</p>
    <p><b>Calories</b>: {{ product.caloriesPerServing }} kcal </p>
    <footer>
      <button class="secondary outline">
        Add to read 📖
      </button>
      <button type="button" class="contrast" :class="[isFavorite ? '' : 'outline']"
        @click="favoritesStore.toggleFavorite(product.id)">
        {{ isFavorite ? 'Dislike 🖤' : 'Like ❤️' }}
      </button>
    </footer>
  </article>
</template>
