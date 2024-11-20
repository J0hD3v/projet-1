<template>
  <article class="d-flex flex-column m-2 p-4 bg-secondary">
    <input type="text" v-bind:value="leNom">
    <button @click="switchDetailsVisible">{{ detailsVisible==false ? 'Voir Détails' : 'Masquer Détails' }}</button>
    <input type="text" v-bind:value="lePhone" v-if="detailsVisible">
    <input type="text" v-bind:value="leMail" v-if="detailsVisible">
  </article>
</template>

<script lang='js'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UnAmi',
  /* components: {
  }, */
  props: [
    "leNom",
    "lePhone",
    "leMail",
  ],
  /* emits: {
    // v-model event with validation
    'update:modelValue': (value) => value !== null,
  }, */
  data() {
    return {
      detailsVisible: false
    };
  },
  methods: {
  },
  computed: {
    switchDetailsVisible() {
      this.detailsVisible = !this.detailsVisible;
    }
  },
  /* watch: {
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
article>* {
  text-align: center;
}
</style>