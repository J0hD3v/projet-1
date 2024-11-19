<template>
  <section>
    <input v-model="newFilm" />
    <button v-on:click="addFilms(newFilm)">Ajouter</button>
    <ul>
      <li v-if="films.length > 0" v-for="(film,index) in films" :key="index">{{ film }}
        <button @click="deleteFilm(index)">Supprimer {{ index }}</button>
      </li>
      <li v-else>Aucun film</li>
    </ul>
  </section>
</template>

<script lang='js'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ExerciceFilmsList',
  data() {
    return {
      newFilm: "",
      films: [
        "ceci est le film 1",
        "ceci est le film 2",
        "ceci est le film 3",
      ]
    };
  },
  methods: {
    addFilms(newFilm) {
      if (newFilm != "") {
        this.films.push(newFilm);
      }
    },
    deleteFilm(index) {
      console.log('ok');
      this.films.splice(index,1);
    }
  },
});
</script>

<style scoped lang="css">
  section {
    background-color: bisque;
    margin: 1em;
    padding: 1.5rem;
    &>ul>li {
      margin: 10px;
      list-style-type: none;
    }
  }
</style>