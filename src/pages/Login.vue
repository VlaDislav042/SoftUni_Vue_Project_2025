<script>
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import { useUserStore } from '../stores/useUserStore';
import FormFieldset from './Register/components/FormFieldset.vue';

export default {
  components: {
    FormFieldset,
  },
  setup() {
    return { v$: useVuelidate(), userStore: useUserStore() };
  },
  data() {
    return {
      form: {
        username: 'emilys',
        password: 'emilyspass',
      },
    };
  },
  validations() {
    return {
      form: {
        username: { required },
        password: { required },

      },
    };
  },
  mounted() {
    this.userStore.reAuthUser();
  },
  methods: {
    async onLogin() {
      const isValid = await this.v$.$validate();
      if (!isValid) {
        return;
      }
      await this.userStore.loginUser(this.form);
      this.$router.push({ path: '/products' });
    },
  },
};
</script>

<template>
  <div>
    <article class="formContainer">
      <form @submit.prevent="onLogin">
        <FormFieldset title="Email" :errors="v$.form.username.$errors">
          <input v-model="v$.form.username.$model" type="text" placeholder="Enter email">
        </FormFieldset>

        <FormFieldset title="Password" :errors="v$.form.password.$errors">
          <input v-model="v$.form.password.$model" type="password" placeholder="Enter password">
        </FormFieldset>

        <button class="primary" type="submit">
          Login
        </button>
      </form>
    </article>
  </div>
</template>

<style>
.formContainer {
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

}

.formContainer article {
  width: 100%;
  max-width: 500px;
}
</style>
