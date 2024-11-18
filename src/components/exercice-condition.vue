<template>
  <div>
    <p>{{ affichageConditionnel() }}</p>
  </div>
</template>

<script lang='js'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ExerciceCondition',
  /* components: {
  },
  props: {
    // v-model
    modelValue: {
      default: '',
    },
  },
  emits: {
    // v-model event with validation
    'update:modelValue': (value) => value !== null,
  }, */
  data() {
    return {
    };
  },
  /* computed: {
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
  }, */
  methods: {
    affichageConditionnel() {
      return Math.random() > 0.5 ? "Jambon" : "Fromage";
    }
  },
});
</script>

<style scoped lang="css">
</style>