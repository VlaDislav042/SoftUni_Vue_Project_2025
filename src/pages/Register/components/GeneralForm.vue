<script>
import useVuelidate from '@vuelidate/core';
import { alphaNum, email, helpers, maxLength, minLength, numeric, required, sameAs } from '@vuelidate/validators';
import DoubleRow from './DoubleRow.vue';
import FormFieldset from './FormFieldset.vue';

const separateNames = helpers.regex(/^[A-Z][a-z]+ [A-Z][a-z]*$/);

function minAge(minAge) {
  return helpers.withParams(
    { value: minAge },
    (value) => {
      const age = new Date(new Date() - new Date(value)).getFullYear() - 1970;
      return age > minAge;
    },
  );
}

export default {
  components: {
    FormFieldset,
    DoubleRow,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  emits: ['next'],
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
        name: {
          separateNames: helpers.withMessage('Field must contains two separate names', separateNames),
          required,
        },
        password: {
          required,
          minLength: minLength(3),
          maxLength: maxLength(16),
          alphaNum,
        },
        confirmPassword: {
          sameAsPassword: sameAs(this.formData.password),
        },
        email: { required, email },
        phone: {
          required,
          numeric,
          minLength: minLength(9),
          maxLength: maxLength(9),
        },
        gender: { required },
        dateOfBirth: {
          required,
          minimalAge: helpers.withMessage(
            ({
              $params,
            }) => `You need to be at a minimum of ${$params.value}+ years old`,
            minAge(13),
          ),
        },
      },
    };
  },
  watch: {
    data: {
      handler(newVal, oldVal) {
        const areSame = oldVal && (JSON.stringify(Object.entries(newVal).sort()) !== JSON.stringify(Object.entries(oldVal).sort()));
        if (!areSame) {
          this.initState(newVal);
        }
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    async onSubmit() {
      const isValid = await this.v$.$validate();
      if (isValid) {
        this.$emit('next', this.formData);
      }
      console.log('isValid', isValid, this.formData);
    },
    initState(dataPropVal) {
      this.formData = {
        name: dataPropVal.name,
        password: dataPropVal.password,
        confirmPassword: dataPropVal.confirmPassword,
        email: dataPropVal.email,
        phone: dataPropVal.phone,
        gender: dataPropVal.gender,
        dateOfBirth: dataPropVal.dateOfBirth,
      };
    },
  },
};
</script>

<template>
  <form @submit.prevent="onSubmit">
    <FormFieldset title="Name" :errors="v$.formData.name.$errors">
      <input v-model="formData.name" type="text" placeholder="Ivan Ivanov" @blur="v$.formData.name.$touch">
    </FormFieldset>
    <DoubleRow>
      <FormFieldset title="Password" :errors="v$.formData.password.$errors">
        <input v-model="v$.formData.password.$model" type="text" placeholder="***********">
      </FormFieldset>
      <FormFieldset title="Confirm" :errors="v$.formData.confirmPassword.$errors">
        <input v-model="v$.formData.confirmPassword.$model" type="text" placeholder="***********">
      </FormFieldset>
    </DoubleRow>
    <DoubleRow>
      <FormFieldset title="Email" :errors="v$.formData.email.$errors">
        <input v-model="v$.formData.email.$model" type="text" placeholder="ivan@gmail.com">
      </FormFieldset>
      <FormFieldset title="Phone Number" :errors="v$.formData.phone.$errors">
        <input v-model.number="v$.formData.phone.$model" type="text" placeholder="088 888 8888">
      </FormFieldset>
    </DoubleRow>
    <DoubleRow>
      <FormFieldset title="Gender" :errors="v$.formData.gender.$errors">
        <select v-model="v$.formData.gender.$model">
          <option value="">
            Select gender
          </option>
          <option value="male">
            Male
          </option>
          <option value="female">
            Female
          </option>
        </select>
      </FormFieldset>
      <FormFieldset title="Date of Birth" :errors="v$.formData.dateOfBirth.$errors">
        <input v-model="v$.formData.dateOfBirth.$model" type="date" placeholder="">
      </FormFieldset>
    </DoubleRow>

    <button type="submit" class="primary">
      NEXT
    </button>
  </form>
</template>

<style>
form {
  display: grid;
  gap: 1rem;
}
</style>
