<script>
import { useCartStore } from '../../../stores/useCartStore';
import { useFavoritesStore } from '../../../stores/useFavoritesStore';
import { useUserStore } from '../../../stores/useUserStore';

export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return { favoritesStore: useFavoritesStore(), userStore: useUserStore(), cartStore: useCartStore() };
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
      <button class="secondary outline" @click="cartStore.addToCart(product)">
        Add to calculator
      </button>
      <button v-if="userStore.isUserLocked" type="button" class="contrast" :class="[isFavorite ? '' : 'outline']"
        @click="favoritesStore.toggleFavorite(product.id)">
        {{ isFavorite ? 'Dislike 🖤' : 'Like ❤️' }}
      </button>
    </footer>
  </article>
</template>

<style scoped>
article {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 300px;
  margin: 10px;
  border: 1px solid #444;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 16px;
  height: 100%;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
}

img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

h2,
p {
  margin: 10px 0;
}

button {
  margin-top: 10px;
  flex: 1;
}

button+button {
  margin-left: 10px;
}
</style>
