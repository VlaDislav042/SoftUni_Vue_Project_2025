<script>
import { getProductsByIds } from '../../services/products';
import { useCartStore } from '../../stores/useCartStore';
import CartTableRow from '../Cart/CartTableRow.vue';

export default {
  components: {
    CartTableRow,
  },
  setup() {
    return { cartStore: useCartStore() };
  },
  data() {
    return {
      products: [],
      isLoading: true,
    };
  },
  computed: {
    totalPrice() {
      const total = this.products.reduce((accumulator, prod) => {
        return accumulator + prod.caloriesPerServing * (this.cartStore.products.get(prod.id)?.quantity ?? 0);
      }, 0);
      return Math.round((total + Number.EPSILON) * 100) / 100;
    },
  },
  async created() {
    const response = await getProductsByIds(Array.from(this.cartStore.products.keys()));
    this.products = response;
    this.isLoading = false;
  },
  methods: {
    onDelete(productId) {
      this.products = this.products.filter(prod => prod.id !== productId);
      this.cartStore.removeFromCart(productId);
    },
  },
};
</script>

<template>
  <h1 style="text-align: center;">
    Calculator
  </h1>
  <div v-if="products.length > 0" class="pageContainer">
    <progress v-if="isLoading" />
    <article v-else-if="products.length">
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Calories</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <CartTableRow v-for="product in products" :key="product.id" :product="product"
            @delete="onDelete(product.id)" />
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3">
              Total calories:
            </td>
            <td class="price">
              {{ totalPrice }} kcal
            </td>
          </tr>
        </tfoot>
      </table>
    </article>
  </div>
  <div v-else>
    <p>Look like you have nothing in your cart.</p>
  </div>
</template>

<style scoped>
.pageContainer {
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

article {
  width: 600px;
}

p {
  font-size: 24px;
  /* Increases the font size */
  color: white;
  /* Changes the text color to white */
  text-align: center;
  /* Centers the text */
  margin-top: 20px;
  /* Adds some space above the text */
}
</style>
