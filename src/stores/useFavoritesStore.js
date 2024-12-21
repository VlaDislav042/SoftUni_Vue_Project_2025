import { defineStore } from 'pinia';

export const useFavoritesStore = defineStore('favoriteStore', {
  state: () => ({
    favorites: new Set([]),
  }),
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
  },
});
