<template>
  <section>
    <h4>Exercice style dynamique 2 !</h4>

    <input type="text" id="inputText1" placeholder="Saisir... classe1 / classe2" v-model="maClasse">
    <p v-bind:class="maClasse" v-bind:style="{'visibility': isVisible}">{{ text1 }}</p>

    <input type="text" id="inputText2" placeholder="Saisir la couleur ..." v-model="maCouleur">
    <p v-bind:style="{'color': maCouleur}" >{{ text2 }}</p>

    <button @click="toggleActive">Interrupteur Affichage texte 1</button>
  </section>
</template>

<script lang='js'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ExerciceStyleDynamic2',
  data() {
    return {
      text1: "Hello World (classe dynamique)",
      text2: "Hello World (couleur dynamique)",
      maClasse: "",
      maCouleur: "",
      isVisible: 'visible',
    };
  },
  computed: {
    toggleActive() {
      this.isVisible = this.isVisible === 'visible' ? 'hidden' : 'visible';
    }
  },
  methods: {
  },
});
</script>

<style scoped lang="css">
.classe1 {
  background-color: peru;
  font-weight: bold;
}
.classe2 {
  background-color: coral;
  font-weight: bolder;
}
</style>