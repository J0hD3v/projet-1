<template>
  <article>
    <button @click="decrement(10)">-</button>
    <p>le nombre : {{ nombre }}</p>
    <button @click="increment(44)">+</button>
  </article>
</template>

<script lang='js'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Compteur',
  data() {
    return {
      nombre : 33
    };
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
article {
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