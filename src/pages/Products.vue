<script>
import { getAllProducts } from '../services/products';
import ProductCard from './Product/components/ProductCard.vue';

export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      activeCategory: '',
      isLoading: true,
      products: [],
    };
  },
  computed: {
    visibleProducts() {
      return this.activeCategory === '' ? this.products : this.products.filter(prod => prod.categories === this.activeCategory);
    },
  },
  async created() {
    this.products = await getAllProducts();
    this.isLoading = false;
    const res = await getAllProducts();
    console.log(res);
  },
  methods: {
    onSelect(value) {
      this.activeCategory = this.activeCategory === value ? '' : value;
    },
  },

};
</script>

<template>
  <h1>Recipes</h1>

  <progress v-if="isLoading" />

  <div v-else-if="visibleProducts.length > 0" class="products">
    <ProductCard v-for="prod in visibleProducts" :key="prod.title" :product="prod" />
  </div>
</template>

<style scoped>
.products {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
}

h1 {
  font-size: 2.5rem;
  position: relative;
  text-align: center;
  color: white;
  margin-bottom: 20px;
}
</style>
