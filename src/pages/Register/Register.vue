<script>
import GeneralForm from './components/GeneralForm.vue';

export default {
  components: {
    GeneralForm,
  },
};
</script>

<template>
  <section>
    <article>
      <header>
        <h2>STEP 1: GENERAL INFORMATION</h2>
      </header>
      <GeneralForm />
    </article>
  </section>
</template>

<style scoped>
section {
  padding: 1rem;

  article {
    max-width: 800px;
    margin: auto;
  }
}
</style>
