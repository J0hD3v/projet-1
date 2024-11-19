<template>
  <div>
    <input type="text" v-on:keyup="display($event)">
    <p>{{ texte }}</p>
    <input type="text" v-on:keyup.esc="displayBis($event)">
    <p>{{ texteBis }}</p>
  </div>
  <button @click="alerte()">Alerte</button>
</template>

<script lang='js'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ExerciceEventBinding',
  data() {
    return {
      texte: "recopie 1 : ",
      texteBis: "recopie 2 (echap): "
    };
  },
  methods: {
    display(e) {
      this.texte += e.key;
    },
    displayBis(e) {
      this.texteBis += e.target.value;
    },alerte() {
      alert("ALERTE");
    }
  },
});
</script>

<style scoped lang="css">
</style>