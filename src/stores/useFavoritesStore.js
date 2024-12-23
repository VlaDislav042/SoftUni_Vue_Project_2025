import { defineStore } from 'pinia';
import { getProductsByIds } from '../services/products';

export const useFavoritesStore = defineStore('favoriteStore', {
  state: () => ({
    favorites: new Set([]),
    products: [],
    isLoading: false,
  }),
  getters: {
    favoriteProducts: state => state.products.filter(prod => state.favorites.has(prod.id)),
  },
  actions: {
    isFavorite(id) {
      return this.favorites.has(id);
    },
    toggleFavorite(id) {
      const isFav = this.isFavorite(id);
      if (isFav) {
        this.favorites.delete(id);
      }
      else {
        this.favorites.add(id);
      }
    },
    async loadFavorites() {
      this.isLoading = true;
      const response = await getProductsByIds(Array.from(this.favorites));
      this.products = response;
      this.isLoading = false;
    },
    resetProducts() {
      this.products = [];
    },
  },
});
