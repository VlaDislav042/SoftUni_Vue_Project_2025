<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
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
    </footer>
  </article>
</template>
