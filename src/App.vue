<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import ComponentsStarter from './components/ComponentsStarter.vue';

export default {
  components: {
    ComponentsStarter,
    AppFooter,
    AppHeader,
  },
};
</script>

<template>
  <AppHeader />
  <main>
    <ComponentsStarter />
  </main>
  <AppFooter />
</template>
