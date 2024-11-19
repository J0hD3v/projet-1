<template>
  <section>
    <h4>Exercice style dynamique</h4>
    <h6>En modifiant l'argument style</h6>
    <article v-bind:style="{ 'backgroundColor': background_color, 'color': text_color }" @click="swap1">
      <p>Card 1 title</p>
    </article>

    <h6>En modifiant la classe</h6>
    <article v-bind:class="{ maClasse : isActive }" @click="swap2">
      <p>Card 2 title</p>
    </article>
  </section>
</template>

<script lang='js'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ExerciceStyleDynamic',
  data() {
    return {
      text_color: 'red',
      background_color: 'lightblue',
      isActive: true
    };
  },
  computed: {
    swap1() {
      this.text_color = this.text_color == 'lightblue' ? 'red' : 'lightblue';
      this.background_color = this.background_color == 'red' ? 'lightblue' : 'red';
    },
    swap2() {
      this.isActive = !this.isActive;
    },
  },
  methods: {
  },
});
</script>

<style scoped lang="css">
.maClasse {
  color: beige;
  background-color: cadetblue;
}
</style>