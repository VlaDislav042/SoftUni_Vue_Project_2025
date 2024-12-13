<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    errors: {
      type: Array,
      required: true,
    },
    required: Boolean,
    disabled: Boolean,
  },
};
</script>

<template>
  <fieldset>
    <label>
      <span>{{ title }} <i v-if="required">*</i></span>
      <slot />
    </label>
    <div class="errorContainer">
      <strong v-for="error of errors" :key="error.$uid">
        {{ error.$message }}
      </strong>
    </div>
  </fieldset>
</template>

<style scoped>
span {
  display: block;

  i {
    color: red;
  }
}

.errorContainer {
  display: flex;
  gap: 0.25rem;
  color: red;
  font-size: 0.75rem;
  font-weight: bold;
}
</style>
