<template>
  <div>
    <h2>TP DataBinding - Profile User</h2>
    <article>
      <img v-bind:src="variable_source" v-bind:alt="variable_alt">
      <p v-bind:innerText="variable_nom"></p>
      <input type="text" v-bind:value="variable_nom">
      <p>Age : <span v-bind:innerText="variable_age"></span> ans</p>
      <p>Age +10 : <span v-bind:innerText="maFonctionNombrePlus10()"></span> ans</p>
      <p>Nombre Fétiche : <span v-bind:innerText="maFonctionNombreRandom()"></span></p>
    </article>
  </div>
</template>

<script lang='js'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ExerciceDataBinding',
  data() {
    return {
      variable_source: "https://anniversaire-celebrite.com/upload/250x333/luigi-250.jpg",
      variable_alt: "alt de l'image",
      variable_nom: "L.U.I.G.I",
      variable_age: 50,
    };
  },
  methods: {
    maFonctionNombreRandom() {
      return Math.floor(Math.random()*50);
    },
    maFonctionNombrePlus10() {
      return this.variable_age + 10;
    }
  },
});
</script>

<style scoped lang="css">
article {
  background-color: beige;
  display: flex;
  flex-direction: column;
  align-items: center;
  &>img {
    height: 20vh;
  }
}
</style>