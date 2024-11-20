<template>
  <article class="d-flex flex-column m-2 p-4 bg-secondary">
    <h6 class="bg-light">{{ leNom }}</h6>
    <h5>{{ premium == 1 ? "Ami Premium" : "Ami Nul" }}</h5>
    <button @click="switchDetailsVisible">{{ detailsVisible==false ? 'Voir Détails' : 'Masquer Détails' }}</button>
    <h6 v-if="detailsVisible" class="bg-light">{{ lePhone }}</h6>
    <h6 v-if="detailsVisible" class="bg-light">{{ leMail }}</h6>
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
    "premium",
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