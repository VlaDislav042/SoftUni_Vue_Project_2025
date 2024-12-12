<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import Products from './pages/Products.vue';

export default {
  components: {
    AppFooter,
    AppHeader,
    Products,
  },
};
</script>

<template>
  <AppHeader />
  <main>
    <Products />
  </main>
  <AppFooter />
</template>
