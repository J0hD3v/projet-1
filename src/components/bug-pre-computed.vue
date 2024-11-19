<template>
  <h4>Bug avant utilisation de "computed"</h4>
  <article>
    <button @click="decrement(10)">-</button>
    <p>le nombre : {{ nombre }}</p>
    <button @click="increment(44)">+</button>
    <p>{{ bug() }}</p>
  </article>
  <p>console.log() provenant de la fonction bug() qui s'exécute quand on clique sur un bouton alors que la fonction n'est pas appelée</p>
  <p>la fonction bug() est appelée au premier chargement de la page, puis re-appelée à chaque refresh du DOM </p>
</template>

<script lang='js'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BugPreComputed',
  data() {
    return {
      nombre : 33,
      userName: ""
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
  }, */
  methods: {
    decrement(valeur) {
      this.nombre -= valeur;
    },
    increment(valeur) {
      this.nombre += valeur;
    },
    bug() {
      console.log("fonction exécutée");
      return this.userName == "" ? "test" : "un autre test";
    }
  },
});
</script>

<style scoped lang="css">
article,p {
  background-color: antiquewhite;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 1em;
  &>* {
    margin: 10px;
  }
}
</style>