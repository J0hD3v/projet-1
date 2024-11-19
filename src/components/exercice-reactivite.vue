<template>
  <section>
    <h4>TP : Le Numéro Gagnant (réactivité)</h4>
    <h6>Utilisation computed et watch</h6>
    <article class="d-flex flex-row p-2">
      <button @click="incr1()">+1</button>
      <button @click="incr5()">+5</button>
      <p>le nombre : {{ nombre }}</p>
      <br>
      <p>{{ affichage }}</p>
    </article>
  </section>
</template>

<script lang='js'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ExerciceReactivite',
  data() {
    return {
      nombre: 0,
      nombre_mystere: Math.ceil(Math.random()*20)
    };
  },
  computed: {
    affichage() {
      if (this.nombre < this.nombre_mystere) {
        return "Essaie Encore"; 
      } else if (this.nombre === this.nombre_mystere) {
        return "Bravo !";
      } else {
        return "Tu as dépassé le Nb mystère";
      }
    }
  },
  watch: {
    nombre(newValue) {
      if (newValue > this.nombre_mystere) {
        setTimeout(() => {
          this.nombre = 0;
        }, 3000);
      }
    }
  },
  methods: {
    incr1() {
      this.nombre += 1;
    },
    incr5() {
      this.nombre += 5;
    }
  },
});
</script>

<style scoped lang="css">
article>* {
  margin: 0 1em;
}
</style>