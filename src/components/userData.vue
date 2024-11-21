<template>
  <section class="d-flex flex-column align-items-center m-4">
    <h3>Formulaire d'édition :</h3>
    <input type="text" placeholder="Nom" v-model="newName">
    <input type="text" placeholder="Age" v-model="newAge">
    <button type="button" @click="majData">MAJ des Data</button>
  </section>
</template>

<script lang='js'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UserData',
  components: {
  },
  props: {
    // v-model
    modelValue: {
      default: '',
    },
  },
  emits: {
    'newData': function(leNouveauNom,leNouveauAge) {
      if(leNouveauNom && leNouveauAge){
        return true;
      }
      else if (!leNouveauNom){
        console.warn('Pas de nouveau nom');
        return false;
      }
      else if (!leNouveauAge){
        console.warn('Pas de nouveau age');
        return false;
      }
    }
  },
  data() {
    return {
      newName: "",
      newAge: "",
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
    majData() {
      console.log("submit envoyé");
      this.$emit('newData',this.newName,this.newAge);
    }
  },
});
</script>

<style scoped lang="css">
</style>