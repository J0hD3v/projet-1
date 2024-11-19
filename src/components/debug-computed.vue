<template>
  <h4>Debug avec utilisation de "computed"</h4>
  <article>
    <button @click="decrement(10)">-</button>
    <p>le nombre : {{ nombre }}</p>
    <button @click="increment(44)">+</button>
    <p>{{ bug }}</p>
  </article>
  <p>la fonction est déclarée dans "computed" et ne s'exécute qu'au premier chargement de la page</p>
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
  computed: {
    bug() {
      console.log("fonction exécutée");
      return this.userName == "" ? "test" : "un autre test";
    }
  },
  methods: {
    decrement(valeur) {
      this.nombre -= valeur;
    },
    increment(valeur) {
      this.nombre += valeur;
    }
  },
});
</script>

<style scoped lang="css">
article,p {
  background-color: darkturquoise;
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