<script>
import { categories } from '../../../constants/categories';

export default {
  data() {
    return {
      categories,
      active: '',
    };
  },
  methods: {
    onSelect(value) {
      this.active = this.active === value ? '' : value;
    },
  },
};
</script>

<template>
  <ul role="list" class="categories">
    <li v-for="category in categories" :key="`category-btn-${category.value}`">
      <button :class="[category.value === active ? 'primary' : 'secondary outline']" @click="onSelect(category.value)">
        {{ category.name }}
      </button>
    </li>
  </ul>
</template>

<style scoped>
.categories {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
</style>
