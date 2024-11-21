<template>
  <section>
    <form action="" method="get" class=" d-flex flex-column p-4 bg-primary" v-on:submit.prevent="submitData">
      <input type="text" placeholder="Saisir le nom" v-model="enteredName">
      <input type="tel" placeholder="Saisir le téléphone" v-model="enteredPhone">
      <input type="text" placeholder="Saisir le mail" v-model="enteredMail">
      <button type="submit">Ajouter</button>
    </form>
  </section>
</template>

<script lang='js'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NewAmi',
  components: {
  },
  props: {
    // v-model
    modelValue: {
      default: '',
    },
  },
  emits: [
    "add-ami"
  ],
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredMail: "",
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
    submitData() {
      console.log("submit");
      this.$emit('add-ami',this.enteredName,this.enteredPhone,this.enteredMail);
    }
  },
});
</script>

<style scoped lang="css">
</style>