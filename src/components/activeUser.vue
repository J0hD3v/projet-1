<template>
  <section class="d-flex flex-column align-items-center m-4">
    <article class="d-flex flex-column">
      <h4>{{ nom }}</h4>
      <h4>{{ age }}</h4>
      <img src="https://anniversaire-celebrite.com/upload/250x333/luigi-250.jpg" alt="image">
    </article>
  </section>
</template>

<script lang='js'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ActiveUser',
  components: {
  },
  props: [
    'leNom',
    'leAge',
  ],
  emits: {
    // v-model event with validation
    'update:modelValue': (value) => value !== null,
  },
  data() {
    return {
      nom: this.leNom,
      age: this.leAge,
    };
  },
  computed: {
    value: {
      get () {
        return this.modelValue;
      },
      set (value) {
        this.$emit('update:modelValue', value);
      },
    },
  },
  watch: {
    modelValue: {
      async handler (_newValue, _oldValue) {
        // do something
      },
      immediate: true
    },
  },
  beforeMount() {
  },
  mounted() {
  },
  updated() {
  },
  beforeUnmount() {
    // stop the wacher on modelValue
    this.$watch('modelValue', () => {}, {});
  },
  methods: {
  },
});
</script>

<style scoped lang="css">
</style>