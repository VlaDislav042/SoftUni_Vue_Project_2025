<script>
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import DoubleRow from './DoubleRow.vue';
import FormFieldset from './FormFieldset.vue';

export default {
  components: {
    FormFieldset,
    DoubleRow,
  },
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      formData: {
        name: '',
        password: '',
        confirmPassword: '',
        email: '',
        phone: '',
        gender: '',
        dateOfBirth: '',
      },
    };
  },
  validations() {
    return {
      formData: {
        //name: '',
        //password: '',
        //confirmPassword: '',
        //email: '',
        //phone: '',
        gender: { required },
        //dateOfBirth: '',
      },
    };
  },
};
</script>

<template>
  <form>
    <FormFieldset title="Name">
      <input type="text" placeholder="Ivan Ivanov">
    </FormFieldset>
    <DoubleRow>
      <FormFieldset title="Password">
        <input type="text" placeholder="***********">
      </FormFieldset>
      <FormFieldset title="Confirm">
        <input type="text" placeholder="***********">
      </FormFieldset>
    </DoubleRow>
    <DoubleRow>
      <FormFieldset title="Email">
        <input type="text" placeholder="ivan@gmail.com">
      </FormFieldset>
      <FormFieldset title="Phone Number">
        <input type="text" placeholder="088 888 8888">
      </FormFieldset>
    </DoubleRow>
    <DoubleRow>
      <FormFieldset title="Gender" :errors="v$.formData.gender.$errors">
        <select v-model="v$.formData.gender.$model">
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </FormFieldset>
      <FormFieldset title="Date of Birth">
        <input type="date" placeholder="">
      </FormFieldset>
    </DoubleRow>

    <button type="submit" class="primary">NEXT</button>
  </form>
</template>

<style>
form {
  display: grid;
  gap: 1rem;
}
</style>
