<template>
  <div>
    <input v-model="newTask" />
    <button v-on:click="addTask(newTask)">Ajouter</button>
    <li v-for="task in tasks">
      {{ task }}
    </li>
  </div>
</template>

<script lang='js'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TaskList',
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
      newTask: "",
      tasks: [
        "ceci est la tache 1",
        "ceci est la tache 2",
        "ceci est la tache 3",
      ]
    };
  },
  methods: {
    addTask(newTask) {
      this.tasks.push(newTask);
    }
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
});
</script>

<style scoped lang="css">
</style>