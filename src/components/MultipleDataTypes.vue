<template>
  <div id="list_data_types" class="d-flex flex-column align-items-center p-2">
    <p>{{ myString }}</p>
    <p>{{ myInt }}</p>
    <p>{{ myArray }}</p>
    <p>{{ myObject }}</p>
  </div>
</template>

<script lang='js'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MultipleDataTypes',
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
      myString: "chaine de caractères",
      myInt:  1234567890,
      myArray: ['array_index_0','array_index_1','array_index_2'],
      myObject: {prop1: 'value_1',prop2: 'value_2',prop3: 'value_3'}
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
  },
});
</script>

<style scoped lang="css">
  #list_data_types {
    background-color: aliceblue;
  }
</style>